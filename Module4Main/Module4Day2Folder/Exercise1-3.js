//Exercise 1: Basic Object with Getters and Setters

class Product {

    constructor(name, price, description){
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }

    get price(){
        return this._price
    }

    set price(newPrice){
        this.name = newPrice
    }

    get description(){
        return this._description
    }

    set name(newDescription){
        this.name = newDescription
    }
}

const Product1 = new Product("Jumping Jimmy", 20.99, "He jumps...")
console.log(Product1)

//Exercise 2: Protoyypal Inheritance 

class TV extends Product {

    constructor(name, price, description, screenSize){
        super(name, price, description)
        this.screenSize = screenSize
    }
}

const Product2 = new TV("Samsung", 1299.99, "Its a TV", "69 inches")

class Shirt extends Product {

    constructor(name, price, description, size){
        super(name, price, description)
        this.size = size
    }
}

const Product3 = new Shirt("Uniqlo", 49.99, "White shirt", "Large")

console.log(Product2)
console.log(Product3)

//Exercise 3: Using Constructor Functions

function Book(title, author, price){
    this.title = title
    this.author = author
    this.price = price
}

Book.prototype.displayInfo = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`)
}

const Book1 = new Book("Sick Book", "Me", 20.99)
const Book2 = new Book("Wicked Book", "You", 25.99)

Book1.displayInfo()
Book2.displayInfo()