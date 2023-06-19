// Resizable header
//

const header = document.querySelector('.header');
const header__logo = header.querySelector('.header__logo');
const header__navigation = header.querySelector('.header__navigation');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY === 0) {
        header.classList.remove('scrolled');
        header__logo.classList.remove('scrolled');
        header__navigation.classList.remove('scrolled');
    } else if ((scrollY !== 0) && !(header.classList.contains('scrolled'))) {
        header.classList.add('scrolled');
        header__logo.classList.add('scrolled');
        header__navigation.classList.add('scrolled');
    }
})

//
// Header / menu burger
//

const burger__button = document.querySelector('.header__burger-button')
const burger = document.querySelector('.burger')
burger__button.addEventListener('click', () => {
    // burger__button.classList.toggle('burger_active')
    // burger.classList.toggle('burger_active')
    if (burger__button.classList.contains('burger_active')) {
        burger__button.classList.remove('burger_active')
        burger.classList.remove('burger_active')
    } else {
        burger__button.classList.add('burger_active')
        burger.classList.add('burger_active')
    }
})

console.log(window.location)