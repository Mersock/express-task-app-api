const mongoose = require('mongoose');
const connectionURL = process.env.MOGODB_URL;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

