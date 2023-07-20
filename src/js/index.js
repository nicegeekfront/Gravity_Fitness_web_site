import mobileNav from './modules/mobile-nav.js';
mobileNav();
import swiper from './modules/swiper.js';
import showHeader from './modules/header.js';
import modal from './modules/modal.js';
import videotube from './modules/videotube.min.js';
import calculateBMI from './modules/calculator.js';
import form from './modules/form.js';
//Shedule

const monday = document.querySelector('#monday');
const tuesday = document.querySelector('#tuesday');
const wednesday = document.querySelector('#wednesday');
const thursday = document.querySelector('#thursday');
const friday = document.querySelector('#friday');
const saturday = document.querySelector('#saturday');
const sunday = document.querySelector('#sunday');

const mondayclasses = document.querySelector('#mondayclasses');
const tuesdayclasses = document.querySelector('#tuesdayclasses');
const wednesdayclasses = document.querySelector('#wednesdayclasses');
const thursdayclasses = document.querySelector('#thursdayclasses');
const fridayclasses = document.querySelector('#fridayclasses');
const saturdayclasses = document.querySelector('#saturdayclasses');
const sundayclasses = document.querySelector('#sundayclasses');


monday.onclick = function() {
    mondayclasses.classList.add('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.remove('show');
};
tuesday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.add('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.remove('show');
};
wednesday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.add('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.remove('show');
};
thursday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.add('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.remove('show');
};
friday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.add('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.remove('show');
};
saturday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.add('show');
    sundayclasses.classList.remove('show');
};
sunday.onclick = function() {
    mondayclasses.classList.remove('show');
    tuesdayclasses.classList.remove('show');
    wednesdayclasses.classList.remove('show');
    thursdayclasses.classList.remove('show');
    fridayclasses.classList.remove('show');
    saturdayclasses.classList.remove('show');
    sundayclasses.classList.add('show');
};

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }