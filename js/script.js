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

  // ADDING NEW ELEMENTS TO THE DOM
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

  // REPLACING ELEMENTS AND CONTENT
  // $("li").replaceWith("<li>Replaced.</li>"); // replaces all parent li elements
  // $("li").replaceWith(function(){ // does the same but with a function
  //   return "<li>Replaced with function.</li>"
  // });
  // let firstListItem = $("li:first");
  // $("p").replaceWith(firstListItem);
  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>"); // replacing red and blue boxes with a green box
  // $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box"); // does the same as above

  // REMOVING ELEMENTS AND CONTENT
  // $("li").remove();
  // $("form").children().not("textarea, input:text, br").remove();

  // let detachedListItem = $("li").detach(); // can remove elements and store them in variable using detach
  // $("#content").append(detachedListItem);

  // $("p:first").empty(); // removes the text and any other elements inside of a selected element, but the tag remains
  // $(".red-box, .green-box, .blue-box").empty();

  // MANIPULATING ATTRIBUTES AND PROPERTIES
  // attr(), prop(), val()
  // note that these will always work with the first element of that type that is found
  // let specialLink = $("#special-link");
  // console.log(specialLink.attr("href")); // access the value of the href attribute
  // console.log(specialLink.attr("title")); // no title attribute so this would print undefined

  // specialLink.attr("href", "http://destinyboone.com"); // can also change attribute value

  // let checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked")); // use prop for current boolean property value

  // let textInput = $("input:text");
  // textInput.val("Destiny Boone")
  // console.log(textInput.val()); // use val to access the values of input elements

  // let rangeInput = $("input[type='range']");
  // console.log(rangeInput.val());

  // CREATING AN IMAGE SLIDESHOW
  // let galleryImage = $(".gallery").find("img").first(); // grabs the img element in the gallery
  // let images = [ // stores our image names
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];

  // let i = 0;

  // setInterval(function(){
  //   i = (i + 1) % images.length; // creates a sequence of 0, 1, 2, 0, 1, 2 ...
  //   galleryImage.fadeOut(function(){ // once the gallery image completes fadeOut, perform this callback function
  //     // $(this) refers to galleryImage; we are operating on "this" element
  //     $(this).attr("src", images[i]); // changes the src attribute to equal the next image in our sequence
  //     $(this).fadeIn(); // fades in the new image
  //   });
  //   console.log(galleryImage.attr("src"));
  // }, 2000); // runs this slideshow function every 2 seconds

  // MANIPULATING THE DOM II - CHANGING ELEMENT DATA AND CSS

  // CHANGING THE CSS PROPERTIES OF ELEMENTS
  // note that jquery will ignore !important
  // $(".gallery").css("display", "none"); // does the same as just calling .hide()

  // let redBox = $(".red-box");
  // console.log(redBox.css("width"));
  // console.log(redBox.width()); // returns numerical version that can be used in calculation

  // redBox.css("background-color", "#AA7700");
  // $("p").css("font-size", "18px");
  // redBox.css("width", "+=20px");

  // let properties = $("p").css(["font-size", "line-height", "color"]);
  // console.log(properties);
  // console.log(properties["font-size"]);

  // redBox.css("user-select", "none");
  // redBox.css("user-select", function(){
  //   return "none";
  // });

  // ADDING OR REMOVING CSS CLASSES
  // $("a").addClass("fancy-link"); // class="..."
  // $("p:first").addClass("large emphasize"); // adding multiple classes
  // $("li li").addClass(function(index){
  //   $(this).addClass("item-" + index);
  // });

  // $("div").addClass(function(index, currentClass){
  //   if(currentClass === "dummy"){
  //     return "red-box";
  //   }
  // });

  // $(".red-box").removeClass("red-box").addClass("blue-box");

  // CHANGING THE DATA OF AN ELEMENT
  // let gallery = $(".gallery");
  // let images = [ // stores our image names
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // gallery.data("name", "The Awesome Gallery");
  // console.log(gallery.data("availableImages"));
  // console.log(gallery.data());

  // let firstPar = $("p:first");
  // console.log(firstPar.data("mydata"));

  // RETRIEVING AND CHANGING THE CONTENT OF AN ELEMENT
  // text(), html()
  // let firstPar = $("p:first");
  // console.log(firstPar.text());
  // console.log(firstPar.html());

  // firstPar.text("<strong>Hello</strong> World!"); // will include all html content
  // firstPar.html("<strong>Hello</strong> World!"); // will parse and interpret the html

  // firstPar.html(firstPar.html() + " This was just appended.");

  // EVENTS I - HANDLING MOUSE EVENTS & KEYBOARD EVENTS
  
  // ADDING CLICK HANDLERS
  // $("#btn-click").click(function(event){
  //   console.log(event);
  //   alert("Button was clicked.");
  // });

  // $(".red-box").click(function(){
  //   $(this).fadeTo(500, 0.5);
  // });

  // $(".red-box").click(); // can also trigger your own events
  
  // ADDING HOVER HANDLERS
  // :hover
  // $("#btn-hover").hover(function(){
  //   alert("button was hovered."); // alerts for both when you enter and leave element
  // });

  // $(".green-box").hover(function(){
  //   $(this).text("I was hovered");
  // });

  // ADDING MOUSEENTER AND MOUSELEAVE HANDLERS
  // let blueBox = $(".blue-box");
  // blueBox.mouseenter(function(){
  //   $(this).stop().fadeTo(500, 0.7); // the stop hides whatever animation may currently be running
  // });

  // blueBox.mouseleave(function(){
  //   $(this).stop().fadeTo(500, 1);
  // });

  // hover(handlerIn, handlerOut)
  // blueBox.hover(
  //   function(){
  //     $(this).stop().fadeTo(500, 0.7);
  //   }, 
  //   function(){
  //     $(this).stop().fadeTo(500, 1);
  //   }
  // );

  // ADDING THE SAME HANDLER FOR MULTIPLE EVENTS
  // .on("click", function(){ ... })
  // $("html").on("click keydown", function(){
  //   console.log("Mouse was clicked or key was pressed.");
  // });

  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];

  // let i = 0;

  // $(".gallery").find("img").on("click", function(){
  //   i = (i + 1) % images.length;
  //   $(this).fadeOut(function(){
  //     $(this).attr("src", images[i]).fadeIn();
  //   });
  // });

  // MODULARIZING EVENT HANDLERS (NO MORE INLINE FUNCTIONS)
  // function logEvent(){
  //   console.log("Mouse was clicked or key was pressed.");
  // }

  // $("html").on("click keydown", logEvent);

  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];

  // let i = 0;

  // let galleryImage = $(".gallery").find("img");

  // galleryImage.on("click", switchImage);

  // function switchImage(){
  //   i = (i + 1) % images.length;

  //   galleryImage.fadeOut(function(){
  //     galleryImage.attr("src", images[i]).fadeIn();
  //   });
  // }

  // DELEGATED EVENTS
  // $("p").click(function(){
  //   $(this).slideUp();
  // });

  // This dynamically added element will not be affected by the event handler
  // $("#content").append("<p>This is a dynamically added paragraph.</p>");

  // Delegated Events - allows us to use parent element to delegate click event to children, including dynamically added elements
  // $("#content").on("click", "p", function(){
  //   $(this).slideUp();
  // });
  
  // $("#content").append("<p>This is a dynamically added paragraph.</p>");

  // $("body").on("mouseenter", "li", function(){
  //   $(this).css("color", "#666");
  // });

  // PASSING ADDITIONAL DATA TO EVENTS
  // $("#btn-click").click(
  // {
  //   user: "Destiny",
  //   domain: "destinyboone.com"
  // }, function(event){
  //   greetUser(event.data);
  // });

  // function greetUser(userdata){
  //   username = userdata.user || "Anonymous"; // anon is the default value if no data
  //   domain = userdata.domain || "example.com";

  //   alert("Welcome back " + username + " from " + domain + "!");
  // }

  // CODING ACTIVITY: CREATING AN IMAGE GALLERY WITH LIGHTBOX PREVIEW
  // let galleryItems = $(".gallery").find("img");
  // galleryItems.css("width", "33%").css("opacity", "0.7");

  // galleryItems.mouseenter(function(){
  //   $(this).stop().fadeTo(500, 1);
  // });

  // galleryItems.mouseleave(function(){
  //   $(this).stop().fadeTo(500, 0.7);
  // });

  // galleryItems.click(function(){
  //   let source = $(this).attr("src");
  //   let image = $("<img>").attr("src", source).css("width", "100%");
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // });

  // $(".lightbox").click(function(){
  //   $(this).stop().fadeOut();
  // });

  // HANDLING KEYDOWN AND KEYUP EVENTS
  // $("html").keydown(function(event){
  //   console.log(event.which); // tells you which key was pressed
  // });

  // let ARROW_RIGHT = 39;
  // $("html").keydown(function(event){
  //   if(event.which == ARROW_RIGHT){
  //     $(".blue-box").stop().animate({
  //       marginLeft: "+=10px"
  //     }, 50)
  //   }
  // });

  // EVENTS II - FORMS

  // THE FOCUS AND BLUR EVENTS
  // let inputFields = $("input:text, input:password, textarea");
  // inputFields.focus(function(){
  //   $(this).css("box-shadow", "0 0 4px #666");
  // });

  // inputFields.blur(function(){
  //   $(this).css("box-shadow", "none");
  // });

  // $("#name").blur(function(){
  //   let text = $(this).val();
  //   if(text.length < 3){
  //     $(this).css("box-shadow", "0 0 4px #811");
  //   }
  //   else{
  //     $(this).css("box-shadow", "0 0 4px #181");
  //   }
  // });

  // USING THE CHANGE EVENT
  // $("#checkbox").change(function(){
  //   let isChecked = $(this).is(":checked"); // .prop("checked")
  //   if(isChecked){
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
  //   }
  //   else{
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
  //   }
  // });

  // $("#selection").change(function(){
  //   let selectedOption = $(this).find(":selected").text();
  //   alert(selectedOption);
  // });

  // HANDLING THE SUBMIT EVENT
  // $("#form").submit(function(event){
  //   let textarea = $("#message");
  //   if(textarea.val().trim() == ""){
  //     textarea.css("box-shadow", "0 0 4px #811");
  //     event.preventDefault(); // prevents submission
  //   }
  //   else{
  //     // form will submit
  //   }
  // });

  // CODING ACTIVITY: COMPLETE FORM VALIDATION ON SUBMIT
  // $("#form").submit(function(event){
  //   let name = $("#name").val();
  //   let password = $("#password").val();
  //   let message = $("#message").val();
  //   let checked = $("#checkbox").is(":checked");

  //   validateNameField(name, event);
  //   validatePasswordField(password, event);
  //   validateMessageField(message, event);
  //   validateCheckboxField(checked, event);
  // });

  // CODING ACTIVITY: FAST FEEBACK FORM
  // let form = $("#form");
  // enableFastFeedback(form);

  // AJAX WITH JQUERY
  // $.get(), $.post(), $.ajax(), $.getJSON()

  // FETCHING A SERVER FILE WITH JQUERY
  // $.load()
  // $("#code").load("js/script.js");
  // $("#code").load("js/script.js", function(response, status){
  //   if(status == "error"){
  //     alert("Could not find file");
  //   }
  //   console.log(response);
  // });

  // RETRIEVING FLICKR IMAGES THROUGH THE FLICKR API(+UNDERSTANDING JSON)
  // $.getJSON()
  let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickrApiUrl, { // asynchronous call
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data){ // event handler for completed request and successful
    console.log(data);
    $.each(data.items, function(index, value){
      console.log(value);
      $("<img>").attr("src", value.media.m).appendTo("#flickr");

      if(index == 4){ // limits to 5 images
        return false; // ends the each call early
      }
    });
  }).fail(function(){ // event handler for completed request but failed
    alert("Ajax call failed.")
  });
});

// function enableFastFeedback(formElement){
//   let nameInput = formElement.find("#name");
//   let passwordInput = formElement.find("#password");
//   let messageInput = formElement.find("#message");
//   let checkboxInput = formElement.find("#checkbox");

//   nameInput.blur(function(event){
//     let name = $(this).val();
//     validateNameField(name, event);

//     if(!isValidName(name)){
//       $(this).css({
//         "box-shadow": "0 0 4px #811", 
//         "border": "1px solid #600"
//       });
//     }
//     else{
//       $(this).css({
//         "box-shadow": "0 0 4px #181", 
//         "border": "1px solid #060"
//       });
//     }
//   });

//   passwordInput.blur(function(event){
//     let password = $(this).val();
//     validatePasswordField(password, event);

//     if(!isValidPassword(password)){
//       $(this).css({
//         "box-shadow": "0 0 4px #811", 
//         "border": "1px solid #600"
//       });
//     }
//     else{
//       $(this).css({
//         "box-shadow": "0 0 4px #181", 
//         "border": "1px solid #060"
//       });
//     }
//   });

//   messageInput.blur(function(event){
//     let message = $(this).val();
//     validateMessageField(message, event);

//     if(!isValidMessage(message)){
//       $(this).css({
//         "box-shadow": "0 0 4px #811", 
//         "border": "1px solid #600"
//       });
//     }
//     else{
//       $(this).css({
//         "box-shadow": "0 0 4px #181", 
//         "border": "1px solid #060"
//       });
//     }
//   });

//   checkboxInput.change(function(event){
//     let isChecked = $(this).is(":checked");
//     validateCheckboxField(isChecked, event);

//     if(!isChecked){
//       $(this).add("label[for='cb']").css({
//         "box-shadow": "0 0 4px #811", 
//         "border": "1px solid #600"
//       });
//     }
//     else{
//       $(this).add("label[for='cb']").css({
//         "box-shadow": "0 0 4px #181", 
//         "border": "1px solid #060"
//       });
//     }
//   });
// }

// function validateNameField(name, event){
//   if(!isValidName(name)){
//     $("#name-feedback").text("Please enter at least two characters");
//     event.preventDefault();
//   }
//   else{
//     $("#name-feedback").text("");
//   }
// }

// function validatePasswordField(password, event){
//   if(!isValidPassword(password)){
//     $("#password-feedback").text("The password should have at least 6 characters and contain a nunber");
//     event.preventDefault();
//   }
//   else{
//     $("#password-feedback").text("");
//   }
// }

// function validateMessageField(message, event){
//   if(!isValidMessage(message)){
//     $("#message-feedback").text("Please enter a message");
//     event.preventDefault();
//   }
//   else{
//     $("#message-feedback").text("");
//   }
// }

// function validateCheckboxField(isChecked, event){
//   if(!isChecked){
//     $("#checkbox-feedback").text("Please agree to this");
//     event.preventDefault();
//   }
//   else{
//     $("#checkbox-feedback").text("");
//   }
// }

// function isValidName(name){
//   return name.length >= 2;
// }

// function isValidPassword(password){
//   return password.length >= 6 && /\d/.test(password);
// }

// function isValidMessage(message){
//   return message.trim() != "";
// }