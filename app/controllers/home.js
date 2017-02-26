var express = require('express'),
    // router = express.Router(),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article');


module.exports = function(route) {
    route.get('/', function(req, res, next) {
        Article.find(function(err, articles) {
            if (err) return next(err);
            res.render('index', {
                title: 'Generator-Express MVC',
                articles: articles
            });
        });
    });
}