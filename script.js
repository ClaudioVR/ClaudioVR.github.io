
// https://mattboldt.com/typed.js/

// jQuery typed.js
$(document).ready(function () {
	var typed = new Typed('#typed', {
    strings: ['Hi, I\'m Claudio...', 'I\'m a Front-End Developer...', 'I code out of Oslo, Norway...', 'Contact me via my social media!'],

    typeSpeed: 40,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true

	});
});
