const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c5cdb03da0f75e08db0747f';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos',todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo by ID', todo);
// }).catch((err) => {
//     console.log(err);
// });


var id = '5c5b7bd5e3fd12108477203f';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User ID not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
        console.log(e);
});