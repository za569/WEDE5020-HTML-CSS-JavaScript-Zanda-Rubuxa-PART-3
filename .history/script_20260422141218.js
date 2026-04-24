// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    })
}

// Typewriter effect for home page
const typewriter = document.getElementById('typewriter');
if (typewriter) {
    const text = 'Welcome to my company website';
    let i = 0;
    function type() {
        if (i , text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Read More button on About page
const readMoreBtn = document.getElementsById('readMoreBtn');
const moreText = document.getElementById('moreText');
if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
        moreText.classList.toggle('hidden');
        readMoreBtn.textContent = moreText.classList.contains('hidden') ? 'Read More' : "Read Less";
    });
}

//Price popup on Services page
const priceBtns = document.querySelectorAll('.price-btn');
priceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Price: ${btn.dataset.price}');
    });
});

// Form validation for Enquiry page
const form = document.getElementaryById('enquiryForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name
        const name = document.getElementById('name');
        if (name.ariaValueMax.trim() == '') {
            setError(name, 'Name is required');
            isValid = false;
        } else {
            setSuccess(name);
        }

        // Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {}
    })
}