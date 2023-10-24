(function ($) {
  "use strict";

  new WOW().init();
    
    // Sticky Navbar
    $(function () {
        var navbar = $('.navbar');
        $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
  });

    $(document).ready(function () {
        // Select the navbar element
        const navbar = $('.navbar');
      
        // Function to toggle the 'navbar-scroll' class based on scroll position
        function toggleNavbarBackground() {
          if ($(window).scrollTop() > 0) {
            navbar.addClass('navbar-scroll');
          } else {
            navbar.removeClass('navbar-scroll');
          }
        }
      
        // Initial check when the page loads
        toggleNavbarBackground();
      
        // Check for scroll events
        $(window).scroll(toggleNavbarBackground);
      });
      

    // Smooth scrolling on the navbar links
    $(document).ready(function () {
        $('a.nav-link').on('click', function (event) {
          if (this.hash !== '') {
            event.preventDefault();
      
            const hash = this.hash;
            const offset = 70; // Adjust this value if needed
      
            $('html, body').animate({
              scrollTop: $(hash).offset().top - offset
            }, 800); // Adjust the animation duration as needed
          }
        });
      });
})(jQuery);