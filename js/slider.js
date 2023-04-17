const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");

/* Obtenemos al ultimo elemento / ultima imagen */
let sliderSectionLast = sliderSection[sliderSection.length -1];

/* Creamos constantes para los botones */
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

/* Obtenemos el ultimo elemento y lo insertamos al inicio */
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);

}

function moveLeft(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    let sliderSectionFirst = document.querySelectorAll(".slider__Section")[0];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);

}

btnRight.addEventListener('click', function(){
    moveRight();
});

btnLeft.addEventListener('click', function(){
    moveLeft();
});

setInterval(function(){
    moveRight();
}, 5000); 