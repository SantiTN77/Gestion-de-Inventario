// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    });
});

// Testimonial Slider Animation
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');

let currentTestimonial = 0;

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonialSlider.style.transform = `translateX(-${currentTestimonial * 350}px)`; // Adjust 350px based on testimonial width
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonialSlider.style.transform = `translateX(-${currentTestimonial * 350}px)`; // Adjust 350px based on testimonial width
}

// Add event listeners for next and previous buttons (if you have them)
// ...

// Auto-play testimonial slider (optional)
setInterval(nextTestimonial, 5000); // Change interval as needed

// Fade-in Animation for Hero Section
const heroSection = document.querySelector('.hero');

heroSection.style.opacity = 0; // Initially hide the hero section

window.addEventListener('load', () => {
    heroSection.style.transition = 'opacity 1s ease-in-out'; // Add transition effect
    heroSection.style.opacity = 1; // Fade in the hero section
});

// Add more animations and interactions as needed
