document.querySelector("form").addEventListener("submit", function(event) {
    alert("Cadastro realizado com sucesso!");
    event.preventDefault(); // Impede o envio do formulário durante os testes
});
