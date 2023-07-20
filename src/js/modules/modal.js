const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper-btn');
const modalFade = document.querySelector('.modal__fade');
const modalBtn = document.querySelector('.modal__btn');
const linkHeader = document.querySelector('.header__top-join-link');
const linkAbout = document.querySelector('.about__btn');
const headerTop = document.querySelector('.header__top');
const html2 = document.querySelector('html');
const programsBtn = document.querySelectorAll('.programs__item-btn');

linkHeader.onclick = function () {
    headerTop.classList.add('header--top');
    modal.classList.add('modal--open');
    html2.classList.add('no--scroll');
};

linkAbout.onclick = function () {
    modal.classList.add('modal--open');
    headerTop.classList.add('header--top');
    html2.classList.add('no--scroll');
};

programsBtn.forEach((el) => {
    el.onclick = function() {
        modal.classList.add('modal--open');
        headerTop.classList.add('header--top');
        html2.classList.add('no--scroll');
    }
})

modalBtn.onclick = function() {
    headerTop.classList.remove('header--top');
    modal.classList.remove('modal--open');
    html2.classList.remove('no--scroll');
}

modalClose.onclick = function () {
    headerTop.classList.remove('header--top');
    modal.classList.remove('modal--open');
    html2.classList.remove('no--scroll');
};

modalFade.onclick = function () {
    headerTop.classList.remove('header--top');
    modal.classList.remove('modal--open');
    html2.classList.remove('no--scroll');
};
