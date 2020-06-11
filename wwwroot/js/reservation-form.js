
function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		$('#container').html('<h4>Message sent</h4>'); 
		$('#output').html('<p>' + $('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	// or use 
	// if (!$('input[@name=email]').fieldValue()) { 
	if (!form.datepicker.value) { 
		$('#output').html('<div class="output2">Please fill the Date field!</div>'); 
		return false; 
	} else if (!form.time.value) {
		$('#output').html('<div class="output2">Please fill the Time field!</div>'); 
		return false; 
	} else if (!form.persons.value) {
		$('#output').html('<div class="output2">Please fill the Number of persons field!</div>'); 
		return false; 
	} else if ( isNaN(form.persons.value)) {
		$('#output').html('<div class="output2">Please enter a valid Number of persons!</div>'); 
		return false; 
	} else if (!form.author.value) {
		$('#output').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		$('#output').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		$('#output').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.phone.value) {
		$('#output').html('<div class="output2">Please fill the Phone field!</div>'); 
		return false; 
	} else if ( isNaN(form.phone.value)) {
		$('#output').html('<div class="output2">Please enter a valid Phone number!</div>'); 
		return false; 
	} 
	else if (!form.message.value) {
		$('#output').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	else {	   
	 $('#output').html('Sending message...!');  		
		return true;
	}
}

$(document).ready(function() { 
    var options = { success: showResponse, beforeSubmit: showRequest}; 
    $('#reservation-form').submit(function() { 
        $(this).ajaxSubmit(options); 
        return false; 
    });
	
	   $("#datepicker").datepicker();
}); 