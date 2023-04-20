//LANG
$('[lang="en"]').hide();
$('[lang="sr"]').show();
$(".language").click(function () {
  $("*:lang(sr)").toggle();
  $("*:lang(en)").toggle();
});

// NAVIGATION
$(document).ready(function () {
  $(".sidenav").sidenav();
});

$(document).ready(function () {
  $(".carousel").carousel({
    indicators: false,
  });
});

//SLIDER
$(document).ready(function () {
  $(".slider").slider({
    indicators: false,
    duration: 3000,
    interval: 2000,
  });
});

//MATERIAL BOX
$(document).ready(function () {
  $(".materialboxed").materialbox();
});

//GALLERY
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
