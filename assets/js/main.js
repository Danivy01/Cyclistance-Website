(function ($) {
  "use strict";

  // Initialize the image, text, and subtitle arrays
  let designArr = [
    {
      'Feature 1': ['assets/images/Navigation.svg', 'Navigation', 'Navigate cyclist in need of help'],
      'Feature 2': ['assets/images/Request Help.svg', 'Request Help and Rescue', 'Get assistance by requesting help and rescue other cyclist in need'],
      'Feature 3': ['assets/images/Rescue Results.svg', 'Rescue Results', 'View the outcome of rescue and have a successful rescue'],
      'Feature 4': ['assets/images/Ride History.svg', 'Ride History', 'View the outcome of rescue and have a successful rescue'],
      'Feature 5': ['assets/images/Hazardous.svg', 'Hazardous Lane Markers', 'Warn other cyclists to have an advance sign on the road'],
      'Feature 6': ['assets/images/Bike Tracker.svg', 'Bike Tracker', 'Track your bike with the partnership of SinoTrack to prevent lost'],
      'Feature 7': ['assets/images/Emergency Call.svg', 'Emergency Call', 'Quickly contact emergency hotlines, family, and friends when emergency occurs'],
      'Feature 8': ['assets/images/Messaging.svg', 'Messaging', 'Connect with other cyclist'],
      'Feature 9': ['assets/images/Analytics.svg', 'Analytics', 'Track and Analyze your activity'],
      'Feature 10': ['assets/images/Traffic Lanes.svg', 'Traffic Lanes', 'Live Traffic Updates'],
    }
  ];

  // Initialize the image, text, and subtitle elements
  let changeImage = $("#changeImage");
  let changeTitle = $("#changeTitle");
  let changeSubtitle = $("#changeSubtitle");

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

    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      dots: true,
      items: 1,
      margin: 10,
    });

    // Initialize the image, text, and subtitle elements
    changeImage.attr('src', designArr[0]['Feature 1'][0]);
    changeTitle.text(designArr[0]['Feature 1'][1]);
    changeSubtitle.text(designArr[0]['Feature 1'][2]);

    // Add class to each dot
    let dot = $('.owl-dot');

    dot.each(function () {
      let index = $(this).index() + 1;
      $(this).addClass('Feature ' + index);
    });

    // Change image, title, and subtitle when dot is clicked
    dot.on('click', function () {
      let index = $(this).index() + 1;
      $(".screenshot-carousel").trigger('to.owl.carousel', [index, 1000]);

      changeImageText(index);
    });

    // Change image, title, and subtitle when carousel is changed
    function changeImageText(index) {
      changeImage.attr('src', designArr[0]['Feature ' + index][0]);
      changeTitle.text(designArr[0]['Feature ' + index][1]);
      changeSubtitle.text(designArr[0]['Feature ' + index][2]);
    }

    let activeDot = $('.owl-dot.active');
    $(".screenshot-carousel").on('changed.owl.carousel', function (event) {
      activeDot = $('.owl-dot.active');
      let index = activeDot.index() + 1;
      changeImageText(index);
    });
  });

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior.

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!validateName(firstName) || !validateName(lastName)) {
      alert("Please enter a valid first name and last name (at least 2 characters each).");
    } else if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else if (!message) {
      alert("Please enter a message.");
    } else {
      var params = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      }

      emailjs.send('service_5r4k2wr', 'template_nzol3q8', params)
        .then(function (res) {
          alert("Sent! " + res.status);
          document.getElementById("form").reset();
        });
    }
  });

  function validateName(name) {
    var namePattern = /^[A-Za-z]{2,}$/; // At least 2 alphabetical characters
    return namePattern.test(name);
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }



})(jQuery);