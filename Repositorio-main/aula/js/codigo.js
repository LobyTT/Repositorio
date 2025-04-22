function testa_form(){ /*Função sem passagem de parâmetros, ela não retorna um valor*/
    var aluno = document.forms["formalunos"]["aluno"].value; /*pega o valor digitado pelo usuario no campo com id aluno*/
    var cpf = document.forms["formalunos"]["cpf"].value;  /*pega o valor digitado pelo usuario no campo com id cpf*/
        if(aluno == ''){ //Caso o campo aluno estiver vazio ele ira exibir esta mensagem

            alert("O nome do aluno deverá ser informado"); //mensagem
            document.forms["formalunos"]["alunos"].focus(); //Desvia o foco para o campo 'alunos'
            return false; //o formulario nao irá enviar as informações, mas sim o valor 'falso'
        
        }

        if(cpf == ''){
        
            alert("O CPF deverá ser informado");
            document.forms["formalunos"]["cpf"].focus();
            return false;

        }

    return true; //caso os ifs nao derme ele vai retornar true e enviar o formulario
}