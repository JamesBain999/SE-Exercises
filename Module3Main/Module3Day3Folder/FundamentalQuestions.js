// 1. What are the results of these expressions? (answer first, then use console.log() to check)
// console.log("" + 1 + 0) //My answer: (1) Actual Answer: (10)
// console.log("" - 1 + 0) //My answer: (-1) Actual Answer: (-1)
// console.log(true + false) //My answer: (truefalse) Actual Answer: (1)
// console.log(!true) //My answer: (false) Actual Answer: (false)
// console.log(6 / "3") //My answer: (2) Actual Answer: (2)
// console.log("2" * "3") //My answer: (6) Actual Answer: (6)
// console.log(4 + 5 + "px") //My answer: (9) Actual Answer: (9px)
// console.log("$" + 4 + 5) //My answer: ($45) Actual Answer: ($45)
// console.log("4" - 2) //My answer: (2) Actual Answer: (2)
// console.log("4px" - 2) //My answer: (undefined) Actual Answer: (NaN)
// console.log(" -9 " + 5) //My answer: (-4) Actual Answer: (-9 5)
// console.log(" -9 " - 5) //My answer: (-14) Actual Answer: (-14)
// console.log(null + 1) //My answer: (1) Actual Answer: (1)
// console.log(undefined + 1) //My answer: (1) Actual Answer: (NaN)
// console.log(undefined == null) //My answer: (true) Actual Answer: (true)
// console.log(undefined === null) //My answer: (false) Actual Answer: (false)
// console.log(" \t \n" - 2) //My answer: (undefined) Actual Answer: (-2)

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = +three + +four //Answer will be "34"
// console.log(addition)
// let multiplication = three * four //Answer will be "12"
// console.log(multiplication)
// let division = three / four //Answer will be "0.75"
// console.log(division)
// let subtraction = three - four //Answer will be "-1"
// console.log(subtraction)
// let lessThan1 = three < four //Answer will be "True"
// console.log(lessThan1)
// let lessThan2 = +thirty < +four //Answer will be "True"
// console.log(lessThan2)

//3. Which of the following console.log messages will print? Why?
// if (0) console.log('#1 zero is true') //Wont print because 0 is false
// if ("0") console.log('#2 zero is true') //will print because a string with a value is true
// if (null) console.log('null is true') //Wont print because null is false
// if (-1) console.log('negative is true') //will print because any number other than 0 is true
// if (1) console.log('positive is true') //will print because any number other than 0 is true

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
// let a = 9, b = 3
// let result = `${a} + ${b} is `;

// const ternary = (a + b) < 10 ? result += 'less than 10': result += 'greater than 10'; 

// console.log(ternary)

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 

// function getGreeting1(name) {
//     return console.log(`Hello ${name}!`);
//    } 

// var getGreeting2 = function (name) {
//     return console.log(`Hello ${name}!`);
//    } 

// var getGreeting3 = (name) => console.log(`Hello ${name}!`);

//    getGreeting1('James')
//    getGreeting2('Ernie')
//    getGreeting3('Alexander')

//6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
//6. b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
//6. c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

// const westley = {
//     name: 'Westley',
//     numFingers: 5
//   };
  
//   const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//   };
  
//   const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     getCatchPhrase: (person) => (person.numFingers == 6) ? 'You killed my father. Prepare to die.' : 'Nice to meet you',
//     greeting(person) {
//       let greeting = `Hello ${person.name}, my first name is ${this.firstName} and my last name is ${this.lastName}. `;
//       console.log(greeting + this.getCatchPhrase(person));
//     }
//   };
  
//   inigo.greeting(westley);
//   inigo.greeting(rugen);

//7. The following object represents a basketball game and keeps track of the score as the game progresses.
//a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
//b) Add a new method to print the full time final score
//c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
//d) Test your object by chaining all the method calls together in different combinations. 

// const basketballGame = {
//     score: 0,
//     foul: 0,
//     foulCount(){
//         this.foul++
//         return this
//     },
//     freeThrow() {
//     this.score++;
//     return this
//     },
//     basket() {
//     this.score += 2
//     return this
//     },
//     threePointer() {
//     this.score += 3;
//     return this
//     },
//     halfTime() {
//     console.log(`Halftime score is ${this.score} and there are ${this.foul} fouls.`);
//     return this
//     },
//     fullTime() {
//         console.log(`FUlltime score is ${this.score} and there are ${this.foul} fouls.`);
//     }
//    }
//    //modify each of the above object methods to enable function chaining as below:
//    basketballGame.basket().freeThrow().foulCount().freeThrow().basket().threePointer().halfTime().basket().freeThrow().foulCount().basket().threePointer().fullTime();

//8. The object below represents a single city.
//a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
//b) Create a new object for a different city with different properties and call your function again with the new object.

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
//    }

//    const perth = {
//     name: 'Perth',
//     population: 2_121_000,
//     state: 'WA',
//     founded: '26 January 1805',
//     timezone: 'Australia/Perth'
//    }

// for (let property in sydney){
//     console.log(`${property}: ${sydney[property]}`)
// }

// for (let property in perth){
//     console.log(`${property}: ${perth[property]}`)
// }

//9. Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
//b) Create a new dog2 variable equal to dog1 and give it a new value
//c) Create a new cat2 variable equal to cat1 and change its name property
//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
//e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent 

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = [...teamSports]
// moreSports.push('Football')
// moreSports.unshift('Tennis');
// console.log(teamSports);
// console.log(moreSports);


// let dog1 = 'Bingo';
// let dog2 = dog1;
// dog2 = 'John';
// console.log(dog1)
// console.log(dog2)


// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = {...cat1};
// cat2.name = "George";
// console.log(cat1);
// console.log(cat2);

//10. The following constructor function creates a new Person object with the given name and age values.
//a) Create a new person using the constructor function and store it in a variable
//b) Create a second person using different name and age values and store it in a separate variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive. 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.cantDrive = () => (this.age > 16) ? console.log("Can drive") : console.log("Cannot drive")
//    }

// class PersonClass{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     canDrive(){
//         if (this.age > 16){
//             return console.log("Can drive")
//         } else {
//             return console.log("Cannot drive")
//         }
//     }
// }

//    let bilbo = new Person('Bilbo', 203)
//    let frodo = new Person('Frodo', 14)
//    let legolas = new PersonClass('Legolas', 145)

//     bilbo.cantDrive()
//     frodo.cantDrive()
//     legolas.canDrive()


//    console.log(bilbo)
//    console.log(frodo)
//    console.log(legolas)