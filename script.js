
// https://mattboldt.com/typed.js/

// jQuery typed.js
$(document).ready(function () {
	var typed = new Typed('#typed-1', {
    strings: ['I\'m a Front-End Developer...', 'and I code out of Oslo, Norway...','I enjoy coding with: HTML...', 'I enjoy coding with: CSS...', 'I enjoy coding with: and JavaScript...', 'I also like using framerworks...', 'I also like using and libraries...', 'like jQuery...', 'like and Bootsrap...'],
		startDelay: 1000,
    typeSpeed: 50,
    backSpeed: 40,
    smartBackspace: true, // this is a default
    loop: true
	});
	var typed2 = new Typed('#typed-intro', {
    strings: ['I am a self-taught Front-End Developer and life-long learner with a passion for web-design and user interfaces...'],
		startDelay: 1500,
    typeSpeed: 20,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false,
		showCursor: false
	});
	var typed2 = new Typed('#typed-introB', {
    strings: ['I am currently looking to join a creative web team as a junior front-end developer. I look forward to challenging myself and learning loads more about the constantly changing world of front-end.'],
		startDelay: 4000,
    typeSpeed: 25,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false,
		showCursor: false
	});
});
