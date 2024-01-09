//Exercise 4: Static Methods in Class

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

    static compare(num1, num2){
        console.log(`$${num1.price} is the price of ${num1.name} and $${num2.price} is the price of ${num2.name}`)
    }
}

const Product1 = new Product("Jumping Jimmy", 20.99, "He jumps...")

const Product2 = new Product("Jumping Johnny", 10.89, "He jumps too...")

Product.compare(Product1, Product2)