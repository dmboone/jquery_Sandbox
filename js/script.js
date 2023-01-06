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

  // MOVING AND CUSTOM ANIMATIONS
  // $(".blue-box").animate({
  //   "margin-left": "+=200px", // this is a css property; will move box to the right 200 pixels
  //   "opacity": 0,
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "25px"
  // }, 
  // 1000, // this is how long the animation takes
  // "linear"); // can change this to ease in or out, etc.

  // $("p").animate({
  //   "font-size": "20px"
  //   // note you can change color with animate
  // }, 1000);

  // DELAYING AND CHAINING ANIMATIONS
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  // TIMING ANIMATIONS USING CALLBACK FUNCTIONS
  // $(".red-box").fadeTo(1000, 0, function(){
  //   alert("This is the callback: Animation finished");
  // });

  // $(".green-box").delay(3000).fadeTo(1000, 0, function(){
  //   $(".blue-box").fadeTo(1000, 0);
  // });

  // CREATING A SIGNUP LIGHTBOX
  // $(".lightbox").delay(500).fadeIn(1000);

  // ELEMENT SELECTORS

  // USING CSS SELECTORS IN JQUERY
  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)"); // select by element type
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)"); // select by class
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)"); // select by id
  // $("input[type=text]").css("background-color", "rgba(180, 180, 30, 0.8)"); select by element and type
  // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)"); // can select multiple elements types with a comma
  // $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)"); // first element of that kind
  // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)"); // last element of that kind
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)"); // even elements of that kind
  // $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)"); // odd elements of that kind
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input:password").css("background-color", "rgba(180, 180, 30, 0.8)");
});