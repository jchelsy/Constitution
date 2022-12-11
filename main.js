// Sticky Navbar Function
$(document).ready(function() {
  // Window Scroll Event
  $(window).scroll(function() {
    // If the page scrolls past the Title Banner:
    if ($(window).scrollTop() > $('header').height()) {
      // Update the Nav Menu CSS to stay fixed to the top of the page
      $('nav').css({
        'position': 'sticky',
        'top': '0'
      });
    } else {  // Otherwise (page not scrolled past the Title Banner)
      // Maintain relative Nav Menu positioning, below the Banner
      $('nav').css('position', 'relative');
    }
  });
});
