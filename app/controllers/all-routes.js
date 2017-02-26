var express = require('express');
var mongoose = require('mongoose');
// var app = express();
var todoModel = mongoose.model('todoModel');


module.exports = function(route) {
    route.get('/reach', function(req, res, next) {
        todoModel.find(function(err, todos) {
            if (err) { console.log(err); return next(err); } else {
                res.json(todos);
            }
        });

        // var liszt = { music: 'classical' };
        // res.json(liszt);
    });

    route.get('/:todoId', function(req, res) {
        todoModel.findById(req.params.todoId, function(err, todo) {
            if (err) { console.log(err); return next(err); } else {
                res.json(todo);
            }
        });
    });

    route.post('/reach', function(req, res) {
        var reacher = new todoModel(req.body);

        reacher.save();
        res.status(201).send(reacher);

    });
}