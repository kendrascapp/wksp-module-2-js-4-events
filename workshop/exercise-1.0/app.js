// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// target the mouse clicking 
// once the click occurrs, have a pop up that says you clicked

// start by making 


const body = document.querySelector('body');
const p = document.querySelector('p');

body.addEventListener('click', function() {
    p.innerText = 'alert!!!';
});

