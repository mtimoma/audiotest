$(document).ready(function(){
	$("#circle1").hide();
    lowLag.init();
    lowLag.load("single.mp3");
    
    $( "#button1" ).mousedown(function() {
    	$("#circle1").show();
    	$("#audio1").trigger("play");
    });
    $( "#button2" ).mousedown(function() {
    	$("#circle1").show();
    	lowLag.play("single.mp3");
    });
    //setTimeout(function() {$("#circle1").show();},1000);
});
/*
$(document).ready(function(){
    var routineTimer = new util-2020.1.CountdownTimer();
    $("#circle1").hide();
    routineTimer.reset(5);
	while (routineTimer.getTime() > 0) {
		// listen for input
		if (routineTimer.getTime() < 4) {
    		$("#circle1").show();
		}
	}
});
*/


/*
function() {
	var svgElement = document.getElementById("circle1");
var audioElement = document.getElementById("audio1");

var routineTimer = new util.CountdownTimer();

var r = confirm("Press");
//for (var t = 0; t < 5; t++) {
	var stimOn = false;
	routineTimer.reset(5);
	//audioElement.play();
	console.log(routineTimer.getTime())
	while (routineTimer.getTime() > 0) {
		// listen for input
		if (routineTimer.getTime() < 4) {
			svgElement.setAttribute("visibility","visible");
			console.log(routineTimer.getTime())
			break;
		}
	}
	while (routineTimer.getTime() > 0) {
		continue;
	}
	console.log(routineTimer.getTime())

	//svgElement.setAttribute("visibility","hidden");
//}

//setTimeout(function(){ svgElement.setAttribute("visibility","hidden"); }, 3000);
//setTimeout(function(){ audioElement.play(); }, 3000);

}*/
