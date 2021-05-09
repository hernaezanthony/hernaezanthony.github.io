/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio1').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-quickreach',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/steer/1.jpg"
      },
      {
        src: "assets/img/portfolio/steer/2.jpg"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


  $('#portfolio2').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-reviewii',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/reviewii/1.png"
      },
      {
        src: "assets/img/portfolio/reviewii/2.png"
      },
      {
        src: "assets/img/portfolio/reviewii/3.png"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  
  $('#portfolio3').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-feliz',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/feliz/1.png"
      },
      {
        src: "assets/img/portfolio/feliz/2.png"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#portfolio4').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-jobpair',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/jobpair/1.png"
      },
      {
        src: "assets/img/portfolio/jobpair/2.png"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#portfolio5').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-instructo',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/instructo/1.JPG"
      },
      {
        src: "assets/img/portfolio/instructo/2.JPG"
      },
      {
        src: "assets/img/portfolio/instructo/3.jpg"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#portfolio6').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-agap',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/agap/1.JPG"
      },
      {
        src: "assets/img/portfolio/agap/2.JPG"
      },
      {
        src: "assets/img/portfolio/agap/3.JPG"
      },
      {
        src: "assets/img/portfolio/agap/4.jpg"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#portfolio7').magnificPopup({
    // delegate: 'a',
    items: [
      {
        src: '#popup-fuente',
        type: 'inline'
      },
      {
        src: "assets/img/portfolio/fuente/1.JPG"
      },
      {
        src: "assets/img/portfolio/fuente/2.JPG"
      },
      {
        src: "assets/img/portfolio/fuente/3.jpg"
      },
      {
        src: "assets/img/portfolio/fuente/4.jpg"
      }
    ],
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


})(jQuery); // End of use strict
