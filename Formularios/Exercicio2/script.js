function validaSenha() {
    var senha = document.getElementById("password").value;
    var confSenha = document.getElementById("confPassword").value;

    if (senha !== confSenha) {
        alert("As senhas digitadas não são iguais. Por favor, digite novamente.");
        return false; 
    }

    exibirMensagemDeLogin();

    return true;
}

function exibirMensagemDeLogin() {
    var mensagem = document.getElementById("msgLogin");
    mensagem.style.display = "block";
}
