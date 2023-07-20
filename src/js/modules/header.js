const header = document.querySelector('.header__top');

window.onscroll = function showHeader() {
    if(window.scrollY > 200) {
        header.classList.add('header__active');
    } else {
        header.classList.remove('header__active');
    }
};

export default header;