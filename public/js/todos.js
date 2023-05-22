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
