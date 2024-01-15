// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// ) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

// function multiply(a, b) {
//     console.log( a * b );
//     }

// Function.prototype.delay = function (delay) {
//     return (...args) => setTimeout(() => this(...args), delay);
//     };

// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//7. In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object]. However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
//a) Define a custom toString method for the Person object that will format and print their details
//b) Test your method by creating 2 different people using the below constructor function and printing them
//c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
//d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = function (){
        return `My name is ${this.name}, I am ${this.age} years old and I am a ${this.gender}`
    }
}

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort
    this.toString = function (){
        return `My name is ${this.name}, I am ${this.age} years old and I am a ${this.gender}. I am in the ${this.cohort} cohort`
    }
}

const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('John Jones', 33, 'male')
const person3 = new Person('Jacob Adams', 14, 'female')
const person4 = new Student('Greg Jones', 22, 'male', 'hairy')
const person5 = new Student('Gary Adams', 44, 'female', 'hairy')

console.log("person 1: " + person1)
console.log("person 2: " + person2)
console.log("person 3: " + person3)
console.log("person 4: " + person4)
console.log("person 5: " + person5)

//8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.
//b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

// class DigitalClock {

//     constructor(prefix) {
//         this.prefix = prefix;
//     }

//     display() {
//         let date = new Date();
//         //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;
        
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }

// class PrecisionClock extends DigitalClock{

//     constructor(prefix, precision = 1000){
//         super(prefix);
//         this.precision = precision;
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);
//     }
// }

// class AlarmClock extends DigitalClock{

//     constructor(prefix, wakeupTime = "07:00"){
//         super(prefix);
//         this.wakeupTime = wakeupTime
//     }

//     display() {
//         let date = new Date();
//         let wakeupHours = this.wakeupTime.substring(0, 2);
//         let wakeupMins = this.wakeupTime.substring(3);
//         //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;

//         if (hours == wakeupHours && mins == wakeupMins) {
//             console.log("Wake Up")
//             super.stop()
//         }
        
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }


// }

// const myDigitalClock = new DigitalClock('Digital clock:')

// const myPrecisionClock = new PrecisionClock('Precision clock:', 1500)

// const myAlarmClock = new AlarmClock('Alarm clock:', "15:26")


// myDigitalClock.start()

// myPrecisionClock.start()

// myAlarmClock.start()