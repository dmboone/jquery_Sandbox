$(function() { // must put jquery inside this line
  // jQuery goes here...

  // fade outs the red box on page load
  // $(".red-box").fadeOut(2000); // value is in milliseconds
  // $(".green-box").fadeOut(2000); // will also set display property to none
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeToggle(); // toggles between fade in or fade out

  $(".blue-box").hide(); // hides elements
  $(".blue-box").show(); // shows elements
  $(".blue-box").toggle(); // toggles between show and hide
  $(".blue-box").hide(1000); // hides over a set time
  $(".blue-box").show(2000); // shows over a set time
});