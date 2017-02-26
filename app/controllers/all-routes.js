var express = require('express');
var mongoose = require('mongoose');
// var app = express();
var Article = mongoose.model('Article');


module.exports = function(route) {
    route.get('/reach', function(req, res, next) {
        var liszt = { music: 'classical' };
        res.json(liszt);
    });
}