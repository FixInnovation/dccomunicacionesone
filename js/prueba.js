var navigation = document.querySelector(".navigation");
var nav = document.querySelector("nav");
var navLinks = document.querySelectorAll("nav ul li a");
var navDropdownProductos = document.querySelector(".nav-list > .section-productos > ul.nav-dropdown");
var navDropdownNosotros = document.querySelector(".nav-list > .section-nosotros > ul.nav-dropdown");
var navToggle = document.getElementById("nav-toggle"); // Actualizado: seleccionar el nav-toggle por su id
var scrollThreshold = 300;

// Función para aplicar los estilos en respuesta al scroll
function applyStylesOnScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) {
    navigation.classList.add("navigation-white");
    nav.classList.add("navigation-white");
    // Agregar la clase "transparent" al nav-toggle
    navToggle.classList.add("transparent");
  } else {
    navigation.classList.remove("navigation-white");
    nav.classList.remove("navigation-white");
    // Remover la clase "transparent" del nav-toggle
    navToggle.classList.remove("transparent");
    // Agregar estilo a los links de navegación antes de los 300 píxeles
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#ffffff"; // Cambiar el color de los links a blanco
    }
  }

  if (scrollTop > scrollThreshold) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = ""; // Restaurar el color original de los links
    }
  }

  // Cambiar el background de .nav-dropdown de Productos al hacer scroll
  if (scrollTop > scrollThreshold) {
    navDropdownProductos.style.background = "#ffffff";
  } else {
    navDropdownProductos.style.background = "transparent";
  }

  // Cambiar el background de .nav-dropdown de Nosotros al hacer scroll
  if (scrollTop > scrollThreshold) {
    navDropdownNosotros.style.background = "#ffffff";
  } else {
    navDropdownNosotros.style.background = "transparent";
  }

  // Restaurar el color original de los links de navegación después de los 300 píxeles
  if (scrollTop > scrollThreshold) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = ""; // Restaurar el color original de los links
    }
  }
}

// Ejecutar la función al cargar la página
window.addEventListener("load", function () {
  applyStylesOnScroll();
});

// Ejecutar la función en respuesta al evento "scroll"
window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    applyStylesOnScroll();
  });
}); 

