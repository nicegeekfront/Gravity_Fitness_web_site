 function mobileNav() {
	// Mobile nav button
	const navBtnMain = document.querySelector('.header__top-nav-btn');
	const navBtnInner = document.querySelector('.mobile__nav-btn');
	const nav = document.querySelector('.mobile__nav');
	const menuIcon = document.querySelector('.nav__icon');
	const fade = document.querySelector('.mobile__nav-fade');
	const html = document.querySelector('html');

	navBtnMain.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		menuIcon.classList.toggle('nav__icon--active');
		fade.classList.toggle('mobile__nav-fade--open');
		html.classList.toggle('no--scroll');
	};
	navBtnInner.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		menuIcon.classList.toggle('nav__icon--active');
		fade.classList.toggle('mobile__nav-fade--open');
		html.classList.toggle('no--scroll');
	};

	fade.onclick = function () {
		nav.classList.toggle('mobile__nav--open');
		fade.classList.toggle('mobile__nav-fade--open');
		menuIcon.classList.toggle('nav__icon--active');
		html.classList.toggle('no--scroll');
	};
	
	const menuLinks = document.querySelectorAll('.mobile__nav-menu-link');

	menuLinks.forEach((el) => {
		el.addEventListener('click', function() {
				nav.classList.remove('mobile__nav--open');
				fade.classList.remove('mobile__nav-fade--open');
				menuIcon.classList.remove('nav__icon--active');
				html.classList.remove('no--scroll');
		})
	});
}

	

export default mobileNav;