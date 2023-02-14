//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .header__menu').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });
});

$(window).resize(function () { 
    var width = $('body').innerWidth();
    if (width < 720) {
        $('.logo__text').addClass('hidden');
        $('.header__socials').addClass('hidden');
    } 
});



