var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err)
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // res.send(req.params);
    if(!ObjectID.isValid(id)) {
        console.log('ID not valid');
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(todo) {
            res.status(200).send({todo});
            console.log(out);
        } else {
            res.status(404).send();
        }
    }).catch((err) => {
        res.status(400).send();
    });

    // else console.log(id)
});

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});

module.exports = {
    app
};