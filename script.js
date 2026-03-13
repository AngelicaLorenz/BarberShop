window.onload = function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navUl = document.querySelector('.nav ul');

    
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Fechar ao clicar nos links
        const links = document.querySelectorAll('.nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    } else {
        console.error("Erro: Elementos não encontrados. Verifique os IDs no HTML.");
    }
};