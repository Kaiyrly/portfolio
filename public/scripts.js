$(document).ready(function() {
    $('nav a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });

    // Responsive menu toggle
    $('.menu-toggle').on('click', function() {
        $('nav ul').slideToggle(500);
    });
    
    // Close menu when link is clicked
    $('nav ul li a').on('click', function() {
        if ($(window).width() <= 768) {
        $('nav ul').slideUp(500);
        }
    });

});

    