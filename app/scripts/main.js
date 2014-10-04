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
				// alert('open nav');
				openNav();
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

	function openNav(){
		var items = document.querySelectorAll('.circle a');

		for(var i = 0, l = items.length; i < l; i++) {
		  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		  
		  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
		}

		// document.querySelector('.menu-button').onclick = function(e) {
		   // e.preventDefault(); 
		   document.querySelector('.circle').classList.toggle('open');
		// }

	};

})();