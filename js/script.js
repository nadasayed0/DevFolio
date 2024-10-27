// navbar background & color
document.addEventListener('DOMContentLoaded', function() {
  const navEl = document.querySelector('.navbar');
  const toggleButton = document.querySelector('.navbar-toggler');

  window.addEventListener('scroll', function() {
    if (window.scrollY >= 60) {
      navEl.classList.add('navbar-scrolled');
    } else {
      navEl.classList.remove('navbar-scrolled');
    }
  });

  toggleButton.addEventListener('click', function() {
    if (window.innerWidth < 992) { 
      navEl.classList.toggle('navbar-clicked');
    }
  });
});



//typing animation
var typed = new Typed(".auto-type", {
    strings: [" Designer", " Developer", " Freelancer", " photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

  
//carousel
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,      
    autoplaySpeed:1000,
    autoplay:true
    
});