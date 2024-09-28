document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling.nextElementSibling;
            
            // Fecha todos os outros conteúdos
            document.querySelectorAll('.content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.classList.remove('show');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity = '0';
                }
            });

            // Alterna o estado do conteúdo atual
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                this.textContent = '+';
            } else {
                content.classList.add('show');
                content.style.maxHeight = content.scrollHeight + 'rem'; // Ajusta a altura máxima para o conteúdo visível
                content.style.opacity = '1';
            }
        });
    });
});
