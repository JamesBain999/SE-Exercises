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

const animals = ['Tiger', 'Giraffe']
console.log(animals);

animals.push('Rhino', 'Emu');
console.log(animals);

animals.unshift('Elephant', 'Lion');
console.log(animals);

animals.sort()
console.log(animals);

function replaceMiddleAnimal(newValue){
    let x = (animals.length)/2 
    animals.splice(x, 1, newValue)
    return console.log(animals)
}
replaceMiddleAnimal("Camel")


function findMatchingAnimals(beginsWith){
    //beginsWith = beginsWith.toLowerCase();
    animals.map( x => {
        x = x.split("")
        if (x[0] === beginsWith){
            return console.log(x.join(""))
        }
    })
}

findMatchingAnimals("E")
