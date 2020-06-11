$(document).ready(function(){
		
			
	// hide #back-top first
	$("#backTop").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#backTop').fadeIn();
			} else {
				$('#backTop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#backTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});			
			
			
	
	});  