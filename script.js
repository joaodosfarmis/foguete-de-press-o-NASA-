function toggleComplete(stepId) {
    const stepCard = document.getElementById(stepId);
    const button = stepCard.querySelector('.btn-complete');

    stepCard.classList.toggle('completed');

    if (stepCard.classList.contains('completed')) {
        button.textContent = 'Passo Concluído! ✓';
    } else {
        button.textContent = 'Marcar como Concluído';
    }
}
