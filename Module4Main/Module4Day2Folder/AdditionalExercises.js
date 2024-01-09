//Question 1

// function sumToN(n){
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function timeToLog(firstFunction){
//     return function (n){
//         let startTime = Date.now();
//         const result = firstFunction(n);
//         let endTime = Date.now();
//         console.log(`Time taken: ${endTime - startTime} milliseconds`);
//         return result;
//     }
// }

// timeToLog(sumToN)(5809428040);

// timeToLog(sumToN)(1547827490);

// timeToLog(sumToN)(125457889);

//Question 2

// const Person = {
//     name: 'Alice',
//     sayName: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }

// Person.sayName()

// const someFunction = Person.sayName;

// someFunction()

// const bindedFunction = Person.sayName.bind(Person)

// bindedFunction()

//Question 3

const obj = {
    contextProp: 'Object context' 
};

function showContext(test) {
    console.log(`${this.contextProp} : I just wrote this to play around with call() and apply() : ${test}`)
}

showContext()

showContext.call(obj, 'Whats good?')

showContext.call(obj, ...['Checking out the spread'])

showContext.apply(obj, ["Hola Amigos!"])
