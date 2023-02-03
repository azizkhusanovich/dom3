const navbar = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.navbar__burger');
const body = document.querySelector('body');
const lists = document.querySelectorAll('.navbar__list-item');
const btn = document.querySelector('.navbar__order');
const header = document.querySelector('.header');
const navbarBlock = document.querySelector('.header__nav');
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > navbarBlock.clientHeight) {
        navbarBlock.style.background = '#2c2c2c'
    } else {
        navbarBlock.style.background = 'transparent'
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
    if (navbar.classList.contains('active')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
})

lists.forEach(elem => {
    elem.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})

btn.addEventListener('click', () => {
    navbar.classList.remove('active')
})

