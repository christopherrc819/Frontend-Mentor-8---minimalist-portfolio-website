// Notes
// mediaQuery for adding hr tag to contact section
  const mediaQuery = window.matchMedia('(min-width: 50em)');

  function addHr(){
    const getHrClass = document.querySelector('.addHr');
    const createHr = document.createElement('hr');
    const anchorContact = document.getElementById('anchorContact');
    createHr.style.cssText = "width: 33%; margin: 0 auto;";
    getHrClass.insertBefore(createHr, anchorContact);
  }

 function handleDeviceChange(e){
   if (e.matches) {
     console.log('JS media Query Matched: resolution above 700px');
     addHr();
   }
 }
mediaQuery.addListener(handleDeviceChange);
handleDeviceChange(mediaQuery);
})
// 2nd version

const mediaQueryList = window.matchMedia('(min-width: 50em)');

function addHr() {
  const getHrClass = document.querySelector('.addHr');
  const createHr = document.createElement('hr');
  const anchorContact = document.getElementById('anchorContact');
  createHr.style.cssText = "width: 33%; margin: 0 auto;";
  getHrClass.insertBefore(createHr, anchorContact);
}

function handleDeviceChange(e) {
  if (e.matches) {
    console.log('JS Media Query Matched: resolution above 800px, add HR Tag');
    addHr();
  } else {
    console.log('Media Query: lower then 799px, Does not add HR Tag')
  }
}
mediaQueryList.addEventListener('change', handleDeviceChange);
handleDeviceChange(mediaQueryList);
