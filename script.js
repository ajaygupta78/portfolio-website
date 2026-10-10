const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } 
    else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var form = document.getElementById('contactForm');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("contactForm")),
            }).then(
                response => response.json()
            ).then((html) => {
                alert('Submitted !! 😊 Thank you ' + document.getElementById('name').value)
                form.reset();
            });
        });

const darkmodebtn = document.querySelector('#darkmodebtn');
const body = document.body;

const enabledarkmode = () => {
    body.classList.add('dark-mode');
}

const disabledarkmode = () => {
    body.classList.remove('dark-mode');
}

darkmodebtn.addEventListener('change', () => {
    if(darkmodebtn.checked) {
        disabledarkmode();
    } else {
        enabledarkmode();
    }
});