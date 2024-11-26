// Seleciona o formulário e a mensagem de sucesso
const formAgendamento = document.getElementById("formAgendamento");
const mensagemAgendamento = document.getElementById("mensagemAgendamento");

// Adiciona o evento de envio ao formulário
formAgendamento.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verifica se todos os campos estão preenchidos
    const tipoServico = document.getElementById("tipoServico").value;
    const dataAgendamento = document.getElementById("dataAgendamento").value;
    const horarioAgendamento = document.getElementById("horarioAgendamento").value;

    if (tipoServico && dataAgendamento && horarioAgendamento) {
        // Exibe a mensagem de sucesso
        mensagemAgendamento.style.display = "block";

        // Limpa os campos do formulário
        formAgendamento.reset();

        // Redireciona para a página inicial após 3 segundos
        setTimeout(() => {
            window.location.href = "index.html"; // Substitua por sua página inicial, se necessário
        }, 3000); // 3000 ms = 3 segundos
    } else {
        alert("Por favor, preencha todos os campos para agendar o serviço.");
    }
});
