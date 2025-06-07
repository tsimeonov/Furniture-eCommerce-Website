'use strict';

// ADD EVENT ON ELEMENT

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

// NAVBAR TOGGLE

const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelector('[data-nav-link]');
const navTogglers = document.querySelector('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
