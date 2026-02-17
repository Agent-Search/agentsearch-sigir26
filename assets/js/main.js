/**
 * AgentSearch Workshop - Main JavaScript
 * Handles navigation, scrollspy, mobile menu, and back-to-top functionality
 */

(function() {
    'use strict';

    // ==========================================
    // Constants & Configuration
    // ==========================================
    const NAV_HEIGHT = 70; // Must match CSS variable --nav-height
    const SCROLL_OFFSET = NAV_HEIGHT + 20;
    const SCROLL_THRESHOLD = 300; // Show back-to-top button after scrolling this many pixels
    const SCROLLSPY_THROTTLE = 100; // Throttle scrollspy checks (ms)

    // ==========================================
    // DOM Elements
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('backToTop');
    const sections = document.querySelectorAll('.section[id]');

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ==========================================
    // Smooth Scrolling with Offset
    // ==========================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only handle anchor links (starting with #)
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    
                    const targetPosition = targetSection.offsetTop - NAV_HEIGHT;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // Scrollspy - Highlight Active Section
    // ==========================================
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + SCROLL_OFFSET;
        
        let currentSection = '';
        
        // Find which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        ticking = false;
    }

    function onScroll() {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveNavLink();
                updateBackToTopButton();
            });
            ticking = true;
        }
    }

    // Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(onScroll, SCROLLSPY_THROTTLE);
    });

    // Initial check
    updateActiveNavLink();

    // ==========================================
    // Back to Top Button
    // ==========================================
    function updateBackToTopButton() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initial check
        updateBackToTopButton();
    }

    // ==========================================
    // Intersection Observer for Section Visibility
    // (Alternative/Enhanced Scrollspy Implementation)
    // ==========================================
    // This provides more accurate detection of which section is in view
    // Uses modern Intersection Observer API for better performance
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: `-${NAV_HEIGHT}px 0px -60% 0px`,
            threshold: 0
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    
                    // Update active nav link
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href');
                        
                        if (href === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ==========================================
    // Handle Browser Back/Forward Navigation
    // ==========================================
    window.addEventListener('hashchange', function() {
        const targetId = window.location.hash;
        if (targetId) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - NAV_HEIGHT;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });

    // ==========================================
    // Load Hash on Page Load
    // ==========================================
    window.addEventListener('load', function() {
        if (window.location.hash) {
            const targetId = window.location.hash;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Small delay to ensure layout is complete
                setTimeout(function() {
                    const targetPosition = targetSection.offsetTop - NAV_HEIGHT;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    });

    // ==========================================
    // Utility: Debounce Function
    // ==========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==========================================
    // Handle Window Resize
    // ==========================================
    const handleResize = debounce(function() {
        // Close mobile menu if window is resized to desktop size
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }, 250);

    window.addEventListener('resize', handleResize);

    // ==========================================
    // Accessibility: Trap Focus in Mobile Menu
    // ==========================================
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input, select, details, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            const isTabPressed = e.key === 'Tab';

            if (!isTabPressed) return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        });
    }

    if (navMenu) {
        trapFocus(navMenu);
    }

    // ==========================================
    // Log initialization (for debugging)
    // ==========================================
    console.log('AgentSearch Workshop - JavaScript Initialized');
    console.log(`Found ${sections.length} sections and ${navLinks.length} nav links`);

})();
