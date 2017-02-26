var express = require('express'),
    // router = express.Router(),
    mongoose = require('mongoose'),
    todoModel = mongoose.model('todoModel');


module.exports = function(route) {
    route.get('/', function(req, res, next) {
        todoModel.find(function(err, articles) {
            if (err) return next(err);
            res.render('index', {
                title: 'Generator-Express MVC',
                articles: articles
            });
        });
    });
}