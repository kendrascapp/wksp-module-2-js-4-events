const body = document.querySelector('body');
const startButton = document.getElementById("start-button");
const timer = document.getElementById("timer");
const gameBoard = document.getElementById("game-board");
const notification = document.getElementById("notification");

const NUM_BUTTONS = Math.floor(Math.random() * 10) + 1;
const GAME_TIME = 5000; 

const clickedState = [];

function checkArray(arr) {
    return arr.every(function(item) {
        return item
    });
}


function endGame() {
    // to win the game ALL buttons must be green
    notification.style.height = '200px';  //style of the pop up for winning / losing 
    notification.style.paddingTop = '74px';
    if (checkArray(clickedState)) {    //calling empty array from the top 
        notification.innerText = "You Win!!!!";  //putting result in empty array from above 
        notification.style.background = 'green';
    } else {
        notification.innerText = "You Lose...";
        notification.style.background = 'red';
    }

    // clear all of the setIntervals    // makes you refresh the page in order to play again
    for (let i = 0; i < NUM_BUTTONS; i++) {
        document.getElementById(`btn-${i}`).removeEventListener('click', toggleColor); 
    }
}

function toggleColor(event) {       //makes each button you click on in game change color
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');

    // get id
    const id = buttonId.split('-')[1];
    // toggle clickedState value
    clickedState[id] = !clickedState[id];
}

function startGame()  {
    // remove the start button
    startButton.remove(); //this is how you remove the start button after clicking it 

    // start timer
    timer.innerText = GAME_TIME / 1000;   //adding inner text to game time - game time is 5000
    let seconds = GAME_TIME - 1000;  //at the top made game time = 5000s 
    const countdown = setInterval(function() {
        if (seconds < 1) {
            clearInterval(countdown);
            endGame();
        }
        timer.innerText = seconds / 1000;
        seconds -= 1000;
    }, 1000);

    // add buttons
    for (let i = 0; i < NUM_BUTTONS; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.id = `btn-${i}`;
        button.style.top = `${Math.random() * 575}px`;
        button.style.left = `${Math.random() * 775}px`;
        
        gameBoard.appendChild(button);

        clickedState.push(false);
    
        button.addEventListener('click', toggleColor);
    }

    const buttonStatus = setInterval(function() {
        if (checkArray(clickedState)) {
            timer.innerText = 0;
            endGame();
            clearInterval(buttonStatus);
        }
    }, 400);
}