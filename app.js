// Main application JavaScript for Makena Herbs

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Render initial products
    renderProducts();

    // Set up event listeners
    setupNavigationListeners();
    setupFilterListeners();
    setupFormListener();
    setupScrollEffects();
    setupHamburgerMenu();

    console.log('Makena Herbs app initialized successfully');
}

// Navigation listeners
function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get target section
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.replace('#', ''));

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        });
    });
}

// Filter button listeners
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter category
            const category = this.dataset.filter;

            // Filter products
            filterProducts(category);

            // Add animation to filtered products
            animateProductCards();
        });
    });
}

// Animate product cards
function animateProductCards() {
    const visibleCards = document.querySelectorAll('.product-card:not(.hidden)');

    visibleCards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s`;
        }, 10);
    });
}

// Contact form listener
function setupFormListener() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (validateForm(formData)) {
                handleFormSubmission(formData);
            }
        });
    }
}

// Validate form data
function validateForm(data) {
    if (!data.name || data.name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    if (!data.email || !isValidEmail(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!data.message || data.message.trim() === '') {
        alert('Please enter a message');
        return false;
    }

    return true;
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle form submission
function handleFormSubmission(formData) {
    console.log('Form submitted:', formData);

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message

    alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you at ${formData.email} soon.`);

    // Reset form
    document.getElementById('contactForm').reset();
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        const offset = 80; // Account for fixed header
        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Update active navigation based on scroll position
        updateActiveNavOnScroll();

        // Optional: Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Add transition to header
    header.style.transition = 'transform 0.3s ease';
}

// Update active navigation item based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Hamburger menu for mobile
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            this.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Utility function to debounce events (useful for scroll/resize)
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

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Optional: Add a simple product search function (can be connected to a search input)
function createSearchBar() {
    const productsSection = document.querySelector('.products-section .container');

    if (productsSection) {
        const searchBar = document.createElement('div');
        searchBar.className = 'search-bar';
        searchBar.innerHTML = `
            <input type="text" id="productSearch" placeholder="Search herbs..." />
        `;

        // Insert before filter controls
        const filterControls = document.querySelector('.filter-controls');
        productsSection.insertBefore(searchBar, filterControls);

        // Add search functionality
        const searchInput = document.getElementById('productSearch');
        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = this.value;
            if (searchTerm.trim() === '') {
                renderProducts();
            } else {
                searchProducts(searchTerm);
            }
        }, 300));
    }
}

// Optional: Initialize search bar (uncomment to enable)
// createSearchBar();

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        validateForm,
        isValidEmail,
        debounce
    };
}
