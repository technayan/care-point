// Navbar JS
const navbar = document.getElementById('navbar');
const topNav = document.getElementById('topNav');
const navbarBrand = document.getElementById('navbarBrand');
const navbarSocial = document.getElementById('navbarSocial');
const navbarLink = document.getElementById('navbarLink');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if(scroll > 150) {
        navbar.classList.add('fixed-top');
        navbar.classList.add('py-4');
        navbar.style.boxShadow = '0 0 10px 5px rgba(0,0,0,0.1)';
        topNav.classList.add('d-none');
        navbarBrand.classList.remove('d-none');
        navbarSocial.classList.add('d-none');
        navbarLink.classList.add('ms-auto');

    } else {
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('py-4');
        navbar.style.boxShadow = 'none';
        topNav.classList.remove('d-none');
        navbarBrand.classList.add('d-none');
        navbarSocial.classList.remove('d-none');
        navbarLink.classList.remove('ms-auto');
    }
})