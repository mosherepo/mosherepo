/**
 * AI Data Solutions - Interactive Features
 * Professional website with 20+ years of expertise
 */

// ===== Utility Functions =====
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ===== Navigation Functions =====
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.handleScroll();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveLinks();
        
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    setupMobileMenu() {
        if (!this.mobileMenuToggle || !this.navMenu) return;

        this.mobileMenuToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-wrapper')) {
                this.navMenu.classList.remove('active');
                this.mobileMenuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.mobileMenuToggle.classList.remove('active');
            });
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    setupActiveLinks() {
        const sections = document.querySelectorAll('section[id], header[id]');
        
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}

// ===== Animation on Scroll =====
class ScrollAnimations {
    constructor() {
        this.animateElements = document.querySelectorAll(
            '.service-card, .solution-card, .benefit-card, .process-step, .tech-category'
        );
        this.init();
    }

    init() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in-up');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.animateElements.forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }
}

// ===== Contact Form Handler =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!this.validateForm(data)) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show loading state
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Simulate form submission (replace with actual API call)
            await this.simulateSubmission(data);
            
            this.showMessage('Thank you! We\'ll get back to you soon.', 'success');
            this.form.reset();
        } catch (error) {
            this.showMessage('Something went wrong. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    validateForm(data) {
        return data.name && 
               data.email && 
               data.message && 
               this.validateEmail(data.email);
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    async simulateSubmission(data) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', data);
                resolve();
            }, 1500);
        });
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and show new message
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message-${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            background-color: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            animation: fadeIn 0.3s ease;
        `;

        this.form.insertBefore(messageEl, this.form.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
}

// ===== Statistics Counter Animation =====
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateStats();
                    this.hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        this.stats.forEach(stat => observer.observe(stat));
    }

    animateStats() {
        this.stats.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/[^0-9]/g, ''));
            
            const duration = 2000;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = number / steps;
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current).toString();
                if (hasPlus) displayValue += '+';
                if (hasPercent) displayValue += '%';
                
                stat.textContent = displayValue;
            }, stepTime);
        });
    }
}

// ===== Tech Tags Interaction =====
class TechTags {
    constructor() {
        this.tags = document.querySelectorAll('.tech-tag');
        this.init();
    }

    init() {
        this.tags.forEach(tag => {
            tag.addEventListener('click', () => {
                this.handleTagClick(tag);
            });
        });
    }

    handleTagClick(tag) {
        const techName = tag.textContent;
        
        // Add a visual feedback
        tag.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tag.style.transform = '';
        }, 200);

        // You can add more functionality here, like filtering content or showing details
        console.log(`Technology selected: ${techName}`);
    }
}

// ===== Service Card Interaction =====
class ServiceCards {
    constructor() {
        this.cards = document.querySelectorAll('.service-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleHover(card));
            card.addEventListener('mouseleave', () => this.handleLeave(card));
        });
    }

    handleHover(card) {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    }

    handleLeave(card) {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = '';
        }
    }
}

// ===== Lazy Loading Images =====
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
}

// ===== Performance Monitoring =====
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            this.observeLCP();
            this.observeFID();
            this.observeCLS();
        }
    }

    observeLCP() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    observeFID() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
            });
        });
        observer.observe({ entryTypes: ['first-input'] });
    }

    observeCLS() {
        let clsScore = 0;
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsScore += entry.value;
                    console.log('CLS:', clsScore);
                }
            });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
    }
}

// ===== Accessibility Enhancements =====
class AccessibilityEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupSkipLink();
        this.setupFocusVisible();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    setupSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    setupFocusVisible() {
        // Add focus-visible polyfill behavior
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('focus-visible-active');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('focus-visible-active');
        });
    }
}

// ===== Initialize All Components =====
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new Navigation();
    new ContactForm();
    new ScrollAnimations();
    new StatsCounter();
    
    // Interactive features
    new TechTags();
    new ServiceCards();
    new LazyLoader();
    
    // Performance and accessibility
    new PerformanceMonitor();
    new AccessibilityEnhancements();

    // Add smooth reveal animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// ===== Service Worker Registration (for PWA support) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// ===== Export for potential module use =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        ContactForm,
        ScrollAnimations,
        StatsCounter,
        TechTags,
        ServiceCards,
        LazyLoader,
        PerformanceMonitor,
        AccessibilityEnhancements
    };
}