//! setTimeout() = function in JavaScript that allows you to schedule
//!                the execution of a function after an amount of time (milliseconds)
//?                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//*                setTimeout(callback, delay);
//*                clearTimeout(timeoutId) = can cancel a timeout before it triggers 

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

//* Anonymous function

// setTimeout(function(){window.alert("Hello")}, 3000);

//* Arrow function

// setTimeout(() => window.alert("Hello"), 3000);

//* Ex. cleartimeout 

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);

//* ex. button

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}