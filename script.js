//Appear on scroll
  AOS.init({
    delay: 300,
    duration: 800
  });

//Materialize javascript
  document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelectorAll('.parallax');
    const parallaxInstances = M.Parallax.init(parallax);

    const sidenav = document.querySelectorAll('.sidenav');
    const sidenaviInstances = M.Sidenav.init(sidenav);

    const carousel = document.querySelectorAll('.carousel');
    const carouselInstances = M.Carousel.init(carousel, {
      padding: 150,
      numVisible: 7
    });
  });

  //Typed.js

  var typed = new Typed('.typed-js-element', {
  strings: ['<p>.claudio {</p> <p class="typed-indent">front-end-developer;</p> <p class="typed-indent">oslo, norway;</p> <p class="typed-indent">agile, team-player, problem solver;</p> <p class="typed-indent">fav food: pizza;</p> <p>}</p>'],
  typeSpeed: 35,
  showCursor: false,
  loop: false,
  loopCount: 1,
  startDelay: 1500,
  cursorChar: '|',
});
