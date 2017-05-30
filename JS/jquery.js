
$(document).ready(function(){
 $('.flip').mouseover(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).addClass('flipped');
        });
        return false;
    });
 });
