/*------------------------------------------------------------

	browserBlast v2.0.0
	Author: Mark Goodyear - http://www.markgoodyear.com
	Updated by: Nuno Ferreira
	Git: https://github.com/markgoodyear/browserblast
	Email: hello@markgoodyear.com
	Twitter: @markgdyr

------------------------------------------------------------*/

;var browserBlast = function (options) {

	"use strict";

	var o = options || {},
		devMode = o.devMode || false,
        supportedIE = o.supportedIE || '8',
		message = o.message || "Hey! Your browser is unsupported. Please <a href='http://browsehappy.com' target='_blank'>upgrade</a> for the best experience.",
		bootstrap = o.bootstrap || false,
		marginTop= o.marginTop || '42px';
		
	function warningSetup(options) {
		var elem = document.createElement('div');
		elem.id = "browserblast";
		elem.style.zIndex = "2147483647";
		elem.innerHTML = message;		
		document.body.appendChild(elem);
		
		if(bootstrap==true)
			{
				/*add class names to primary element browserblast*/
				elem.className += ' alert alert-danger alert-dismissable';		
				/*button for bootstrap alert*/
				var closeBt = document.createElement('button')
				closeBt.id = "browserblastClose";
				var closeStr='&times;';
				closeBt.innerHTML = closeStr;
				closeBt.type='button';		
				/*attributes for bootstrap button*/
				var att=document.createAttribute("data-dismiss");
				att.value="alert";
				closeBt.setAttributeNode(att);		
				var att=document.createAttribute("aria-hidden");
				att.value="true";
				closeBt.setAttributeNode(att);
				/*close button*/
				closeBt.className += ' close'; //BST3		
				elem.appendChild(closeBt);
				
				/*add listener to close button from bootstrap*/
				document.addEventListener('click', function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement,
						text = target.textContent || text.innerText;
						
						if (target.nodeName === 'BUTTON') {
							console.log(target.id);
							var idTarget=target.id;
							
							if(idTarget=='browserblastClose'){
								document.documentElement.setAttribute('style', 'margin-top: 0px');
							}
						}
					
				}, false);
				
			}
		else
			{
			
			/*add styling*/
			elem.className +=' browserblaststyle';
			
			}
		
		/*  
		To prevent the banner overlapping content
		.unsupported-browser is appened to the HTML tag
		so you can push it down. The margin should be
		total hight of the banner (height + border).
		*/
		/*set content margin top*/
        document.documentElement.className +=' unsupported-browser';
		document.documentElement.setAttribute('style', 'margin-top: '+marginTop);
	}
	
		
	function getIEVersion() {
		var rv = -1;
		if (navigator.appName === 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	}

    var version = getIEVersion();

	if (version > -1 && version < supportedIE + ".0" || devMode === true)  {
		warningSetup();
	}

};