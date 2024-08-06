"use strict";

// Exercise 6

const rules = {

	fName: /^[a-zA-Z]{3,}$/, 
	fEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
	fAddress: /^[a-zA-Z]{3,}$/, 
	fLastN: /^[a-zA-Z]{3,}$/, 
	fPassword: /^(?=.*[A-Za-z])(?=.*\d).{3,}$/, 
	fPhone: /^[0-9]{3,}$/, 
};

const validateForm = (e) => { 
    const field = e.target.id;
    const value = e.target.value;
    const rule = rules[field];
    const isValid = rule.test(value); 
    const inputElement = document.getElementById(field);
    const errorElement = document.getElementById(`error${field.charAt(1).toUpperCase() + field.slice(2)}`);
    
    if (isValid) {
        inputElement.classList.add('right');
        inputElement.classList.remove('error');
        errorElement.classList.remove('error');
        console.log('pass');
    } else {
        inputElement.classList.remove('right');
        inputElement.classList.add('error');
        errorElement.classList.add('error');
        console.log('error');
    }
}

function validate() { 
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input');

    let valid = true;

    inputs.forEach(input => {
        const errorElement = document.getElementById('error' + input.id.charAt(1).toUpperCase() + input.id.slice(2));
        
        if (input.checkValidity()) {
            input.classList.remove('error');
            input.classList.add('right');
            errorElement.style.display = 'none';
        } else {
            input.classList.remove('right');
            input.classList.add('error');
            errorElement.style.display = 'block';
            valid = false;
        }
    });

    return valid;
}

document.getElementById('form').addEventListener('submit', function(event) {
    if (!validate()) {
        event.preventDefault();
    }
});