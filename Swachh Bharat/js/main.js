// main.js - Main application logic

class SwachhBharatApp {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.quickSignupForm = document.getElementById('quick-signup-form');
        this.successModal = document.getElementById('success-modal');
        this.closeModalBtn = document.getElementById('close-modal');
        this.header = document.getElementById('main-header');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupForm();
        this.setupStickyHeader();
        this.setupModal();
        this.setupSmoothScroll();
    }

    setupMobileMenu() {
        if (!this.mobileMenuBtn || !this.mobileMenu) return;

        this.mobileMenuBtn.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenuBtn.contains(e.target) && 
                !this.mobileMenu.contains(e.target)) {
                this.mobileMenu.classList.add('hidden');
            }
        });
    }

    setupForm() {
        if (!this.quickSignupForm) return;

        this.quickSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Check honeypot
            const honeypot = this.quickSignupForm.querySelector('input[name="website"]');
            if (honeypot && honeypot.value) {
                console.log('Bot detected');
                return;
            }

            // Get form data
            const formData = new FormData(this.quickSignupForm);
            const data = {
                name: formData.get('name'),
                location: formData.get('location'),
                interest: formData.get('interest')
            };

            // Validate
            if (!data.name || !data.location || !data.interest) {
                alert('Please fill in all fields');
                return;
            }

            // In production, send to backend
            console.log('Form submitted:', data);
            
            // Show success modal
            this.showSuccessModal();
            
            // Reset form
            this.quickSignupForm.reset();
        });
    }

    setupStickyHeader() {
        if (!this.header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                this.header.style.padding = '12px 0';
                this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.header.style.padding = '16px 0';
                this.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }

            lastScroll = currentScroll;
        });
    }

    setupModal() {
        if (!this.successModal || !this.closeModalBtn) return;

        this.closeModalBtn.addEventListener('click', () => {
            this.hideSuccessModal();
        });

        // Close on backdrop click
        this.successModal.addEventListener('click', (e) => {
            if (e.target === this.successModal) {
                this.hideSuccessModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.successModal.classList.contains('hidden')) {
                this.hideSuccessModal();
            }
        });
    }

    showSuccessModal() {
        if (!this.successModal) return;
        this.successModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    hideSuccessModal() {
        if (!this.successModal) return;
        this.successModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new SwachhBharatApp());
} else {
    new SwachhBharatApp();
}

export default SwachhBharatApp;
