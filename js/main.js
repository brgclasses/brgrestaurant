/*Custom JavaScript*/
$(function(){
  // Activate wow.js
  new WOW().init();

  var $nav = $(".navbar.fixed-top");
  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    if ($(this).scrollTop() > $nav.height() + 200) {
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
      $nav.removeClass("scrolled");
    }
  });

  // Show scrolled navbar
  var $nav = $(".navbar.fixed-top");
  if (location.pathname == "/") {
    // Scroll down behavior
    $(document).scroll(function () {
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  }

  $(".navbar .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // gallery
  new SimpleLightbox('#gallery a');

  // menu
  var menuIsotope = $('.menu-container').isotope({
    itemSelector: '.menu-item',
    layoutMode: 'fitRows'
  });

  $('#menu-filters li').on('click', function () {
    $("#menu-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    menuIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
});
