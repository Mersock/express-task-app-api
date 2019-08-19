const express = require('express');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;

//set middleware
// app.use((req,res,next) => {
//     console.log(req.method,req.path);
//     next();
// })


const userRouter = require('./routers/users');
const taksRouter = require('./routers/tasks');

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please up load JPG,JPEG or PNG'));
        }
        cb(undefined, true)

        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
});
const errorMiddleware = (req, res, next) => {
    throw new Error('Form my middle ware');
}
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});

//set express json
app.use(express.json());

//set router from express
app.use(userRouter);
app.use(taksRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// hash password
// const myFunction = async() => {
//     const password= 'Knz1234567';
//     const hashedPassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare(password, hashedPassword);
//     console.log(isMatch);
// }

// console.log(JSON.stringify(pet));

//gen token
// const myFunction = async () => {
//     const token = jwt.sign({ _id:'abc123' }, 'hello world',{expiresIn: '0 seconds'});
//     console.log(token);
//     const data = jwt.verify(token, 'hello world');
//     console.log(data);
// }

// myFunction();
// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
    // const tasks = await Task.findById('5d5135cd3dcbda38b19cf858')
    // await tasks.populate('owner').execPopulate();
    // console.log(tasks.owner);

    // const user = await User.findById('5d51348494c61537d05ebea8');
    // await user.populate('tasks').execPopulate();
    // console.log(user.tasks);
// }

// main();

