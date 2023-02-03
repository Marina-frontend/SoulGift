//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .menu__body').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });
});

$(window).resize(function () { 
    var width = $('body').innerWidth();
    console.log(width);
    if (width < 720) {
        $('.logo__text').addClass('hidden');
        $('.header__socials').addClass('hidden');
    } 
});



