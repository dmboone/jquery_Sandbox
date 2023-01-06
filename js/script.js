$(function() { // must put jquery inside this line
  // jQuery goes here...

  // fade outs the red box on page load
  $(".red-box").fadeOut(2000); // value is in milliseconds
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(1000);
  $(".red-box").fadeTo(1000, 0.5);
  $(".blue-box").fadeToggle();
});