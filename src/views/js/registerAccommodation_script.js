const form   = document.getElementById('informacoes--primarias');
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
    document.getElementById("informacoes--primarias").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var nomeALJ = document.getElementById("iptNameALJ").value;
        var ruaALJ = document.getElementById("iptRuaALJ").value;
        var cidadeALJ = document.getElementById("iptCidade").value;
        var bairoALJ = document.getElementById("iptBairro").value;
        var estadoALJ = document.getElementById("iptEstado").value;
        var complementoALJ = document.getElementById("iptComplemento").value;
        var cepALJ = document.getElementById("iptCep").value;
        var escALJ = document.getElementsByName("iptEscCasa");
        var nomeLOC = document.getElementById("iptNameloc").value;
        var cpfLOC = document.getElementById("iptCpf").value;
        var emailLOC = document.getElementById("iptEmail").value;
        var numTelLOC = document.getElementById("iptNumTel").value;
        var instaLOC = document.getElementById("iptInstaPerfil").value;
        var faceLOC = document.getElementById("iptFacePerfil").value;
        
        var decisaoALJ;

        function escolhaTipoALJ(){
            for (var i = 0; i < escALJ.length; i++) {
                if (escALJ[i].checked) {
                    decisaoALJ = escALJ[i].value;
                break;
                }
            } 
        }

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
            decisaoAlojamento: decisaoALJ,
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
        
        return false;
    });
});
