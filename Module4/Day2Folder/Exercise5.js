//Exercise 5: Implementing Error Handling

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
        try {
            if (typeof newPrice !== 'number'){
                throw new Error("Must be a number")
            }
            if (newPrice < 0){
                throw new Error("Must be positive")
            }
            this._price = newPrice
    } catch (error) {
        console.error('Error:', error.message)
    }
}

    get description(){
        return this._description
    }

    set description(newDescription){
        this._description = newDescription
    }
}

const Product1 = new Product("Jumping Jimmy", 20.99, "He jumps...")

console.log(Product1)

Product1.price = -30

Product1.price = "Hello"

Product1.price = 45.55

console.log(Product1)