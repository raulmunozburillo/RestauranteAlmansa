
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("diapositivas");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}
