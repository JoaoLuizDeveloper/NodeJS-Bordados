$(document).ready(function() {
						   
			$('.flexslider').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,  
			prevText: 'Prev',
			nextText: 'Next'
									
									});			
			
						$('.home-bottom').slides({
							play: 5000,
							pause: 3000,
							hoverPause: true,
							generatePagination: false,
							generateNextPrev: true,
							slideSpeed: 700,
							slideEasing: 'easeOutCubic',
							autoHeight: true
						});
						
		$(".tweet").tweet({
	    modpath: 'twitter/',
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });
						
	});
