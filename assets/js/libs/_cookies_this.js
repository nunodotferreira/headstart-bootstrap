//Cookies

var nameWebCookie='website_name';

//info de cookies do website
$.cookieCuttr({
	cookieAnalytics: false,
	cookieMessage: 'Este website utiliza cookies, pode <a href="{{cookiePolicyLink}}" title="tudo sobre cookies">saber tudo sobre cookies aqui</a>. Para visualizar este website corretamente...',
	cookiePolicyLink: 'http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm',
	cookieAcceptButtonText:"FECHAR"
});

//verifica o cookie
if($.cookie("sutafer")) {
	//verificar se foram aceites cookies
	if ($.cookie('cc_cookie_accept') == "cc_cookie_accept") {
		//carrega cookie
		$.cookie(nameWebCookie,'website ' + nameWebCookie, {expires: 1, path: '/'});	 
	}
  };

$(document).ready(function() { 

	
		//verificar se foram aceites cookies
		if ($.cookie('cc_cookie_accept') == "cc_cookie_accept") {
			//grava cookie
			$.cookie(nameWebCookie,'website ' + nameWebCookie, {expires: 1, path: '/'});
		}
		
  
});