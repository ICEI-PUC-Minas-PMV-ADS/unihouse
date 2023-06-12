const form   = document.getElementById('form');
    const campos = document.querySelectorAll('.required');
    const spans  = document.querySelectorAll('.span-required');
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        nameValidate();
        emailValidate();
    });

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){
        if(campos[0].value.length < 3)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    function emailValidate(){
        if(!emailRegex.test(campos[1].value))
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var name = document.getElementById("NomeInput").value;
        var email = document.getElementById("EmailInput").value;
        var idade = document.getElementById("IdadeInput").value;
        var cep = document.getElementById("CepInput").value;
        var valor = document.getElementById("ValorMenInput").value;

        if (!name || !email || !idade || !valor || !cep) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
        }

        if (idade < 18) {
        alert("A idade do proprietário tem que ser mais que 18 anos");
        return false;
        }

        var house = {
            name: name,
            email: email,
            idade: idade,
            cep: cep,
            valor: valor
        };

        var storedHouses = localStorage.getItem("registeredHouses");
        var houses = storedHouses ? JSON.parse(storedHouses) : [];

        // var existingHouse = users.find(function(u) {
        // return u.username === user.username;
        // });

        // if (existingUser) {
        // alert("Usuário já cadastrado. Por favor, escolha um nome de usuário diferente.");
        // return false;
        // }

        houses.push(house);

        localStorage.setItem("registeredHouses", JSON.stringify(houses));

        //window.location.href = "login.html";

        return false;
    });
});
