
// Exercise 6

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const rules = {

	fName: /^[a-zA-Z]{3,}$/, 
	fEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
	fAdress: /^[a-zA-Z]{3,}$/, 
	fLastN: /^[a-zA-Z]{3,}$/, 
	fPassword: /^(?=.*[A-Za-z])(?=.*\d).{3,}$/, 
	fPhone: /^[0-9]{3,}$/, 
};

const validateForm = (e) => {
	switch (e.target.id) {

		case 'fName':

			if (rules.fName.test(e.target.value)) {
				document.getElementById('fName').classList.add('right');
				document.getElementById('fName').classList.remove('error');
				document.getElementById('errorName').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fName').classList.remove('right');
				document.getElementById('fName').classList.add('error');
				document.getElementById('errorName').classList.add('error');
				//console.log('error');
			}
			break;

		case 'fEmail':

			if (rules.fEmail.test(e.target.value)) {
				document.getElementById('fEmail').classList.add('right');
				document.getElementById('fEmail').classList.remove('error');
				document.getElementById('errorMail').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fEmail').classList.remove('right');
				document.getElementById('fEmail').classList.add('error');
				document.getElementById('errorMail').classList.add('error');
				//console.log('error');
			}
			break;

		case 'fAdress':

			if (rules.fAdress.test(e.target.value)) {
				document.getElementById('fAdress').classList.add('right');
				document.getElementById('fAdress').classList.remove('error');
				document.getElementById('errorAdress').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fAdress').classList.remove('right');
				document.getElementById('fAdress').classList.add('error');
				document.getElementById('errorAdress').classList.add('error');
				//console.log('error');
			}
			break;

		case 'fLastN':

			if (rules.fLastN.test(e.target.value)) {
				document.getElementById('fLastN').classList.add('right');
				document.getElementById('fLastN').classList.remove('error');
				document.getElementById('errorLastN').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fLastN').classList.remove('right');
				document.getElementById('fLastN').classList.add('error');
				document.getElementById('errorLastN').classList.add('error');
				//console.log('error');
			}
			break;

		case 'fPassword':

			if (rules.fPassword.test(e.target.value)) {
				document.getElementById('fPassword').classList.add('right');
				document.getElementById('fPassword').classList.remove('error');
				document.getElementById('errorPassword').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fPassword').classList.remove('right');
				document.getElementById('fPassword').classList.add('error');
				document.getElementById('errorPassword').classList.add('error');
				//console.log('error');
			}
			break;

		case 'fPhone':

			if (rules.fPhone.test(e.target.value)) {
				document.getElementById('fPhone').classList.add('right');
				document.getElementById('fPhone').classList.remove('error');
				document.getElementById('errorPhone').classList.remove('error');
				//console.log('pass');
			} else {
				document.getElementById('fPhone').classList.remove('right');
				document.getElementById('fPhone').classList.add('error');
				document.getElementById('errorPhone').classList.add('error');
				//console.log('error');
			}
			break;

	}
}

function validate() {

	var error = 0;

	// Get the input fields

	var fName = document.getElementById('fName');
	var fEmail = document.getElementById('fEmail');

	// Get the error elements

	var errorName = document.getElementById('errorName');
	var errorMail = document.getElementById('errorMail');  
	
	// Validate fields entered by the user: name, phone, password, and email

	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if (error > 0 ) {
		alert('error');

	} else {
		alert('Ok');
	}
}
