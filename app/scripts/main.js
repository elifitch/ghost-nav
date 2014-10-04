(function(){
	'use strict';
	
	var pressTimer;
	var pressCounter = 0;

	window.addEventListener('touchstart',function(event){
		window.startX = event.pageX;
		window.startY = event.pageY;

		pressTimer = setInterval(function(){
			//650ms taphold event
			if(pressCounter >= 65) {
				alert('open nav');
				clearInterval(pressTimer);
				pressCounter = 0;
			} else {
				pressCounter ++;
			}
	    },10);
	},false);

	window.addEventListener('touchmove',function(event){
    	clearInterval(pressTimer);
    	pressCounter = 0;
	},false);

})();