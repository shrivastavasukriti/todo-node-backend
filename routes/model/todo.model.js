const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({
    id: Number,
    title: String,
    desc: String,
    priority:String,
    label:String,
    status:String,
    start_date:Date,
    due_date:Date,
    created_by:String,
    asignee:String,
    archieved:Boolean,
    deleted:Boolean
}, { collection: 'todo' });
module.exports = mongoose.model('Todo', Todo);