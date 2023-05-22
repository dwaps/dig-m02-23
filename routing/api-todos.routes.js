const router = require('express').Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/api-todos.controller');

router.get('/todos', getTodos);
router.get('/todos/:id', getTodo);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
