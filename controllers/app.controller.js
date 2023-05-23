const Todo = require('../database/models/todo');

exports.homeCtrl = (req, res) => {
  res.render('pages/home');
}

exports.presentationCtrl = (req, res) => {
  res.render('pages/presentation');
}

exports.todosCtrl = (req, res) => {
  Todo.find()
    .then(todos => res.render('pages/todos', { todos }))
    .catch(() => res.render('pages/todos', { todos: [] }))
}

exports.contactCtrl = (req, res) => {
  res.render('pages/contact');
}
