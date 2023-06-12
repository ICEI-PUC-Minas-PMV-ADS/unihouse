
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordRecoveryForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var username = document.getElementById("usernameInput").value;
        var email = document.getElementById("emailInput").value;
    
        if (!username || !email) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
    
        var storedUsers = localStorage.getItem("registeredUsers");
        var users = storedUsers ? JSON.parse(storedUsers) : [];
    
        var authenticatedUser = users.find(function(user) {
            return user.username === username && user.email === email;
        });
    
        if (authenticatedUser) {
            alert("Senha encontrada: " + authenticatedUser.password);
        } else {
            alert("Usuário ou e-mail inválidos. Por favor, tente novamente.");
        }
    
        return false;
    });
});
