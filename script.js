//cursor trail
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of 
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
//cursor trail end
oncontextmenu = (e) => {
  e.preventDefault()
  let menu = document.createElement("div")
  menu.id = "ctxmenu"
  menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
  menu.onmouseleave = () => ctxmenu.outerHTML = ''
  menu.innerHTML = "<p onClick='window.history.forward()'>Forward</p><p onClick='window.history.back()'>Back</p><p onClick='darkMode()' id='dark'>Dark Mode</p><p onClick='trailToggle()' id='trail2'>Cursor Trail Off</p>"
  document.body.appendChild(menu)
}
//dark mode
function darkMode() {
   var element = document.body;
  var x = document.getElementById("dark");
  if (x.innerHTML === "Dark Mode") {
    x.innerHTML = "Light Mode";
    element.classList.toggle("dark-mode");

  } else {
    x.innerHTML = "Dark Mode";
    element.classList.toggle("dark-mode");
  }
}
//dark mode end
function trailToggle() {
  var element = document.body;
   element.classList.toggle("cursor-trail");
  var x = document.getElementById("trail2");
  if (trail = 1) {
    x.innerHTML = "Cursor Trail Off";
  } else {
    x.innerHTML = "Cursor Trail On";
  }
}
//cursor trail

//check if mobile


//then use this code for alert
function devicecheck()
{
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if (window.confirm('This website does not support mobile devices to see the mobile version press "ok"')) 
{
window.location.href='javascript:void()';
};
}
}
//check if mobile end
//image carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//image carousel end

