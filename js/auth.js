// Credenciais de teste
const USER_VALIDO = "comite";
const SENHA_VALIDA = "antirracista123";

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('loginError');

            if (user === USER_VALIDO && pass === SENHA_VALIDA) {
                localStorage.setItem('comite_autenticado', 'true');
                window.location.href = 'admin/dashboard.html';
            } else {
                errorMsg.style.display = 'block';
            }
        });
    }
});

// Verifica se está logado para proteger telas do admin
function verificarAutenticacao() {
    const autenticado = localStorage.getItem('comite_autenticado');
    if (autenticado !== 'true') {
        alert('Acesso restrito ao Comitê. Faça login para continuar.');
        window.location.href = 'pages/login.html';
    }
}

// Encerra a sessão
function fazerLogout() {
    localStorage.removeItem('comite_autenticado');
    window.location.href = 'pages/login.html';
}
