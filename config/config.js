var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'todo-do'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost/todo-do-development'
    },

    test: {
        root: rootPath,
        app: {
            name: 'todo-do'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost/todo-do-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'todo-do'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost/todo-do-production'
    }
};

module.exports = config[env];