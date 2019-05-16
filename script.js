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
  strings: ['<p>.claudio {</p> <p class="typed-indent">front-end: development;</p> <p class="typed-indent">web: design;</p> <p class="typed-indent">user: experience;</p> <p class="typed-indent">reusable: components;</p> <p>}</p>'],
  typeSpeed: 70,
  showCursor: false,
  loop: true,
  startDelay: 1000,
  cursorChar: '|',
});
