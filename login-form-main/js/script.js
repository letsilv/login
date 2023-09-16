// Esse código não funciona,pois só precisa do html.
// mas permite que os usúarios insiram seu nome de usuário e senha e, em seguida, verifica se as credenciais
// correspondem às armazenadas no banco de dados. 

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === '123456') {
    // Login successful
    window.location.href = 'dashboard.html';
  } else {
    // Login failed
    alert('Invalid username or password');
  }
});