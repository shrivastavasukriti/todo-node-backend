let Todo = require('./model/todo.model');
var getTodo = {
  getAll: function(req, res) {
    Todo.find(function(err, todo) {
        res.json(todo);
    });
  }
};

module.exports = getTodo;