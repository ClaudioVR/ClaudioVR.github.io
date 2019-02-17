
// https://mattboldt.com/typed.js/

// jQuery typed.js
$(document).ready(function () {
	var typed = new Typed('#typed', {
		// strings: ["HTML5...", "CSS3...", "JavaScript...", "jQuery...", "Bootstrap...", "Vue.js...", "and learning..."],
		// typeSpeed: 80,
    // backspeed: 0,
		// fadeOut: true,
		// fadeOutClass: 'typed-fade-out',
		// fadeOutDelay: 500,
		// loop: true,
		// loopCount: Infinity,

    strings: ['I work with HTML...', 'CSS... ', 'JavaScript... ', 'Vue.js... ', 'Bootstrap... ', 'and jQuery... '],
    typeSpeed: 40,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true

	});
});
