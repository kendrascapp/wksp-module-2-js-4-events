// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimeOut is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
// event is the click 
// result is one of 2 words 

const body = document.querySelector('body'); 
const result = document.getElementById('result');

function handleClick () {
result.innerText ="you win!";
body.removeEventListener('click', handleClick);
}
setTimeout (function() {
    result.innerText = "you lose!!";
    body.removeEventListener('click', handleClick);
}, 4000);

body.addEventListener('click', handleClick);