let Todo = require('./model/todo.model');
var addTodo = {
  create: function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            res.status(400).send('Adding new todo failed');
        });
  }
};
module.exports = addTodo;