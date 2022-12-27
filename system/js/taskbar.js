$(document).ready(function(){
	var taskSearch = document.getElementById("taskSearch");
	$("#appicons").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
		taskSearch.value = '';
		$("#appicons li").css('display', 'block')
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
		taskSearch.value = '';
		$("#appicons li").css('display', 'block')

	});
  $("#settingsUP").click(function(){
    document.getElementById("appsmenu").classList.toggle("opened");
	taskSearch.value = '';
    }, function(){
    document.getElementById("appsmenu").classList.remove("opened");
	taskSearch.value = '';

  });
  });


function taskSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("taskSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("appicons");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
	document.getElementById("appsmenu").classList.add("opened");
}


function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
}
function quidgetsToggle() {
	document.getElementById("appsmenu").classList.toggle("quidgets");
}

function startTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
   // var s = date.getSeconds();
    //var session = "AM";

    if(h == 0){
        h = 12;
    }

    //if(h > 12){
      //  h = h - 12;
        //session = "PM";
    //}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    //s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " //+ session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function startDate(){
    var date = new Date();
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;

    var date = m + "/" + d + "/" + y
    document.getElementById("date").innerText = date;
    document.getElementById("date").textContent = date;
    setTimeout(startDate, 1000);
}

