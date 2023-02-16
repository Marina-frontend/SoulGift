$(document).ready(function(){
	$('.slider').slick({
        arrows: false,
		dots:true,
		slidesToShow:1,
		autoplay: false,
		speed: 2000,
		autoplaySpeed:3000,
	});
	$('.popup-product__slider_big').slick({
        arrows: false,
		dots:false,
		autoplay: false,
		fade: true,
		asNavFor: ".popup-product__slider_small",
	});
	$('.popup-product__slider_small').slick({
        arrows: false,
		dots:false,
		slidesToShow: 3,
		autoplay: false,
		asNavFor: ".popup-product__slider_big",
	});
});
