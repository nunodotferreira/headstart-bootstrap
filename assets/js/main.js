(function(window, $){

'use strict';

// Underscore is bundled in with ender, so just require it
// Comment out this line when using the separated Underscore file,
// eg. when using jQuery
//var _ = require('underscore');

// Document -------------------------------------------------------------------

// When using jQuery, use
$(document).ready(function () {

//$.domReady(function () {

	//log('## Document ready');
	log('_## Main script running_');

	// VARS -------------------------------------------------------------------
	//

	//var
		//$window = $(window),
		//$body = $('body')
	//;

	var
		fileName = _.last(window.location.href.split('/')),
		$localLink = $('a[href*="' + fileName + '#"]'),
		$scrollTarget = $('html, body')
	;

	// ACTIONS ----------------------------------------------------------------
	//

	// $elem.on('something', doSomething);

	//
	// FUNCTIONS --------------------------------------------------------------
	//

	// function doSomething () {}

});

}(window, $));