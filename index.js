// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const mobileThemeIcon = document.getElementById('mobile-theme-icon');
const body = document.body;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        // Replace the entire SVG content for dark mode
        themeIcon.innerHTML = '<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>';

        // Do the same for mobile icon if needed
        if (mobileThemeIcon) {
            mobileThemeIcon.innerHTML = '<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>';
            mobileThemeIcon.innerText = "Light Mode";
        }

        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        // Replace the entire SVG content for light mode
        themeIcon.innerHTML = '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>';
        

        // Do the same for mobile icon if needed
        if (mobileThemeIcon) {
            mobileThemeIcon.innerHTML = '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>';
        }

        localStorage.setItem('theme', 'light');
    }
}

// Initial theme setup
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Theme toggle event listeners
themeToggle.addEventListener('click', () => {
    body.classList.contains('dark') ? setTheme('light') : setTheme('dark');
});

mobileThemeToggle.addEventListener('click', () => {
    body.classList.contains('dark') ? setTheme('light') : setTheme('dark');
});

// Handle system theme change
prefersDarkScheme.addListener((e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Scroll to Top Button Logic
window.addEventListener('scroll', function () {
    const scrollToTop = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});


(function () {
    emailjs.init({
        publicKey: "I6vgG0qUG5p9YBL-5",
    });
})();

// form control javascript
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("I6vgG0qUG5p9YBL-5"); // Replace with your actual User ID

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset previous status
        formStatus.textContent = '';
        formStatus.classList.add('hidden');

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            showStatus('Please fill out all fields.', 'text-red-600');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Please enter a valid email address.', 'text-red-600');
            return;
        }

        // Simulating form submission (replace with actual backend service)
        showStatus('Sending message...', 'text-blue-600');

        // Simulate async operation
        setTimeout(() => {
            // In a real-world scenario, you would send this to a backend service
            showStatus('Message sent successfully! I will get back to you soon.', 'text-green-600');

            // Optional: Reset form
            contactForm.reset();
        }, 1500);

        function showStatus(message, className) {
            formStatus.textContent = message;
            formStatus.className = `${className} block`;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("service_wxeoc0f", "template_9hkrhxn", templateParams)

    });
});