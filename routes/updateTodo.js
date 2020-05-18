let Todo = require('./model/todo.model');
var updateTodo = {
  update: function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
      if (!todo)
          res.status(404).send("data is not found");
      else
          todo.id = req.body.id;
          todo.label = req.body.label;
          todo.desc = req.body.desc;
          todo.priority = req.body.priority;
          todo.label = req.body.label;
          todo.title = req.body.title;
          todo.status = req.body.status;
          todo.start_date = req.body.start_date;
          todo.due_date = req.body.due_date;
          todo.created_by = req.body.created_by;
          todo.asignee = req.body.asignee;
          todo.archieved=req.body.archieved;
          todo.deleted = req.body.deleted;
          todo.save().then(todo => {
              res.json('Todo updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
}
};
module.exports = updateTodo;