class Book {
    #title;
    #author;
    #price;

    constructor(title, author, price){
        this.#title = title
        this.#author = author
        this.#price = price
    }

    get title() {
        return this.#title
    }

    set title(enteredTitle){
        if (typeof enteredTitle === "string" && enteredTitle !== ""){
            this.#title = enteredTitle
        } else {
            console.log("#Invalid entry for title#")
        }
    }

    get author() {
        return this.#author
    }

    set author(enteredAuthor){
        if (typeof enteredAuthor === "string" && enteredAuthor !== ""){
            this.#author = enteredAuthor
        } else {
            console.log("#Invalid entry for author#")
        }
    }

    get price() {
        return this.#price
    }

    set price(enteredPrice){
        if (typeof enteredPrice === "number" && enteredPrice > 0){
            this.#price = enteredPrice
        } else {
            console.log("#Invalid entry for price#")
        }
    }
}

const book1 = new Book("Title of Book", "Author Person", 10.99)

console.log(book1)

book1.title = "A Whole New World"

console.log(book1)
book1.title = "jump for joy"
delete book1.title

console.log(book1)

console.log(Object.getOwnPropertyDescriptor(book1, '#title'))

console.log(Object.getOwnPropertyDescriptor(book1, '#author'))

console.log(Object.getOwnPropertyDescriptor(book1, '#price'))