let name = document.querySelector('#name').Value;
let email = document.querySelector('#email').value;
 const validateForm = () => {
   if(name === '' || name.length < 10 ) {
     alert('field can not be empty/ entry to small!');
     return false;
   } if (email.indexOf('@') === -1 || email === '') {
     alert('invalid email entry!');
     return false;
   } else {
     alert ('form successfully filled!');
     return true;
   }
 }