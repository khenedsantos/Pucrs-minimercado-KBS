// Seleciona o formulário de agendamento e a mensagem de sucesso
const formAgendamento = document.getElementById("formAgendamento");
const mensagemAgendamento = document.getElementById("mensagemAgendamento");

// Adiciona um evento ao formulário
formAgendamento.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores selecionados
    const tipoServico = document.getElementById("tipoServico").value;
    const dataAgendamento = document.getElementById("dataAgendamento").value;
    const horarioAgendamento = document.getElementById("horarioAgendamento").value;

    // Verifica se todos os campos foram preenchidos
    if (dataAgendamento && horarioAgendamento) {
        mensagemAgendamento.style.display = "block";
        mensagemAgendamento.textContent = `Serviço de ${tipoServico} agendado para ${dataAgendamento} às ${horarioAgendamento}.`;

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            mensagemAgendamento.style.display = "none";
        }, 5000);
    } else {
        alert("Por favor, preencha todos os campos para agendar o serviço.");
    }
});
