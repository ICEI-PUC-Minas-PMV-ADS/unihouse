const form   = document.getElementById('informacoes--primarias');

$(document).ready(function() {
    $('#iptCpf').mask('000.000.000-00');
});

$(document).ready(function() {
    $('#iptNumTel').mask('(00) 00000-0000');     
});

$(document).ready(function() {
    $('#iptCep').mask('00000-000');
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("informacoes--primarias").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var nomeALJ = document.getElementById("iptNameALJ").value;
        var ruaALJ = document.getElementById("iptRuaALJ").value;
        var cidadeALJ = document.getElementById("iptCidade").value;
        var bairoALJ = document.getElementById("iptBairro").value;
        var estadoALJ = document.getElementById("iptEstado").value;
        var complementoALJ = document.getElementById("iptComplemento").value;
        var cepALJ = document.getElementById("iptCep").value;
        var escALJ = document.querySelector('input[name="residencia"]:checked').value;
        var nomeLOC = document.getElementById("iptNameloc").value;
        var cpfLOC = document.getElementById("iptCpf").value;
        var emailLOC = document.getElementById("iptEmail").value;
        var numTelLOC = document.getElementById("iptNumTel").value;
        var instaLOC = document.getElementById("iptInstaPerfil").value;
        var faceLOC = document.getElementById("iptFacePerfil").value;
        

        if (!nomeALJ || !ruaALJ || !cidadeALJ || !bairoALJ || !estadoALJ || !complementoALJ || !cepALJ || !escALJ || !nomeLOC
            || !cpfLOC || !emailLOC || !numTelLOC || !instaLOC || !faceLOC) {
            alert("Por favor, preencha todos os campos corretamente.");
            return false;
        }

        var house = {
            nomeAlojamento: nomeALJ,
            ruaAlojamento: ruaALJ,
            cidadeAlojamento: cidadeALJ,
            bairoAlojamento: bairoALJ,
            estadoAlojamento: estadoALJ,
            complementoAlojamento: complementoALJ,
            cepAlojamento: cepALJ,
            TipoAlojamento: escALJ,
            nomeLocador: nomeLOC,
            cpfLocador: cpfLOC,
            emailLocador: emailLOC,
            numTelLocador: numTelLOC,
            instaLocador: instaLOC,
            faceLocador: faceLOC
        };

        var storedHouses = localStorage.getItem("registeredHouses");
        var houses = storedHouses ? JSON.parse(storedHouses) : [];

        houses.push(house);

        localStorage.setItem("registeredHouses", JSON.stringify(houses));

        alert("Casa registrada corretamente.");        
        window.location.href = "../../index.html";
        
        return false;
    });
});
