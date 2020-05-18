const routes = require('express').Router();
var addTodo = require('./addTodo.js');
var updateTodo = require('./updateTodo.js');
var getTodo = require('./getTodo.js');
var deleteTodo = require('./deleteTodo.js');
 
/*
 * Routes that can be accessed for basic todo management actions
 */
routes.post('/api/todo/add', addTodo.create);
routes.put('/api/todo/update/:id', updateTodo.update);
routes.delete('/api/todo/deleteAll', deleteTodo.deleteAll);
routes.get('/api/todo/getAll', getTodo.getAll);

module.exports = routes;