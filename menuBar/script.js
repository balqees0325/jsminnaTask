const hamburger = document.querySelector('#hamburger');


hamburger.addEventListener('click', () => {
  const navUl =  document.querySelector('#nav-ul');
  
  if(navUl.classList.contains("#nav-ul")) {
    navUl.classList.remove("#nav-ul");
  } else {
   navUl.classList.add("#nav-ul");
  }
});
