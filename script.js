document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const nav = document.querySelector('nav');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });

    // Typing effect for the main title
    const titleElement = document.querySelector('#home h1');
    const titleText = titleElement.textContent;
    titleElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < titleText.length) {
            titleElement.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Add hover effect to navigation items
    const navItems = nav.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Add a scroll-triggered animation to skills
    const skills = document.querySelectorAll('#skills li');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateX(-20px)';
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skill.style.transitionDelay = `${index * 0.1}s`;
    });

    function checkSkills() {
        const triggerBottom = window.innerHeight / 5 * 4;
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < triggerBottom) {
                skill.style.opacity = '1';
                skill.style.transform = 'translateX(0)';
            }
        });
    }

    window.addEventListener('scroll', checkSkills);
});
