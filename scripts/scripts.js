window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY === 0) {
        console.log(true);
        header.classList.remove('scrolled');
        header__logo.classList.remove('scrolled');
        header__navigation.classList.remove('scrolled');
    } else if ((scrollY !== 0) && !(header.classList.contains('scrolled'))) {
        console.log(false);
        header.classList.add('scrolled');
        header__logo.classList.add('scrolled');
        header__navigation.classList.add('scrolled');
    }
})


const header = document.querySelector('.header');
const header__logo = header.querySelector('.header__logo');
const header__navigation = header.querySelector('.header__navigation');
