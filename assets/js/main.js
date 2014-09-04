(function(window, $){

'use strict';

// Underscore is bundled in with ender, so just require it
// Comment out this line when using the separated Underscore file,
// eg. when using jQuery
//var _ = require('underscore');

// Document -------------------------------------------------------------------

	// VARS -------------------------------------------------------------------
	
	var $window = $(window);
	var mywindow = $(window);
	var mypos = mywindow.scrollTop();
	var widthWd=$(window).width();
	var heightWd=$(window).height();
	var scrollTopWd=$(window).scrollTop();

	
// JQUERY LOAD -------------------------------------------------------------------

jQuery(window).load(function() {

	//preload das paginas
	$('#status').fadeOut(); // primeiro fazemos o fadeout				
	$('#preloader').delay(350).fadeOut('slow'); // escondemos o div do loader
	
		
});

// JQUERY RESIZE -------------------------------------------------------------------

jQuery(window).on('resize orientationchange', function () {


});

// JQUERY READY -------------------------------------------------------------------

jQuery(document).ready(function (jQuery) {

	//console.log('## Main script ready');

	// VARS -------------------------------------------------------------------

	var
		fileName = _.last(window.location.href.split('/')),
		$localLink = $('a[href*="' + fileName + '#"]'),
		$scrollTarget = $('html, body')
	;

	// ACTIONS ----------------------------------------------------------------
	//

	/*tooltips*/
	//$('a[data-toggle="tooltip"]').tooltip();
	//$('.tooltipEasyTop').tooltip({ placement: 'top'});
	/*$('a[data-toggle="tooltip"]').tooltipster({
	   animation: 'fade',
	   delay: 200,
	   theme: 'tooltipster-square',
	   touchDevices: false,
	   trigger: 'hover'
		}	
	);*/
	
	/*email codification (avoid spam)*/
	//$('.emails_lnk').emailAddressMunging();
	
	/*slide bootstrap*/
	//$('#myCarousel').carousel();
	/*with swipe for mobile*/
	/*$('#myCarousel').swiperight(function() {
		$(this).carousel('prev');
	});
	$('#myCarousel').swipeleft(function() {
		$(this).carousel('next');
	});*/ 
	
	
	/*scroll divs*/
	//$('#some_div').niceScroll();
	
	
	/*magnificPopup*/
	/*jQuery('.image-link').magnificPopup({gallery:{enabled:true},type:'image'});
	jQuery('.image-link-mobile').magnificPopup({gallery:{enabled:true},type:'image'});
	jQuery('.image-linkNormal').magnificPopup({type:'image'});
	jQuery('.ajax-link').magnificPopup({type: 'ajax'});
	jQuery('.open-popup').magnificPopup({type:'inline', midClick: true});*/
	
	/*$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	}); */		
	
	
	/*string cut*/
	/*$('.cutEasyTextNomeProd').truncate({
		lines: 1,
		lineHeight: 20
	});*/
	
	
	/*scroll to top button*/
	/*$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '100', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '', // Text for element
		//activeOverlay: '#00FFFF'
		activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  });*/
	
	
	
	
	//
	// FUNCTIONS --------------------------------------------------------------
	//

	// function doSomething () {}

});

}(window, $));