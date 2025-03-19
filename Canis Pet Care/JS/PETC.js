{
        function validarFormulario(event) {
           
            event.preventDefault();

           
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

           
            if (!usuario || !senha) {
                alert("Por favor, preencha todos os campos.");
                return; 
            }

           
            alert("Login realizado com sucesso!");
            login
        }
         }
