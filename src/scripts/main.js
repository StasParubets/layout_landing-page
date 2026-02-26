/* eslint-env browser */
'use strict';

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    contactForm.reset();
  });
}
