const hamburger = document.querySelector('#hamburger');
const navUl =  document.querySelector('#nav-ul');

hamburger.addEventListener('click', () => {
 
  if(hamburger.classList.contains(".hide")) {
    hamburger.classList.remove(".hide");
  } else {
   hamburger.classList.add(".hide");
  }
});
