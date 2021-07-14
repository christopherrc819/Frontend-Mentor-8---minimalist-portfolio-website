document.addEventListener('DOMContentLoaded', () => {

const openMenu = document.getElementById('burgerBtn');
const navBar = document.getElementById('mobileMenu') //change to classList
const closeMenu = document.getElementById('closeMenu')

// Show Mobile Nav Menu, remove burgerBtn, show close menu icon
openMenu.addEventListener('click', () => {
  navBar.style.display = "flex"
  openMenu.style.display = "none"
  closeMenu.style.display = "inline"
});

closeMenu.addEventListener('click', ()=> {
  navBar.style.display = "none"
  closeMenu.style.display = "none"
  openMenu.style.display = "inline"
});

})
