	
function askQuestions() {



var firstName = prompt ('what is your first name?');
	var lastName = prompt ('what is your last name?');
	var fullName = firstName + '' + lastName;

	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you, ' + firstName + '?');
	userAge= parseInt(userAge);

	if (userAge >=18) {
	 
	  console.log('User is an adult.');

	}   else if (userAge >=13) {

		console.log('User is a teenager.');

	} else {

		console.log('User is a child.');

	}

	if (firstName.toLowerCase() == 'General' && lastName.toLowerCase() != 'Assembly')  {

		console.log ('Greetings, General!');

	}

	var faveColour = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
	    faveColour == 'green' ||
	    faveColour == 'blue' ||
	    faveColour == 'yellow') {

	    $('h1').css('color', faveColour);

	}

}
	


//when the page has loaded 
$(function()  {


// when the user clicks the image, ask questions 
$ ('img').on('click', askQuestions);


  //hide all the sections to begin with 
  $('h3').next().hide();


	//when the user clicks an h3 
	$('h3').on('click', function() {

		//toggle the next element 
		$(this).next().slideToggle(500);


  });


});
