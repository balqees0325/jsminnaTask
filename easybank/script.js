 const hamburgerIcon = document.getElementById("ham-image");
 const secondNav = document.getElementById("second-nav");
 
const toggleBar = () => { 
   if(hamburgerIcon.src.endsWith('icon-hamburger.svg')) {
  hamburgerIcon.src = 'images/icon-close.svg';
   } else {
  hamburgerIcon.src = "images/icon-hamburger.svg";
   }

  secondNav.classList.toggle('displayNav')
};
hamburgerIcon.addEventListener('click', toggleBar);