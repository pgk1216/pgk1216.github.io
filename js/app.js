window.addEventListener("DOMContentLoaded", function(e) {
      
    var stage = document.querySelector(".slider");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);

var toggler = document.querySelector(".menu-toggler");
var detoggler = document.querySelector(".menu-detoggler");
$(".menu-toggler").click(function() {
  toggler.style.display = "none";
  detoggler.style.display = "block";
  $(".navigation").toggleClass("active");
  $(".logo-border").toggleClass("active");
});
$(".menu-detoggler").click(function() {
  detoggler.style.display = "none";
  toggler.style.display = "block";
  $(".navigation").toggleClass("active");
  $(".logo-border").toggleClass("active");
})

$(".navigation li a").click(function() {
  detoggler.style.display = "none";
  toggler.style.display = "block";
  $(".navigation").toggleClass("active");
  $(".logo-border").toggleClass("active");
});

gsap.from('.menu-toggler', { duration: 1, delay: 0.9, y: '-170px' });
gsap.from('.navigation', { duration: 1, delay: 1, y: '-170%' });

var typed = new Typed('.typing-effect', {
  strings: [
      'an Avid Programmer',
      'a front-end developer',
      'a back-end developer'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 3000,
  loop: true,
  showCursor: false
});