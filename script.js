document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        
        gsap.to(cursorTrail, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    });

    // Typing animation
    const texts = ['Computing Science Student', 'Web Developer', 'AI Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }

    type();

    // Scroll animations
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // Initialize skill levels
    document.querySelectorAll('.skill-item').forEach(item => {
        const level = item.dataset.level;
        item.style.setProperty('--level', `${level}%`);
    });

    // 3D card effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });

    // Parallax effect
    document.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.project-card, .skill-category');
        
        parallaxElements.forEach(element => {
            const speed = 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
