// JavaScript for Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href').replace('.html', '');
            const targetElement = document.querySelector(targetId === 'index' ? 'header' : targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animations to sections on scroll
    const sections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Highlight active navigation link
    const highlightNav = () => {
        let scrollPos = window.scrollY + 100;
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').replace('.html', '');
            const section = document.querySelector(sectionId === 'index' ? 'header' : sectionId);
            if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    // Form validation and success message
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const comment = document.getElementById('comment').value.trim();

            if (!name || !email || !comment) {
                alert('Please fill out all fields before submitting.');
                return;
            }

            alert('Thank you for your feedback!');
            form.reset();
        });
    }
});
