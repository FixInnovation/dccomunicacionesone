const slider = document.querySelector("#slider");
const progressbar = document.querySelector("#progress-bar");
let sliderSection = document.querySelectorAll(".slider__section");
let intervalID; // Variable para almacenar el ID del intervalo

/* Obtenemos al ultimo elemento / ultima imagen */
let sliderSectionLast = sliderSection[sliderSection.length -1];

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
        progressbar.style.width = "0";
    }, 500);
}

function startSlider() {
    intervalID = setInterval(function(){
        moveRight();
    }, 8000);
}

function restartSlider() {
    clearInterval(intervalID);
    startSlider();
}

startSlider(); // Iniciar el slider al cargar la página

// Ejemplo de actualización en tiempo real que reinicia el slider
function actualizarEnTiempoReal() {
    // Lógica de actualización en tiempo real

    // Reiniciar el slider
    restartSlider();
}