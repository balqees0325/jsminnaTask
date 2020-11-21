let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;


 const validateForm = () => {
    console.log('clicked');
   if(name.length < 10 ) {
     alert('field can not be empty/ entry to small!');
     return false;
   } if (email.indexOf('@') === -1 || email === '') {
     alert('invalid email entry!');
     return false;
   } else {
     alert('form successfully filled!');
     return true;
   }
 }