document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Hover effect for nav links and feature cards
    const hoverElements = document.querySelectorAll('.nav-link, .feature-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const animateCards = () => {
        featureCards.forEach((card, index) => {
            gsap.from(card, {
                duration: 1,
                opacity: 0,
                y: 50,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    };

    animateCards();

    // Glitch effect for header
    const glitchText = document.querySelector('.glitch');
    
    const glitch = () => {
        const glitchEffect = gsap.timeline();
        
        glitchEffect.to(glitchText, {
            duration: 0.1,
            skewX: 70,
            ease: 'power4.inOut'
        })
        .to(glitchText, {
            duration: 0.04,
            skewX: 0,
            ease: 'power4.inOut'
        })
        .to(glitchText, {
            duration: 0.04,
            opacity: 0
        })
        .to(glitchText, {
            duration: 0.04,
            opacity: 1
        })
        .to(glitchText, {
            duration: 0.04,
            x: -20
        })
        .to(glitchText, {
            duration: 0.04,
            x: 0
        });

        glitchEffect.play();
    };

    setInterval(glitch, 5000);

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
