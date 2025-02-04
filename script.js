// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic Active Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section'); // Get all sections
    const navLinks = document.querySelectorAll('nav ul li a'); // Get all navigation links

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Get the top position of the section
        const sectionHeight = section.clientHeight; // Get the height of the section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Set the current section ID
        }
    });

    // Add 'active' class to the current navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Scroll Animations (Fade-in Effect)
const fadeInSections = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when section is in view
            observer.unobserve(entry.target); // Stop observing once the section is visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

fadeInSections.forEach(section => {
    fadeInObserver.observe(section); // Observe each section
});

// Form Validation (Example for Future Use)
const contactForm = document.getElementById('contact-form'); // Add an ID to your form in HTML
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        const email = document.getElementById('email').value; // Get email input value
        const message = document.getElementById('message').value; // Get message input value

        if (!email || !message) {
            alert('Please fill out all fields.'); // Show error if fields are empty
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.'); // Validate email format
        } else {
            alert('Form submitted successfully!'); // Simulate successful submission
            contactForm.reset(); // Reset the form
        }
    });
}

// Helper Function to Validate Email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}