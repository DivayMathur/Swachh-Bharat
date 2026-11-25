// split-hero.js - Parallax and animation for hero section

class SplitHero {
    constructor() {
        this.heroVisual = document.getElementById('hero-visual');
        this.heroIcons = document.querySelectorAll('.hero-icon');
        this.init();
    }

    init() {
        if (!this.heroVisual) return;

        // Parallax on scroll
        window.addEventListener('scroll', () => this.handleParallax());
        
        // Initial animation
        this.animateIcons();
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (this.heroVisual) {
            this.heroVisual.style.transform = `translateY(${rate}px)`;
        }

        // Rotate icons slightly on scroll
        this.heroIcons.forEach((icon, index) => {
            const rotation = scrolled * (0.05 * (index + 1));
            icon.style.transform = `rotate(${rotation}deg)`;
        });
    }

    animateIcons() {
        this.heroIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SplitHero());
} else {
    new SplitHero();
}

export default SplitHero;
