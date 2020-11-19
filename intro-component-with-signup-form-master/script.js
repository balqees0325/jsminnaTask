const formValidation = () => {
	let form = document.querySelector('#form').value;
let first = document.querySelector('#firstN').value;
let last = document.querySelector('#lastN').value;
let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;
let error = document.querySelector('#errorMessage');
let message;

 if(first === "" || last === "") {
	 message = 'input field can not be empty';
	 error.innerHTML = message;
	 return  false;
 } if(email.indexOf('@') == -1 || email === '') {
	 message = 'email not valid';
	 error.innerHTML = message;
	 return false;
 } if(password !== /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/) {
	 message = 'password you entered not valid';
	 error.innerHTML = message;
	 
	 return false;
 } else {
	 alert('form submitted succesfully')
	 return true;
 }
}





