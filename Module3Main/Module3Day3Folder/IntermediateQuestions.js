//1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

// function capitalise(word){
//     let arrWord = word.split(" ")
//     let result = arrWord.map( x => { 
//         x = x.split("");
//         let y = x.shift().toUpperCase();
//         x.unshift(y);
//         return x.join("");
//     });
//     console.log(result.join(" "))
// }

// capitalise("los angeles")

//2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (…) added to the end if it was too long, or the original text otherwise.
//b) Write another variant of the truncate function that uses a conditional operator.

// function truncate(str, max){
//     str = str.split("")
//     str = str.slice(0, max)
//     str[max-1] = str[max-1] + "..."
//     return str.join("")
// }

// console.log(truncate('This text will be truncated if it is too long', 25))

//3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array
//a) Add 2 new values to the end
//b) Add 2 new values to the beginning
//c) Sort the values alphabetically
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// console.log(animals);

// animals.push('Rhino', 'Emu');
// console.log(animals);

// animals.unshift('Elephant', 'Lion');
// console.log(animals);

// animals.sort()
// console.log(animals);

// function replaceMiddleAnimal(newValue){
//     let x = (animals.length)/2 
//     animals.splice(x, 1, newValue)
//     return console.log(animals)
// }
// replaceMiddleAnimal("Camel")


// function findMatchingAnimals(beginsWith){
//     var animalMatch = animals.filter(word => {
//         return word[0].toLowerCase() === beginsWith.toLowerCase()
//     })
//     return console.log(animalMatch)
//     }

// findMatchingAnimals("e")


//4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.
//b) Create variants of the camelCase function that use different types of for loops, and
//c) with and without the conditional operator.

// function camelCase(cssProp){
//     let result = cssProp.split("-").map( x => { 
//         x = x.split("");
//         let y = x.shift().toUpperCase();
//         x.unshift(y); 
//         return x.join("");
//         });
//     return result.join("")
// }

// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

//5. . Decimal number operations in JavaScript can lead to unexpected results, as in the following:

//b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
//c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.
//d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen)

// a) The computer struggles to hold certain values

function currencyAddition(float1, float2){
    return console.log((float1 + float2).toFixed(1))
}

currencyAddition(twentyCents, tenCents)

function currencyOperation(float1, float2, operation){
}