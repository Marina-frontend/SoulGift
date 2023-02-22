$(document).ready(function(){
	$('.slider').slick({
        arrows: false,
		lazyLoad:'progressive' ,
		dots:true,
		slidesToShow:1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed:3000,
	});
	$('.popup-product__slider_big').slick({
        arrows: false,
		dots:false,
		autoplay: false,
		lazyLoad:'progressive' ,
		fade: true,
		asNavFor: ".popup-product__slider_small",
	});
	$('.popup-product__slider_small').slick({
        arrows: false,
		dots:false,
		slidesToShow: 3,
		lazyLoad:'progressive' ,
		autoplay: false,
		asNavFor: ".popup-product__slider_big",
	});
});
