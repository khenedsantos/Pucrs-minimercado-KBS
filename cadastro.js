// Seleciona o formulário de cadastro
const formCadastro = document.getElementById("formCadastro");

// Adicionando um evento de envio ao formulário
formCadastro.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Realiza o redirecionamento para a página de criação de senha
    window.location.href = "criar_senha.html";
});
