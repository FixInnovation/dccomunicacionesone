(function ($) { // Comenzamos el JQuery
    $(function () { // Arrancamos el DOM
        // Si un enlace tiene un menú desplegable, agregamos el conmutador de submenú.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Cerrar un menú desplegable al seleccionar otro
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Al hacer clic fuera del menú desplegable, se eliminará la clase desplegable.
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Alternar entre abrir y cerrar estilos de navegación al hacer clic
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Cambiar de hamburguesa a X
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // Terminamos el DOM
})(jQuery); // Terminamos JQuery

