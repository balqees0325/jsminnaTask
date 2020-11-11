const hamburger = document.querySelector('#hamburger');
const navUl =  document.querySelector('#nav-ul');

hamburger.addEventListener('click', () => {
  console.log("clicked")
  if(navUl.classList.contains("hide")) {
    navUl.classList.remove("hide");
  } else {
   navUl.classList.add("hide");
  }
});
