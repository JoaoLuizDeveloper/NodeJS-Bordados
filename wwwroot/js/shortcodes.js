$(document).ready(function(){

	$(".tabs").tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
	$(".tabs2").tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
			$(".toggle_container").hide();
			$("h4.trigger").click(function(){
			$(this).toggleClass("active").next().slideToggle("normal");
			return false;
				});
			
			$('.accordion-group').accordion({ 
			  header: 'h3.acc-title', 
			    active: false, 
			    alwaysOpen: false, 
			    animated: 'easeslide', 
			    autoHeight: false 
});
	
	});  