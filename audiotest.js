$(document).ready(function(){
	lowLag.init();
    lowLag.load("single.mp3");
    routineTimer = new CountdownTimer();
	$("#circle1").hide();
    
    //test audio tag
    $( "#button1" ).mousedown(function() {
    	$("#circle1").show();
    	$("#audio1").trigger("play");
    });
    $( "#button1" ).mouseup(function() {
    	$("#circle1").hide();
    });

    //test lowLag.js
    $( "#button2" ).mousedown(function() {
    	$("#circle1").show();
    	lowLag.play("single.mp3");
    });
    $( "#button2" ).mouseup(function() {
    	$("#circle1").hide();
    });

    //use JS setTimeout
    $("#button3").click(function() {
    	$("#circle1").hide();
    	routineTimer.reset(2);
    	setTimeout(function(){ 
    		$("#circle1").show(); 
    		$("#start").html("Offset: " + (1-routineTimer.getTime())*1000 + "ms");
    	}, 1000);
    });

    //use psychojs timers
    $("#button4").click(function() {
    	$("#circle1").hide();
    	routineTimer.reset(2);
    	function step() {
    		if (routineTimer.getTime() <= 1 + 1000/60) {
    			$("#circle1").show();
    			$("#start").html("Offset: " + (1-routineTimer.getTime())*1000 + "ms");
    			return;
    		}
    		window.requestAnimationFrame(step);
    	}
    	window.requestAnimationFrame(step);
    });
});