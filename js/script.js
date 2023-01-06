$(function() { // must put jquery inside this line
  // jQuery goes here...

  // ANIMATIONS

  // FADE IN AND OUT
  // fade outs the red box on page load
  // $(".red-box").fadeOut(2000); // value is in milliseconds
  // $(".green-box").fadeOut(2000); // will also set display property to none
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeToggle(); // toggles between fade in or fade out

  // SHOW AND HIDE
  // $(".blue-box").hide(); // hides elements
  // $(".blue-box").show(); // shows elements
  // $(".blue-box").toggle(); // toggles between show and hide
  // $(".blue-box").hide(1000); // hides over a set time
  // $(".blue-box").show(2000); // shows over a set time

  // SLIDING
  // $(".blue-box").slideUp(2000); // will also set display property to none
  // $(".blue-box").slideDown(2000);
  // $("p").hide();
  // $("p").slideDown(1000);
  // $(".blue-box").slideToggle(2000);

  // MOVING
  $(".blue-box").animate({
    "margin-left": "+=200px", // this is a css property; will move box to the right 200 pixels
    "opacity": 0,
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  }, 
  1000, // this is how long the animation takes
  "linear"); // can change this to ease in or out, etc.

  $("p").animate({
    "font-size": "20px"
    // note you can change color with animate
  }, 1000);
});