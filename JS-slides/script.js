let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(w) {
  showSlides(slideIndex += w);
}

function nextsld(w) {
  showSlides(slideIndex = w);
}

function showSlides(w) {
  let i = ' ';
  // let slides = document.querySelector('.mySlides');
  let slides = document.getElementsByClassName("mySlides");
  if (w > slides.length) 
  {slideIndex = 1}
  if (w < 1) 
  {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}