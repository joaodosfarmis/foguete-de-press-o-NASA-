function toggleComplete(stepId) {
    // Localiza o card do passo correspondente usando o ID passado no HTML
    const stepCard = document.getElementById(stepId);
    
    // Localiza o botão que está dentro deste card específico
    const button = stepCard.querySelector('.btn-complete');

    // Alterna a classe 'completed' (se tiver, tira; se não tiver, coloca)
    stepCard.classList.toggle('completed');

    // Altera o texto do botão dinamicamente com base no estado do card
    if (stepCard.classList.contains('completed')) {
        button.textContent = 'Passo Concluído! ✓';
    } else {
        button.textContent = 'Marcar como Concluído';
    }
}