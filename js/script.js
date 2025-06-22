// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animação dos elementos de design
const designElements = document.querySelectorAll('.design-element');

designElements.forEach((el, index) => {
    el.addEventListener('mouseenter', () => {
        if (index === 0) {
            el.style.transform = 'rotate(10deg) scale(1.05)';
        } else if (index === 1) {
            el.style.transform = 'rotate(-10deg) scale(1.05)';
        } else {
            el.style.transform = 'scale(1.2)';
        }
    });

    el.addEventListener('mouseleave', () => {
        if (index === 0 || index === 1) {
            el.style.transform = '';
        } else {
            el.style.transform = 'translate(-50%, -50%)';
        }
    });
});

// Animação de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section, .project-card').forEach(section => {
    observer.observe(section);
});

// Atualize a navegação ativa ao rolar
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); // Chamar inicialmente

// Copiar email ao clicar
const emailElement = document.querySelector('.contact-email');
if (emailElement) {
    emailElement.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'alexandrateixeira002@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            const originalText = emailElement.textContent;
            emailElement.textContent = 'Email copiado!';
            setTimeout(() => {
                emailElement.textContent = originalText;
            }, 2000);
        });
    });
}

// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Copiar email
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const email = 'alexandrateixeira002@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="far fa-copy"></i> Copiar';
            }, 2000);
        });
    });
}
// Animação de carregamento
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
});