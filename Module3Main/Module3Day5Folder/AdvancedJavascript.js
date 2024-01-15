//1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
//b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
//c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

// function makeCounter(startsFrom, incrementBy) {
//     let currentCount = startsFrom;
    
//     return function() {
//         currentCount += incrementBy;
//         console.log(currentCount)
//         return currentCount;
//     };
// }

// let counter1 = makeCounter(7, 2);
// let counter2 = makeCounter(1, 4);

// counter1()
// counter1()
// counter1()

// counter2()
// counter2()
// counter2()

//2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.

// delayMsg = msg => console.log(`This message will be printed after a delay: ${msg}`)

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// let cancelTimer = setTimeout(delayMsg, 10000, '#5: Delayed by 10s');
// clearTimeout(cancelTimer);

//3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button. Using the following code to test and start with:
//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.
//b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms
//c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement

// function debounce(func, ms){
//     let timeout;
//     return function(msg) {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, ms, msg);
//     }
// }

// function printMe(msg) {
//     console.log(msg)
// }

// printMe = debounce(printMe, 1000); //create this debounce function for a)

// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout( printMe, 100, "I am msg#1");
// setTimeout( printMe, 200, "I am msg#2");
// setTimeout( printMe, 300, "I am msg#3");

//4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
//c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

// function printFibonacci(limit){
//     let fibOne = 0
//     let fibTwo = 1
//     let count = 0

//     setTimeout( function printMe() {
//         let nextNum = fibOne + fibTwo;
//             fibOne = fibTwo;
//             fibTwo = nextNum
//         if (count < limit) {
//             console.log(nextNum);
//             count++;
//             setTimeout(printMe, 1000)
//             return fibOne, fibTwo
//         }
//     }
// )}

// function printFibonacci(limit){
//     let fibOne = 0
//     let fibTwo = 1
//     let count = 0

//     let timeLimit = setInterval( function printMe() {
//         let nextNum = fibOne + fibTwo;
//             fibOne = fibTwo;
//             fibTwo = nextNum
//         if (count < limit) {
//             console.log(nextNum);
//             count++;
//             return fibOne, fibTwo
//         } else {
//             clearInterval(timeLimit)
//         }
//     }, 1000
// )}


//printFibonacci(10)




//5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
//b) Change the year for the car by creating a clone of the original and overriding it
//c) Does the delayed description() call use the original values or the new values from
//b)? Why?
//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};

function callCar(){
    return car.description()
}

callCar()

setTimeout(callCar, 2000)

car = {...car, year: 2022, model: '998'}

const bindCar = car.description.bind(car)

setTimeout(bindCar, 1000);

car = {...car, year: 2000, model: '69'}