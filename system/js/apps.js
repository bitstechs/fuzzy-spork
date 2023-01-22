//Apps

//Calculator
function dis(val)
         {
             document.getElementById("result").value+=val
         }

         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }

         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }
// Login app


	
	function loginUsr() {
		var usrInpt = document.getElementById("usrinpt").value;
		$("#loginContainer").fadeOut(200);
		document.getElementById("startupsnd").play();
		closeWindwow(10);
		if ( $('#usrinpt').val() === "" ) 
		{
			e.preventDefault();
		}
		else {
		document.getElementById("userProfileTxt").innerText = usrInpt;
		document.getElementById("userProfileTxt").textContent = usrInpt;
		document.getElementById("userProfileSetTxt").innerText = usrInpt;
		document.getElementById("userProfileSetTxt").textContent = usrInpt;
		document.getElementById("quidgetsUsrTxt").innerText = usrInpt;
		document.getElementById("quidgetsUsrTxt").textContent = usrInpt;
		document.getElementById("startupsnd").play();
		closeWindwow(10);
		}

	}

	function setUsrSet() {
		var usrSetInpt = document.getElementById("usrsetinpt").value;
		if ( $('#usrsetinpt').val() === "" ) 
		{
			document.getElementById("userProfileSetTxt").textContent = "User";
			document.getElementById("userProfileTxt").textContent = "User";

		}
		else {
		document.getElementById("userProfileTxt").innerText = usrSetInpt;
		document.getElementById("userProfileTxt").textContent = usrSetInpt;
		document.getElementById("userProfileSetTxt").innerText = usrSetInpt;
		document.getElementById("userProfileSetTxt").textContent = usrSetInpt;
		document.getElementById("quidgetsUsrTxt").innerText = usrSetInpt;
		document.getElementById("quidgetsUsrTxt").textContent = usrSetInpt;
		}

	}
	
	function defaultLog() {
		$("#loginContainer").fadeOut(200);
		document.getElementById("startupsnd").play();
		closeWindwow(10);
	}
	
	$(window).on('load', function() {
	var input = document.getElementById("usrinpt");
	 input.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			document.getElementById("loginBtn").click();
		}
		 });

		})
	
	$(window).on('load', function() {
	var input = document.getElementById("usrsetinpt");
	 input.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			document.getElementById("usrSetBtn").click();
		}
		 });

		})

		function LogNeverAsk() {
			document.cookie="AvaLogDontAsk=true";
					$("#loginContainer").fadeOut(200);
		document.getElementById("startupsnd").play();
		closeWindwow(10);
		}

//Settings
function DisableALDA() {
		document.cookie="AvaLogDontAsk=false";
		alert("Log In window enabled!")
}


//Terminal
// ref: https://stackoverflow.com/q/67322922/387194
var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);
jQuery(function($, undefined) {
    $('#jsterminal').terminal(function(command) {
        if (command !== '') {
            try {
                var result = __EVAL(command);
                if (result !== undefined) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        } else {
        }
		
    }, {
        greetings: 'AvalancheOS\nRun any Javascript command...',
        name: 'Terminal',
        height: 200,
        prompt: '> '
    });
});

//Quigets
function quiloadWeather() {
    var weather = $('#quiweather')
    var weaurl = 'https://api.openweathermap.org/data/2.5/weather' // OpenWeather API url
    var weaapiKey = '10917464510633b9565e55f5b53585ce' // API key from OpenWeather

    function success(position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude

        $.getJSON(
            weaurl + '?units=metric&lat=' + latitude + '&lon=' + longitude + '&appid=' + weaapiKey,
            function(data) {
                weather.text(
                    'The current temperature in your area is ' +
                    data.main.temp +
                    '°C'
                )
            }
        )
    }

    function error() {
		weather.text('Unable to retrieve your location for weather')
	}


    navigator.geolocation.getCurrentPosition(success, error)

    weather.text('fetching weather...')
	
}

function quiloadDate() {
    var currentDate = new Date()
    var dateString = currentDate
        .toString()
        .split(' ')
        .splice(0, 4)
        .join(' ')

    $('#quidate').text(dateString)
}
//Calendar
$(function () {
    function c() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    l.empty();
    while (!u) {
    if (s[r] == e[0].weekday) {
    u = true;
    } else {
    l.append('<div class="blank"></div>');
    r++;
    }
    }
    for (var c = 0; c < 42 - r; c++) {
    if (c >= e.length) {
    l.append('<div class="blank"></div>');
    } else {
    var v = e[c].day;
    var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
    l.append(m + "" + v + "</div>");
    }
    }
    var y = o[n - 1];
    a.css("background-color", y)
    .find("h1")
    .text(i[n - 1] + " " + t);
    f.find("div").css("color", y);
    l.find(".today").css("background-color", y);
    d();
    }
    function h() {
    var e = [];
    for (var r = 1; r < v(t, n) + 1; r++) {
    e.push({ day: r, weekday: s[m(t, n, r)] });
    }
    return e;
    }
    function p() {
    f.empty();
    for (var e = 0; e < 7; e++) {
    f.append("<div>" + s[e].substring(0, 3) + "</div>");
    }
    }
    function d() {
    var t;
    var n = $("#calendar").css("width", e + "px");
    n.find((t = "#calendar_weekdays, #calendar_content"))
    .css("width", e + "px")
    .find("div")
    .css({
    width: e / 7 + "px",
    height: e / 7 + "px",
    "line-height": e / 7 + "px",
    });
    n.find("#calendar_header")
    .css({ height: e * (1 / 7) + "px" })
    .find('i[class^="icon-chevron"]')
    .css("line-height", e * (1 / 7) + "px");
    }
    function v(e, t) {
    return new Date(e, t, 0).getDate();
    }
    function m(e, t, n) {
    return new Date(e, t - 1, n).getDay();
    }
    function g(e) {
    return y(new Date()) == y(e);
    }
    function y(e) {
    return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
    }
    function b() {
    var e = new Date();
    t = e.getFullYear();
    n = e.getMonth() + 1;
    }
    var e = 480;
    var t = 2013;
    var n = 9;
    var r = [];
    var i = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
    ];
    var s = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    var o = [
    "#16a085",
    "#1abc9c",
    "#c0392b",
    "#27ae60",
    "#FF6860",
    "#f39c12",
    "#f1c40f",
    "#e67e22",
    "#2ecc71",
    "#e74c3c",
    "#d35400",
    "#2c3e50",
    ];
    var u = $("#calendar");
    var a = u.find("#calendar_header");
    var f = u.find("#calendar_weekdays");
    var l = u.find("#calendar_content");
    b();
    c();
    a.find('i[class^="icon-chevron"]').on("click", function () {
    var e = $(this);
    var r = function (e) {
    n = e == "next" ? n + 1 : n - 1;
    if (n < 1) {
    n = 12;
    t--;
    } else if (n > 12) {
    n = 1;
    t++;
    }
    c();
    };
    if (e.attr("class").indexOf("left") != -1) {
    r("previous");
    } else {
    r("next");
    }
    });
    });  
//Notepad  

function downloadNote() {
	var file_name = document.getElementById("notefilename").value;
	var save = document.getElementById("document-textarea").value;
	var default_file_name_for_saving = "Untitled";
	var blob = new Blob([save], {
	  type: "text/plain;charset=utf-8"
	});
	saveAs(blob, (file_name || default_file_name_for_saving) + ".txt");
  }

  var openFile = function(event) {
    var input = event.target;
  
    var reader = new FileReader();
    reader.onload = function() {
      var text = reader.result;
      var node = document.getElementById('document-textarea');
      node.innerText = text;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };

//Media Player
function cs_change_music(music)
{
document.getElementById("my-audio").pause();
document.getElementById("my-audio").setAttribute('src', music);
document.getElementById("my-audio").load();
    $(".audioplayer").addClass("audioplayer-playing");
    document.getElementById("my-audio").play();
}

//Bronze 
function openTabb(tabName) {
	var i;
	var x = document.getElementsByClassName("tabb");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

//Settings 
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    }
    
      var changeBG = function(event) {
        var output = document.getElementsByClassName('desktop')[0];
        output.style.background= "url("+URL.createObjectURL(event.target.files[0])+")";
      };
    
      var resetBG = function(event) {
        var output = document.getElementsByClassName('desktop')[0];
        output.style.background= "";
      }
      function localBG() {
        document.getElementsByClassName('desktop')[0].style.background = "url('https://bing.biturl.top/?resolution=3840&format=image&index=0&mkt=en-CA')";
    }
    
    
      function defaultColors() {
        // Get the checkbox
        var checkBox = document.getElementById("defaultColor");
        let root = document.documentElement;
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
            root.style.setProperty('--wppickercolor', "");
            $('#taskbar').css('background', '');
            $('#appsmenu').css('background', '');
            $('#quidgets').css('background', '');
            $('#htmltemp').css('color', '');
            $('#watermark').css('color', '');
            $('#abranding a').css('color', '');
            $('.credtxt').css('color', '');
            $('button').css('border-color', '');
            $('#button').css('border-color', '');
            $('.checkBox').css('color', '');
            $('.calcbutton').css('border-color', '');
            $('.calctext').css('border-color', '');
            $('.textinput').css('border-color', '');
            $('.rstflgs').css('border-color', '');
    
    
        } else {
            $('#taskbar').css('background', '');
            root.style.setProperty('--wppickercolor', "");
            $('#appsmenu').css('background', '');
            $('#quidgets').css('background', '');
            $('#htmltemp').css('color', '');
            $('#watermark').css('color', '');
            $('#abranding a').css('color', '');
            $('.credtxt').css('color', '');
            $('button').css('border-color', '');
            $('#button').css('border-color', '');
            $('.checkBox').css('color', '');
            $('.calcbutton').css('border-color', '');
            $('.calctext').css('border-color', '');
            $('.textinput').css('border-color', '');
            $('.rstflgs').css('border-color', '');
            $('#notebutton').css('border-color', '');
            $('#document-textarea').css('border-color', '');
        }
        const winhead = document.getElementsByClassName('windowHeader');
        $(winhead).css('background', '');
      }
    
      function centeredApps() {
        // Get the checkbox
        var checkBox = document.getElementById("centrdAppsChk");
        // Get the output text
        var appsBtn = document.getElementById("appsPanel");
        var appsmenu = document.getElementById("appsmenu");
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
          appsBtn.style.left = "unset";
          appsBtn.style.position = "unset";
          appsmenu.style.margin = "0 auto"
          appsmenu.style.left = "0"
    
        } else {
            appsBtn.style.left = "";
            appsBtn.style.position = "";
            appsmenu.style.margin = ""
            appsmenu.style.left = ""
        }
    
    }
    function enableSearchIcon() {
        document.getElementById("taskSearch").classList.toggle("icon");
    }
    function easegg() {
        $(".creditsbtn").css('display', 'inline')
        $("#abranding a").addClass("rainbow-text");
        $("#abranding img").addClass("rainbow-text");
        }