;(function($) {
	"use strict";

	var introSlider = $('.ba-intro-slider'),
		bgSlider = $('.ba-bg-slider');

	introSlider.slick({
		prevArrow: '.ba-intro-prev',
		nextArrow: '.ba-intro-next',
		asNavFor: bgSlider,
		speed: 500,
		dots: true,
		appendDots: '.ba-intro-slider-nav'
	});
	bgSlider.slick({
		arrows:false,
		asNavFor:introSlider,
		fade:true,
		speed:500
	});	

	//Toggle menu
	var nav = $('.ba-nav'),
		menuToggle = $('.ba-menu-toggle');

	menuToggle.on('click', function (e) {
		e.preventDefault();
		
		menuToggle.toggleClass('ba-open');
		nav.toggleClass('ba-open');
	})



	//Init magnific popup//
	$('[data-modal-video]').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
	})
})(jQuery);

