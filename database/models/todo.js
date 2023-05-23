const { Schema, model } = require('mongoose');

const todoSchema = Schema({
  txt: String,
  done: Boolean,
});

const Todo = model('todo', todoSchema);
module.exports = Todo;
