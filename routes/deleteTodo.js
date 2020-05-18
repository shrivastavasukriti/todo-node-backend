let Todo = require('./model/todo.model');
var deleteTodo = {
  deleteAll: function(req, res) {
    todo.deleteAll()
        .then(success => {
          res.status(200).send('Delete All Todos !! ');
        })
        .catch(err => {
            res.status(400).send('Deletion of todo failed');
        });
  }
};
module.exports = deleteTodo;