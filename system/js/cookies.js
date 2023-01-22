//THEMES COOKIES
// *** TO BE CUSTOMISED ***

var style_cookie_name = "AvaOSTheme" ;
var style_cookie_duration = 30 ;
var style_domain = "" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie_style( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie_style( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie_style ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie_style ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}
//cookies 
function setCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  function checkLogCookie() {
	if (document.cookie.indexOf("AvaLogDontAsk=true") != -1)  {
		$("#loginContainer").css("display", "none");
		closeWindwow(10);	
		} else {
		$("#loginContainer").css("display", "block");
		
	}
  }
  function checkDMCookie() {
	if (document.cookie.indexOf("AvaDM=true") != -1)  {
		let root = document.documentElement;
		root.classList.toggle("dark")
		document.getElementById("taskbar").classList.toggle("dark");
	document.getElementById("appsmenu").classList.toggle("dark");
		$("#userProfile hr, #appsmenu hr, #taskSearch").toggleClass("dark");
	$("h1, strong, .centrdAppsTxt, #abranding a, #abranding img, a#dmToggle, .abttxt, span.winclose, span, #appicons a, #appicons, .day, .wppicker, .textinput, .curthemea, .curtheme, a, .rstflgs, .ALDACtxt, #quidgets, #quinews").toggleClass("dark");
	$("button, #button, #notebutton").toggleClass("dark");
	$("#document-textarea, #calendar_content, #calendar_weekdays").toggleClass("dark");
	$(".taskbarPanel, .bronzeReversed, .termReversed, #appsPanel img, .timedate").toggleClass("dark");
	$(".context-menu, .context-menu ul li").toggleClass("dark");
	$(".window, #itminvert, .windowHeader").toggleClass("dark");
	document.getElementById("dmToggle").checked = true;
		} else {
        void(0);		
	}
  }
  function checkTSIconCookie() {
	if (document.cookie.indexOf("AvaTSIcon=true") != -1)  {
        document.getElementById("taskSearch").classList.add("icon");
	document.getElementById("enableTSIcon").checked = true;
		} else {
        void(0);		
	}
  }
  function EnableDMCookie() {
    document.cookie="AvaTSIcon=true";
    alert("AvaTSIcon=true")
}

function darkModeToggleCook() {
	var toggle = document.getElementById("dmToggle")

	if (toggle.checked == true){
		document.cookie="AvaDM=true";
	}
	if (toggle.checked == false){
		document.cookie="AvaDM=false";
	}
}
function TBIconToggleCook() {
	var toggle = document.getElementById("enableTSIcon")

	if (toggle.checked == true){
		document.cookie="AvaTSIcon=true";
	}
	if (toggle.checked == false){
		document.cookie="AvaTSIcon=false";
	}
}
function setColourCookie() {
	let root = document.documentElement;
	var hsl1 = getCookie("AvaColorTheme");
	root.style.setProperty('--wppickercolor', "hsl(" + hsl1 + ", 100%, " + "50%)", "important");
	$('.windowHeader, #appsmenu, #taskbar, #quidgets').css('background', "hsl(" + hsl1 + ", 100%, " + "50%)");
	$('#htmltemp, #watermark, #abranding a, .checkBox, .credtxt').css('color', "hsl(" + hsl1 + ", 100%, " + "50%");
	$('.checkBox').css('color', "hsl(" + hsl1 + ", 100%, " + "50%)");
	$('#button, button, .calcbutton, .calctext, .textinput, .rstflgs, #notebutton, #document-textarea').css('border-color', "hsl(" + hsl1 + ", 100%, " + "50%)");
	$("#colouredSlider .ui-state-default").css("background-color", "hsl(" + hsl1 + ", 100%, 50%)");
  }
  
  function defaultColorsCookies() {
  document.cookie="AvaColorTheme=default";
  };
