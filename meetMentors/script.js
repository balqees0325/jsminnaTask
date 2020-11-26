
let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let name = document.querySelector('#mentee_track').value;
let email = document.querySelector('#mentee_email').value;

let frontendMentor = [Abdulqudus, Abdull, Bello, Khadeejah,Aisha];
let backendMentors = [Abdulkabeer, Yusuf, Hameed, Zaliha, Debby]
let randomFront = Math.floor(Math.round() * frontendMentor.length);
let randomBack = Math.floor(Math.round() * backendMentor.length);


 const validateForm = () => {
  
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