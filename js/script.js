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

// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeMenuBtn = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const videoSrc = btn.getAttribute('data-video');
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('demoVideo');
        video.src = videoSrc;
        modal.classList.add('active');
    });
});

const closeModal = () => {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('demoVideo');
    video.pause();
    video.currentTime = 0;
    video.src = '';
    modal.classList.remove('active');
};

document.querySelector('.close-video').addEventListener('click', closeModal);

document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
        closeModal();
    }
});
// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
// Animação de carregamento
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});
