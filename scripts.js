// Seleciona o formulário e a mensagem de sucesso
const formSenha = document.getElementById("formSenha");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// Adiciona um evento de envio ao formulário
formSenha.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verifica se as senhas coincidem
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;

    if (senha === confirmarSenha) {
        // Exibe a mensagem de sucesso
        mensagemSucesso.style.display = "block";

        // Redireciona para a página inicial após 3 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000); // 3000 ms = 3 segundos
    } else {
        // Exibe um alerta caso as senhas não coincidam
        alert("As senhas não coincidem. Por favor, tente novamente.");
    }
});
