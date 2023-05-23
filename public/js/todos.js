const txtInput = document.querySelector('input');
const btSubmit = document.querySelector('button');

btSubmit.addEventListener('click', () => {
  const txt = txtInput.value;
  if (txt.length > 3) {
    fetch('/api/todos', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ txt })
    })
    .then(res => location.reload());
  }
});

const todosInput = document.querySelectorAll('li + input');

todosInput.forEach(todoInput => {
  todoInput.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
      const todo = {
        id: todoInput.dataset.id,
        txt: todoInput.value,
        done: todoInput.dataset.done,
      };

      fetch('/api/todos/' + todo.id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
      })
      .then(res => location.reload());
    }
  })
})
