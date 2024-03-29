class Product {
  #stockCount
  #isOnSale = false;

  constructor(id, price, description, stockCount) {
    this._id = id;
    this._price = price;
    this._description = description;
    this.#stockCount = stockCount
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this._price = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get stockCount() {
      return this.#stockCount;
    }
  
  updateStockCount(newStockCount) {
      this.#stockCount = newStockCount;
    }

  static compareTwo(item1, item2){
      console.log(`${item1.id}: $${item1.price}\n${item2.id}: $${item2.price}`)
  }
  static Compare(product1, product2) {
      return product1.price - product2.price;
    }

  get isOnSale() {
      return this.#isOnSale;
  }

  set isOnSale(value) {
      this.#isOnSale = value;
  }

  getSalePrice() {
      return this.#isOnSale ? this.constructor.salePrice : this.price;
  }
  
  applyDiscount(discountPercentage) {
      const discountedPrice = this.price * ((100 - discountPercentage) / 100);
      this._price = discountedPrice;
    }
  }

class Cart {
  constructor() {
    this.items = [];
    this.discountCodes = [
      { code: "DISCOUNT10", discountPercentage: 10 },
      { code: "DISCOUNT15", discountPercentage: 15 },
    ]
    }
  
  displayItems() {
    return this.items.map((element) => {
      const product = element.product;
      return console.log(`id: ${product.id}; Price: $${product.price}`);
    });
  }

  addProduct(product, quantity) {
    if (!(product instanceof Product)) {
      throw new Error("Only instances of Product can be added to the cart");
    }

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }

    this.items.push({ product, quantity });
  }
  
    addItem(product, quantity) {
      this.addProduct(product, quantity);
    }    

  sortProducts() {
    this.items.sort((a, b) => Product.Compare(a.product, b.product));
  }

  removeItem(product) {
      this.items = this.items.filter((item) => item.product !== product);
    }

  updateQuantity(product, newQuantity) {
      const item = this.items.find((item) => item.product === product);
  
      if (item) {
        item.quantity = newQuantity;
      }
    }

  applyDiscountCode(code) {
      const discountCode = this.discountCodes.find((dc) => dc.code === code);
  
      if (discountCode) {
        discountCode.isApplied = true;
        const discountPercentage = discountCode.discountPercentage;
        this.items.forEach((item) => {
          item.product.applyDiscount(discountPercentage);
        });
      }
    }
  
  calculateTotal() {
    return this.items.reduce((total, item) => {
      const itemTotal = item.product.getSalePrice() * item.quantity;
      return total + itemTotal;
    }, 0);
    }

    //Exercise 9
  async fetchAndAddProducts(apiUrl, callback) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`Failed to fetch product data. Status: ${response.status}`);
      }

      const products = await response.json();

      // Assuming the API returns an array of product objects
      products.forEach((productData) => {
        const { id, price, description, stockCount } = productData;
        const product = new Product(id, price, description, stockCount);
        this.addProduct(product, 1);
      });

      console.log('Products fetched and added to the cart:');
      products.forEach((element) => console.log(element.title));
      callback(); // Call the callback function to signal that fetching is complete
    } catch (error) {
      console.error('Error fetching or adding products:', error.message);
    }
  }


      //Exercise 10
      // fetchAndAddProducts(apiUrl) {
      //   fetch(apiUrl)
      //     .then((response) => {
      //       if (!response.ok) {
      //         throw new Error(`Failed to fetch product data. Status: ${response.status}`);
      //       }
      //       return response.json();
      //     })
      //     .then((products) => {
      //       products.forEach((productData) => {
      //         const { id, price, description, stockCount } = productData;
      //         const product = new Product(id, price, description, stockCount);
      //         this.addProduct(product, 1); // Assuming a default quantity of 1
      //       });
    
      //       console.log('Products fetched and added to the cart:', products.forEach((element) => console.log(element)));
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching or adding products:', error.message);
      //     });
      //   }

  async checkout() {
    try {
      // Apply discount codes
      this.applyDiscountCode("DISCOUNT10");
      this.applyDiscountCode("DISCOUNT15");

      // Display items before sorting and discounts
      console.log("Items in the cart before sorting and discounts:");

      this.displayItems();

      console.log("Cart total (before sorting and discounts): $" + this.calculateTotal());

      // Sort the products in the cart
      this.sortProducts();

      // Display items after sorting
      console.log("\nItems in the cart after sorting:");
      this.displayItems();
      console.log("Cart total (after sorting): $" + this.calculateTotal());

      // Apply a discount code
      this.applyDiscountCode("DISCOUNT15");

      // Display items after applying a discount code
      console.log("\nItems in the cart after applying a 15% discount:");
      this.displayItems();
      console.log("Cart total (after 15% discount): $" + this.calculateTotal());

      // Simulate a process like placing an order or completing the checkout
      console.log("\nSimulating the checkout process...");

      // Display the final items in the cart and the total
      console.log("\nFinal items in the cart:");
      this.displayItems();
      console.log("Final cart total: $" + this.calculateTotal());
    } catch (error) {
      console.error('Error during checkout:', error.message);
    }
  }
}

class Book {
  #title;
  #author;
  #price;

  constructor(title, author, price) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get price() {
    return this.#price;
  }

  displayInfo() {
    console.log(`${this.#title} by ${this.#author}, $${this.#price}`);
  }
}
      
class Shirt extends Product {
  constructor(id, price, description, size) {
    super(id, price, description);
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  static #salePrice = 20;

  static get salePrice() {
    return this.#salePrice;
  }
}

class TV extends Product {
  constructor(id, price, description, screenSize) {
    super(id, price, description);
    this._screenSize = screenSize;
  }

  get screenSize() {
    return this._screenSize;
  }

  set screenSize(value) {
    this._screenSize = value;
  }

  static #salePrice = 800;

  static get salePrice() {
      return this.#salePrice;
  }
}

//TESTING FOR EXERCISE 1

// const myProduct = new Product("Laptop", 1000, "High-performance laptop");
// console.log(myProduct); 
// myProduct.price = 1200;
// console.log(myProduct);

//TESTING FOR EXERCISE 2

// const tv1 = new TV("samsung", 1200, "big tv", "40 inches")
// const shirt1 = new TV("polo", 100, "white shirt", "large")
// console.log(tv1)
// console.log(shirt1)

//TESTING FOR EXERCISE 3
        
// Book.prototype.displayInfo = function () {
//   console.log(`${this.title} by ${this.author}, $${this.price}`);
// };

//const book1 = new Book("blah", "mah", 15)
// book1.displayInfo()

//TESTING FOR EXERCISE 4

// const product1 = new Product("Laptop", 1000, "High-performance laptop")
// const product2 = new Product("Phone", 800, "Smartphone with great features")

// Product.compareTwo(product1, product2);

//TESTING FOR EXERCISE 5

// try {
//     const invalidProduct = new Product("Invalid", -50, "This should throw an error");
//     console.log(invalidProduct);
//   } catch (error) {
//     console.error(error.message);
//   }

//TESTING FOR EXERCISE 6

// const product1 = new Product("Laptop", 1000, "High-performance laptop", 6)

// console.log(product1.stockCount)

// product1.updateStockCount(10)

// console.log(product1.stockCount)

//TESTING FOR EXERCISE 7

// const tv1 = new TV("Smart TV", 1000, "4K UHD TV", 55);
// const tv2 = new TV("LED TV", 800, "Full HD TV", 42);
// const shirt = new Shirt("Cotton T-shirt", 20, "Casual wear", "M");

// Create a Cart instance
// const cart = new Cart();

// Add products to the cart
// cart.addProduct(tv1, 2);
// cart.addProduct(shirt, 1);
// cart.addProduct(tv2, 1);

// Display the initial cart
// console.log("Initial Cart:");
// console.log(cart.displayItems());

// Sort the products in the cart
// cart.sortProducts();

// Display the cart after sorting
// console.log("\nCart sorted by price from low to high:");
// console.log(cart.displayItems());

//TESTING FOR EXERCISE 8

// const tv1 = new TV("Smart TV", 1000, "4K UHD TV", 55);
// const tv2 = new TV("LED TV", 800, "Full HD TV", 42);
// const shirt = new Shirt("Cotton T-shirt", 20, "Casual wear", "M");



// cart.addItem(tv1, 2);
// cart.addItem(tv2, 1);
// cart.addItem(shirt, 1);

// cart.displayItems()
// console.log("Cart total (before sorting and discounts): $" + cart.calculateTotal());

// cart.sortProducts();
// cart.displayItems()
// console.log("Cart total (after sorting): $" + cart.calculateTotal());

// cart.applyDiscountCode("DISCOUNT15");
// cart.displayItems()
// console.log("Cart total (after 15% discount): $" + cart.calculateTotal());

// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 15);
// const book2 = new Book("Harry Potter", "J.K. Rowling", 25);

// //cart.addItem(book1, 2); CANNOT GET TO WORK
// //cart.addItem(book2, 2); CANNOT GET TO WORK

// cart.displayItems()
// console.log("Cart total (after adding books): $" + cart.calculateTotal());

// cart.removeItem(tv1);
// cart.displayItems()
// console.log("Cart total (after removing 2 TVs): $" + cart.calculateTotal());

// cart.sortProducts();
// cart.displayItems()
// console.log("Cart total (after sorting again): $" + cart.calculateTotal());

//TESTING FOR EXERCISE 9 or 10

// const cart1 = new Cart();

// cart1.fetchAndAddProducts("https://fakestoreapi.com/products");

const cart2 = new Cart();

cart2.fetchAndAddProducts("https://fakestoreapi.com/products3476457");

//TESTING FOR EXERCISE 11

// Example usage within an asynchronous function

// const cart = new Cart();
// cart.fetchAndAddProducts('https://fakestoreapi.com/products', () => {
//     cart.checkout();
// });

//TESTING FOR EXERCISE 12


// async function main() {
//   try {
//     const cart = new Cart();

    // Fetch and add products to the cart
//     const apiUrl = 'https://fakestoreapi.com/products';
//     await cart.fetchAndAddProducts(apiUrl);

    // Display items in the cart before any operations
//     console.log('Items in the cart before any operations:');
//     cart.displayItems();
//     console.log('Cart total (before any operations): $' + cart.calculateTotal());

    // Apply discount codes
//     await cart.applyDiscountCode('DISCOUNT10');
//     await cart.applyDiscountCode('DISCOUNT15');

    // Display items after applying discounts
//     console.log('\nItems in the cart after applying discounts:');
//     cart.displayItems();
//     console.log('Cart total (after applying discounts): $' + cart.calculateTotal());

    // Sort products in the cart
//     cart.sortProducts();

    // Display items after sorting
//     console.log('\nItems in the cart after sorting:');
//     cart.displayItems();
//     console.log('Cart total (after sorting): $' + cart.calculateTotal());

//     // Checkout process
//     await cart.checkout();

    // Additional steps or user interactions can be added here

//   } catch (error) {
//     console.error('Error during the shopping process:', error.message);
//   }
// }

//main()


