const { randomUUID } = require('crypto');
const { resolve } = require('path');
const { writeFileSync } = require('fs');
const Todo = require('../database/models/todo');

exports.getTodos = (req, res) => {
  res.end();
}

exports.getTodo = (req, res) => {
  res.end();
}

exports.createTodo = (req, res) => {
  const todo = new Todo({
    txt: req.body.txt,
    id: randomUUID(),
    done: false
  });
  todo.save()
    .then(saved => res.status(200).end('OK'))
    .catch(error => res.status(500).end('PAS OK'));
}

exports.updateTodo = (req, res) => {
  const index = todos.findIndex(t => t.id == req.params.id);
  todos.splice(index, 1, req.body);
  writeFileSync(resolve('database', 'data.json'), JSON.stringify({ todos }));
  res.status(200).end('OK');
}

exports.deleteTodo = (req, res) => {
  const newTodos = todos.filter(t => t.id != req.params.id);
  writeFileSync(resolve('database', 'data.json'), JSON.stringify({ todos: newTodos }));
  res.status(200).end('OK');
}