//Tooltip js
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Animate.css js
//animation Hover
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

//Makes navbar elements move
$(document).ready(function(){
    $('.ho').each(function() {
        animationHover(this, 'pulse');
    });
});

//Makes cv button move
$(document).ready(function(){
    $('.boton-cv').each(function() {
        animationHover(this, 'tada');
    });
});

//Makes timeline images move
$(document).ready(function(){
    $('.timeline-image').each(function() {
        animationHover(this, 'swing');
    });
});

//Show something after you hover over it

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
    $('#plis').css('visibility','hidden');
    $('#contact-me').each(function() {
        animationHoverShow(this, 'fadeInDown');
    });
});

//mail
function sendMail(){
  var recipient='margaretgomezb';
  var at = String.fromCharCode(64);
  var dotcom='gmail.com';
  var mail="mailto:";
  window.open(mail+recipient+at+dotcom);
}

  document.getElementById("email").addEventListener('click', function(){
    sendMail();
  });

  
