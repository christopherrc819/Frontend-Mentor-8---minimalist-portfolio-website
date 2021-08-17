# Frontend Mentor - Minimalist portfolio website solution

## Table of contents

- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:
**Proud of this responsive Image**
```html
<img class="hero-image" alt="image-homepage-hero" srcset="
images/homepage/mobile/image-homepage-hero.jpg 311w,
images/homepage/mobile/image-homepage-hero@2x.jpg 622w,
images/homepage/tablet/image-homepage-hero.jpg 688w,
images/homepage/tablet/image-homepage-hero@2x.jpg 1376w,
images/homepage/desktop/image-homepage-hero.jpg 1110w,
images/homepage/desktop/image-homepage-hero@2x.jpg 2220w" sizes="
(max-width: 320px) 311px,
(max-width: 480px) 622px,
(max-width: 720px) 688px,
(max-width: 768px) 1376px,
(max-width: 1024px) 1110px,
(min-width: 1025px) 2220px
">
```
**Used Percentages to get correct layout**
```css
.contactMeSection h2 {
  width: 33%;
}
.contactMeBtn {
  width: 33%;
}
```
**First burger menu with JS functionality**
```js
openMenu.addEventListener('click', () => {
  navBar.style.display = "flex"
  openMenu.style.display = "none"
  closeMenu.style.display = "inline"
});
```

**Proud of Adding JS to dynamically add hr tag to parent element and add an addEventListener to document if user expands viewport width above 800px**
```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I want to continue using JS to manipulate the DOM and adding JS functionality to every website.

### Useful resources

- [w3schools](https://www.w3schools.com/cssref/pr_class_display.asp) - Helped me understand display property fully.
- [allyjs.io](https://allyjs.io/tutorials/hiding-elements.html) - This helped me with hiding elements in the document using JS.
- [formsubmit.io](https://formsubmit.co/documentation) - Helped me with HTML5 Forms.
-[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helped me understand Flexbox more.
- [standardista.com](http://www.standardista.com/px-to-rem-conversion-if-root-font-size-is-16px/) - Used this site to convert px to rem for proper scaling of font. Put root font size in :root
- [css-tricks.com](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-srcset) - Learned to use srcset for responsive images, specifically with different pixel densities.
- [freecodecamp.org](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/) - Helped me understand breakpoints,media queries, and common viewportwidths better.
- [css-tricks.com](https://css-tricks.com/examples/hrs/) - Helped me style hr element with CSS.
- [css-tricks.com](https://css-tricks.com/a-complete-guide-to-links-and-buttons/#buttons-heading-2) - Learned alot more about styling buttons, anchor states, links...
- [css-tricks.com](https://css-tricks.com/working-with-javascript-media-queries/) - Helped me add JavaScript Media query to dynamically add elements to document. Added listener to mediaQuery for device change.
- [Youtube.com](https://www.youtube.com/watch?v=XOz8RCiPbx8) - Helped me understand .insertBefore() method to place child element before another child element.
-[codepen.io](https://codepen.io/sosuke/pen/Pjoqqp) - used this to add filter to SVG to change logo to white.
-[mozilladevelopers.github.io](https://mozilladevelopers.github.io/playground/css-grid) - Helped to build the grid for the project pages.
-[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) - Helped me update JS method to .addEventListener.

## Author
- Website - [Chris Wolf](https://christopherrc819.github.io/)
