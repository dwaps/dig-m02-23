const { todos } = require('../database/data.json');
const { randomUUID } = require('crypto');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

exports.getTodos = (req, res) => {
  res.json(todos);
}

exports.getTodo = (req, res) => {
  res.json(todos);
}

exports.createTodo = (req, res) => {
  const todo = {
    txt: req.body.txt,
    id: randomUUID(),
    done: false
  };
  todos.unshift(todo);
  console.log(todo)
  writeFileSync(resolve('database', 'data.json'), JSON.stringify({ todos }));
  res.status(200).end('OK');
}

exports.updateTodo = (req, res) => {
  res.json(todos);
}

exports.deleteTodo = (req, res) => {
  res.json(todos);
}