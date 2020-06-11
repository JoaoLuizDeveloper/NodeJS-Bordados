$(document).ready(function() {
				
navigation = $('#menu-holder').children('ul');
options = '<option value="" selected>-Main Menu-</option>';

navigation.find('li').each(function() {
		
			link = $(this).children('a');
			depth   = $(this).parents('ul').length - 1;
			indent  = '';

		if( depth ) {
			while( depth > 0 ) {
				indent += ' - ';
				depth--;
			}
		}
options += '<option value="' + link.attr('href') + '">' + indent + ' ' + link.text() + '</option>';
		
	}).end().after('<select class="mobile-navigation">' + options + '</select>');

	$('.mobile-navigation').on('change', function() {
		window.location = jQuery(this).val();
	});
						
				});