// Variables declaration
const navbar = document.getElementById('navbar');
const topNav = document.getElementById('topNav');
const navbarBrand = document.getElementById('navbarBrand');
const navbarSocial = document.getElementById('navbarSocial');
const navbarNav = document.getElementById('navbarNav');
const navbarLink = document.getElementById('navbarLink');
const navbarToggler = document.getElementById('navbarToggler');
const navLinks = document.querySelectorAll('.nav-link');
const toTop = document.getElementById('toTop');

// Scroll Event
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    // Navbar
    if (window.innerWidth > 1018) {
        if(scroll > 150) {
            navbar.classList.add('fixed-top');
            navbar.classList.add('py-4');
            topNav.classList.add('d-lg-none');
            navbarBrand.classList.remove('d-lg-none');
            navbarSocial.classList.add('d-lg-none');
            navbarLink.classList.add('ms-auto');
    
        } else {
            navbar.classList.remove('fixed-top');
            navbar.classList.remove('py-4');
            topNav.classList.remove('d-lg-none');
            navbarBrand.classList.add('d-lg-none');
            navbarSocial.classList.remove('d-lg-none');
            navbarLink.classList.remove('ms-auto');
        }
    }

    // To Top Button
    if (scroll > 500) {
        toTop.style.bottom = '2rem';
    } else {
        toTop.style.bottom = '-10rem';
    }
});

// Nav Link Click Event
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navbarToggler.classList.add('collapsed');
        navbarNav.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
    })
})

// To Top Button Click Event
toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})