$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function animationHoverShow(element, animation){
    element = $(element);
    element.hover(
        function() {
            $('#plis').css('visibility','visible');
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

$(document).ready(function(){
    $('.ho').each(function() {
        animationHover(this, 'pulse');
    });
});

$(document).ready(function(){
    $('#plis').css('visibility','hidden');
    $('#contact-me').each(function() {
        animationHoverShow(this, 'fadeInDown');
    });
});
