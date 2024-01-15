var x = 0.1 + 0.2
//console.log(x)
//This is because of the way floating-point numbers are represented in JavaScript. The result of 0.1 + 0.2 is not exactly 0.3 due to precision limitations with binary floating-point representation. The result is very close to 0.3, but it's not an exact match.

var num = x.toFixed(2)

//console.log(typeof(num))

var result = num * 2

//console.log(typeof(result))
//console.log(result)
//Fix number to 2 decimal points

var y = 0.1 + 0.4
var z = 0.1 + 0.3

//console.log(y)
//console.log(z)

function toCent(x, y) {
    let p = x.toFixed(2);
    let r = y.toFixed(2);
    return console.log(`${(p * 100) + (r * 100)} cents`)
}

//toCent(0.1, 0.2)

class Stack {
    constructor() {
        this.array = [];
    }
    add(x) {
        this.array.push(x);
        return this.array; // Return the modified array or x
    }
    remove() {
        this.array.pop();
        return this.array;
    }
}

class Queue {
    constructor() {
        this.array = [];
    }

    add(x) {
        this.array.push(x);
        return this.array; // Return the modified array or x
    }

    remove() {
        this.array.shift();
        return this.array;
    }
}

let stacked = new Stack();
let queued = new Queue();

console.log(stacked.add(1)); // This will now log the modified array
console.log(stacked.add(2)); // This will now log the modified array
console.log(stacked.add(3)); // This will now log the modified array
console.log(stacked.add(4)); // This will now log the modified array
console.log(stacked.add(5)); // This will now log the modified array
console.log(stacked.remove()); // This will now log the modified array
console.log(stacked.remove()); // This will now log the modified array
console.log(stacked.remove()); // This will now log the modified array
console.log(stacked.remove()); // This will now log the modified array

console.log(queued.add(5)); // This will now log the modified array
console.log(queued.add(4)); // This will now log the modified array
console.log(queued.add(3)); // This will now log the modified array
console.log(queued.add(2)); // This will now log the modified array
console.log(queued.add(1)); // This will now log the modified array
console.log(queued.remove()); // This will now log the modified array
console.log(queued.remove()); // This will now log the modified array
console.log(queued.remove()); // This will now log the modified array
console.log(queued.remove()); // This will now log the modified array
