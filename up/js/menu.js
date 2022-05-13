const menuBtn = document.getElementById('menu-btn');
const navContain = document.getElementById('main-nav');

menuBtn.addEventListener('click', function() {
  // alert("hello");
  menuBtn.classList.toggle('open');
  navContain.classList.toggle('open');
});

// // Select DOM Elements
// const menuBtn = document.getElementById('menu-btn');
// // const navOverlay = document.getElementById('nav-overlay');
// const navContain = document.getElementById('nav');
// const links = document.querySelectorAll('.nav-ul__link');

// // Fade Nav in or out using css opacity
// const fade = function() {
//   navOverlay.classList.toggle('fade');
//   navContain.classList.toggle('fade');
// }

// // Set display property to "none" or "block"
// const displayProp = function() {
//   navOverlay.classList.toggle('open');
//   navContain.classList.toggle('open');
// }

// // Open or Close menu based on logic 
// const toggleNav = function() {  
//   if (navOverlay.classList.contains('open')) {    
//     menuBtn.classList.toggle('open');  
//     fade();
//     // Wait until fade completes before setting display prop to "none"
//     setTimeout(displayProp, 600);    
  
//   } else {
//     // Wait until display prop is set to block before starting fade
//     setTimeout(fade, 62);
//     menuBtn.classList.toggle('open');
//     navOverlay.classList.toggle('open');
//     navContain.classList.toggle('open');  
//   }

// }

// // Set hamburger icon to open or close menu
// menuBtn.addEventListener('click', toggleNav);

// // Set all nav links to close menu when clicked
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', toggleNav);
// }