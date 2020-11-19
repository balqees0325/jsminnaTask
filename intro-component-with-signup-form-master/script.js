const formValidation = () => {
	const form = document.querySelector('#form').value;
const first = document.querySelector('#firstN').value;
const last = document.querySelector('#lastN').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
const error = document.querySelector('#errorMessage');
const message;

 if(form.first === "" || last === "") {
	 message = 'input field can not be empty';
	 error.innerHTML = message;
	 return  false;
 } if(email.indexOf('@') == -1 || email === '') {
	 message = 'email not valid';
	 error.innerHTML = message;
	 return false;
 } if(password !== /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/) {
	 message = 'password you entered not valid';
	 error.innerHTML = message;
	 return false;
 } else {
	 alert('form submitted succesfully')
	 return true;
 }
}





