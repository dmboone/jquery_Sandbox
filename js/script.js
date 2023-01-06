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

  // JQUERY METHODS FOR TRAVERSAL
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)"); // all children li that are nested are highlighted
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)"); // only direct children li are highlighted
  // $("#list").parents().css("background-color", "rgba(180, 180, 30, 0.8)"); // all parents are highlighted
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)"); // can specify which parents
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)"); // just one direct parent
  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)"); // can select all siblings
  // $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)"); // can specify which siblings
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)"); // choose all header siblings
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)"); // choose previous
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)"); // choose next

  // JQUERY METHODS FOR FILTERING
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").filter(function(index){ // can filter out certain elements based on a function; automatically have access to index
  //   return index % 3 === 0;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)"); // select first li element
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)"); // select last li element
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)"); // eq allows you to select the n-th index element starting at 0
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)"); // select 2nd element from back
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)"); // everything except the first li element
  // $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)"); // only main items not sub items
  // $("li").not(function(index){
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)"); // only main items not sub items

  // MANIPULATING THE DOM I - INSERTING, REPLACING AND REMOVING ELEMENTS
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>"); // adding another child element at the end
  // $("<li>I'm gonna be the last sub-item</li>").appendTo($("ul ul:first")); // this does the same as above
  // $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>"); // adding another child element at the beginning
  // $("<li>I'm gonna be the last sub-item</li>").prependTo($("ul ul")); // this does the same as above
  // $("<h4>Destiny Boone</h4>").prependTo($("#content"));
  // $(".red-box").after("<div class='red-box'>Another Red</div>"); // adds a sibling after the selected element
  // $(".blue-box").before("<div class='blue-box'>Blue Friend</div>"); // adds a sibling before the selected element
  // $(".blue-box").before(function(){
  //   return "<div class='blue-box'>Blue 2</div>";
  // });
  // $(".red-box").before($(".blue-box")); // moves an already existing element to before the selected element
  // $("p").after($("#list")); // will clone once because there are two paragraph elements
});