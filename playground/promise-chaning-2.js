require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d45a438814e441b935e55eb').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed:false })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed:false });
    return count
}

deleteTaskAndCount('5d467d7101899523d705788e').then((count) => {
    console.log(count);
}).catch(error => console.log(error));