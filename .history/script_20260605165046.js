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
document.querySelectorAll('.read-more-btn').forEach(btn=> {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('aria-controls');
        const content = document.getElementById(targetId);
        const isHidden = content.hasAttribute('hidden');

        content.toggleAttribute('hidden');
        btn.setAttribute('aria-expanded', isHidden);
        btn.textContent = isHidden? 'Read less' : 
    })
})

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
        if (!emailRegex.test(email.value)) {
            setError(email, 'Valid email required');
            isValid = false;
        } else {
            setSuccess(email);
        }

        // Service
        const service = document.getElementById('service');
        if (service.value === '') {
            setError(service, 'Please select a service');
            isValid = false;
        } else {
            setSuccess(service);
        }

        if (isValid) {
            document.getElementById('formSuccess').classList.remove('hidden');
            form.reset();
            setTimeout(() => {
                document.getElementById('formSuccess').classList.add('hidden');
            }, 4000);
        }
    });

    function setError(input,message) {
        const small = input.nextElementSibling;
        small.textContent = message;
        input.style.borderColor = '#dc2626';
    }

    function setSuccess(input) {
        const small = input.nextElementSibling;
        small.textContent = '';
        input.style.borderColor = '#16a34a';
    }
}