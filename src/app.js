document.addEventListener('DOMContentLoaded', () => {

  const openMenu = document.querySelector('.burgerBtn');
  const navBar = document.querySelector('.nav-bar') //change to classList
  const closeMenu = document.querySelector('.closeMenu')

  openMenu.addEventListener('click', () => {
    navBar.style.display = "flex"
    openMenu.style.display = "none"
    closeMenu.style.display = "inline"
  });

  closeMenu.addEventListener('click', () => {
    navBar.style.display = "none"
    closeMenu.style.display = "none"
    openMenu.style.display = "inline"
  });

  // mediaQueryList for adding hr tag to contact section
  // const mediaQueryList = window.matchMedia('(min-width: 50em)');
  // function addHr() {
  //   const getHrClass = document.querySelector('.addHr');
  //   const createHr = document.createElement('hr');
  //   const anchorContact = document.getElementById('anchorContact');
  //   createHr.style.cssText = "width: 33%; margin: 0 auto;";
  //   getHrClass.insertBefore(createHr, anchorContact);
  // }
  // function handleDeviceChange(e) {
  //   if (e.matches) {
  //     console.log('JS media Query Matched: resolution above 800px');
  //     addHr();
  //   } else {
  //     console.log('Media Query: lower then 799px, hr tag removed')
  //   }
  // }
  // mediaQueryList.addEventListener('change', handleDeviceChange);
  // handleDeviceChange(mediaQueryList);
})
