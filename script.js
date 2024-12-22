document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor functionality
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Hover effects for interactive elements
    const hoverElements = document.querySelectorAll('.nav-link, .project-card, .timeline-item');

    hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // GSAP animations for sections
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero h1', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power2.out',
    });

    gsap.from('.subtitle', {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: 'power2.out',
    });

    gsap.from('.contact-info p', {
        duration: 1,
        opacity: 0,
        x: -50,
        delay: 1,
        stagger: 0.2,
        ease: 'power2.out',
    });

    // Section titles animation
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            },
            duration: 1,
            opacity: 0,
            y: -30,
            ease: 'power2.out',
        });
    });

    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
            },
            duration: 1,
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // Alternate direction
            ease: 'power2.out',
        });
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            duration: 1,
            opacity: 0,
            scale: 0.9,
            ease: 'power2.out',
        });
    });

    // Skills categories animation
    gsap.utils.toArray('.skill-category').forEach((category) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 90%',
            },
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: 'power2.out',
        });
    });
});
