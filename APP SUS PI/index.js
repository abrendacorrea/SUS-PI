document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Para simplicidade, estamos aceitando qualquer nome de usuário e senha
        // Em uma aplicação real, você deveria verificar as credenciais com um backend

        if (username && password) {
            // Simular uma verificação de login
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'home.html';
        } else {
            alert('Por favor, preencha nome e senha.');
        }
    });
});
