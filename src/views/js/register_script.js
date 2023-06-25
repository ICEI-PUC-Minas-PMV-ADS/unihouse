document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = document.getElementById("emailInput").value;
      var username = document.getElementById("usernameInput").value;
      var password = document.getElementById("passwordInput").value;
      var confirmPassword = document.getElementById("confirmPasswordInput").value;
  
      if (!email || !username || !password || !confirmPassword) {
        alert("Por favor, preencha todos os campos.");
        return false;
      }
  
      if (password !== confirmPassword) {
        alert("As senhas não correspondem. Por favor, tente novamente.");
        return false;
      }
  
      if (password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return false;
      }
  
      var user = {
        email: email,
        username: username,
        password: password
      };
  
      var storedUsers = localStorage.getItem("registeredUsers");
      var users = storedUsers ? JSON.parse(storedUsers) : [];
  
      var existingUser = users.find(function(u) {
        return u.username === user.username;
      });
  
      if (existingUser) {
        alert("Usuário já cadastrado. Por favor, escolha um nome de usuário diferente.");
        return false;
      }
  
      users.push(user);
  
      localStorage.setItem("registeredUsers", JSON.stringify(users));
  
      alert("Usuário cadastrado com sucesso!");
  
      localStorage['statusLogin'] = 'true'; 
      
      window.location.href = "login.html";
  
      return false;
    });
  });
  