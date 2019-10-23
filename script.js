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
  strings: ['<p>.claudio {</p> <p class="typed-indent">mindset: analytical;</p> <p class="typed-indent">traits: 50% curious, 50% inquisitive;</p> <p class="typed-indent">ability: calc( flexible + adaptable );</p> <p class="typed-indent">do-best: problem-solving;</p> <p class="typed-indent">love: learning;</p> <p class="typed-indent">project-role: team-player;</p> <p class="typed-indent">fav-food: pizza;</p> <p>}</p>'],
  typeSpeed: 65,
  showCursor: false,
  loop: true,
  loopCount: 3,
  startDelay: 1000,
  cursorChar: '|',
});
