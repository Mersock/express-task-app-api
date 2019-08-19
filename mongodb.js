// CRUD create read delete
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = process.env.MOGODB_URL;
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Meersock',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }            

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Ken',
    //         age: 28
    //     },
    //     {
    //         name: 'Hel',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert document')
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'delete',
    //         completed:false
    //     }
    // ],(error,result) => {
    //     if(error){
    //         return console.log('Unable to insert document')
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5d3ec577590a120b585b7a0f")}, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(result);
    // });

    // db.collection('users').find({ age: 26}).toArray((error,users) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users)
    // });

    // db.collection('users').find({ age: 26}).count((error,count) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({ _id: new ObjectID("5d3ebdc970bab60a0e625d16") }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(result);
    // });

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(tasks);
    // });

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d3ec577590a120b585b7a0f")
    // }, {
            // $set: {
            //     name: 'Mersock'
            // }
        //     $inc:{
        //         age:1
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // });

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })    

    // db.collection('users').deleteMany({
    //     age:26
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description:'read'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});

