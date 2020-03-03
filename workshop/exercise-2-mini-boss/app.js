// Create a page that
// contains 3 sections (one for each of the following)
// section 1 displays the current time
// section 2 contains a start/stop button with a stopwatch 
// which starts at 00:00 and continues until the user clicks "stop"
// section 3 contains a timer where the user can enter a 
// number of seconds, 
// click start and the timer counts down to 0. 
// There should be a sound announcing the end as well.
// section 1 - display the current time:
// get the data - in this case it's the date
// new Date() is an internal javascript function that gets
// the date for us 
// today.getHours() -> another internal javascript function
// that gets the hours of the day 
// same with getMinutes() and getSeconds();
// for testing: console.log(variableName)
//console.log(time);
// get the p tag from the html doc that you're going to put the
// data in - in this case it's our concatinated "time"
// section 2 - start/stop buttom with a stop watch 
// that starts at 0
// and continue until the user clicks "stop"

// first we get date like before - but just seconds!
// lets make a function - event
// then we use a new internal javascript function called
// setInterval -> this is a timing function
// set interval -> every "milliseconds" -> DO SOMETHING
// internal js timing event functions: setInterval & setTimeout
// make global varibale for setInterval so that setTImeout
// can get it later:
// empty/naming it:
    // use global variable and set the Interval to it
    // fill it up with setInterval
    // get start button and add event listener for click - on
// click of this button the timer starts!
    // pass global variable into this function to 
    // clear the timeout!!!!!!

// get start button and add event listener for click - on
// click of this button the timer starts!

// create start/stop button with stopwatch
// start at 00:00 and continue until click stop ()
// get element 
// add event listener to element 
// create result for when event happens

document.getElementById("currentTime");
document.getElementById("stopWatch");
document.getElementById("timer");
//----------------
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() 
+ ":" + today.getSeconds();
var currentTime = document.getElementById("p1").innerHTML = time; 
//-------------------
function startWatchFunction (){
    var stopWatchDate = new Date();
    var stopWatchSeconds = stopWatchDate.getSeconds();
    var stopWatch = document.getElementById("p2").innerHTML = stopWatchSeconds; 
}

var setIntervalVar;
function startTime(){
    setIntervalVar = setInterval(startWatchFunction, 1000);
}

document.getElementById("startBtn")
.addEventListener("click",  startTime);

function stopWatchFunction () {
    clearTimeout(setIntervalVar);
}

document.getElementById("stopBtn")
.addEventListener("click",  stopWatchFunction );

//---------------------------
function userCountDown () {
    // exercise 3
    // get the value of the input box and put it in
    // the html p3 
    // set interval to show the count every 1 second and 
    // start count at the user input number
    // set user value to 1 -> it will run 
    // every second until 0:
    // if the user input number is less than 0 -> stop
    var userValue = document.getElementById("inputBox").value;
    var showCount = document.getElementById("p3").innerHTML = userValue;
    var startUserCountDown = setInterval(function(){
        var showCount = document.getElementById("p3").innerHTML = userValue;
        userValue = userValue - 1;
        if(userValue <= -1){
            clearInterval(startUserCountDown);
        }
    }, 1000);
}
document.getElementById("giveNumber")
.addEventListener("click",  userCountDown );

//const timer = document.getElementById("timer");