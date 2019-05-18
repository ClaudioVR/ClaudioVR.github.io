//Appear on scroll
  AOS.init({
    delay: 300,
    duration: 800
  });

//Materialize javascript
  document.addEventListener('DOMContentLoaded', function() {
    var parallax = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallax);

    var sidenav = document.querySelectorAll('.sidenav');
    var sidenaviInstances = M.Sidenav.init(sidenav);

    var carousel = document.querySelectorAll('.carousel');
    var carouselInstances = M.Carousel.init(carousel, {
      padding: 150
    });
  });

  //Typed.js

  var typed = new Typed('.typed-js-element', {
  strings: ['<p>.claudio {</p> <p class="typed-indent">mindset: analytical;</p> <p class="typed-indent">traits: 50% cusrious, 50% inquisitive;</p> <p class="typed-indent">ability: calc( flexible + adaptable );</p> <p class="typed-indent">do-best: problem-solving;</p> <p class="typed-indent">love: learning;</p> <p class="typed-indent">project-role: team-player;</p> <p class="typed-indent">fav-food: pizza;</p> <p>}</p>'],
  typeSpeed: 65,
  showCursor: false,
  loop: true,
  loopCount: 3,
  startDelay: 1000,
  cursorChar: '|',
});
