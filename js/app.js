const slider = document.querySelector("#slider");
let diapositivas = document.querySelector(".diapositivas");
let ultimaDiapositiva = diapositivas[diapositivas.length -1];

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement('afterbegin', ultimaDiapositiva);

function Next(){
  let primeraDiapositiva = document.querySelectorAll(".diapositivas")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', primeraDiapositiva);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev(){
  let diapositivas = document.querySelectorAll(".diapositivas");
  let ultimaDiapositiva = diapositivas[diapositivas.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', ultimaDiapositiva);
    slider.style.marginLeft = "-100%";
  }, 500);
}


btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 10000);

