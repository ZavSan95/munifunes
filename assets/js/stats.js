$(document).ready(function() {
    // Función para animar los contadores cuando se hace scroll
    function animateStats() {
        $('.stat__count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,  // Duración de la animación en milisegundos
                easing: 'swing', // Tipo de animación
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    // Animar contadores cuando el usuario hace scroll a la sección
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var statsDistance = $('.stats__progress').offset().top - $(window).height();

        if (scrollDistance >= statsDistance) {
            animateStats();
            // Desactivar el event listener después de la animación para no repetirla
            $(window).off('scroll');
        }
    });
});
