document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var username = document.getElementById("usernameInput").value;
      var password = document.getElementById("passwordInput").value;
  
      if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return false;
      }
  
      var storedUsers = localStorage.getItem("registeredUsers");
      var users = storedUsers ? JSON.parse(storedUsers) : [];
  
      var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
      });
  
      if (authenticatedUser) {
        alert("Login bem-sucedido!");
  
       
        window.location.href = "./exibicao/exibicao.html";
      } else {
        alert("Usuário ou senha inválidos. Por favor, tente novamente.");
      }
  
      return false;
    });
  });
  