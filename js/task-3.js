const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', event => {
  const value = event.target.value.trim();
  output.textContent = value.length !== 0 ? value : 'Anonymous';
});
