class Character{
    constructor(name){
        this.name = name;
        this.inventory = [];
    } 
    // Add item
    addItem(item){
    this.inventory.push(item);
    console.log(`${this.name} found a (${item.ItemName})`)
    }
    // Remove last item
    removeLastItem(){
    let a = this.inventory.pop()
    console.log(`${this.name} dropped (${a.ItemName})`)
    }
    //Use first item
    useFirstItem(){
        let a = this.inventory.shift()
        console.log(`${this.name} used his (${a.ItemName})`)
    }
    //Places item at front of array
    quickAccess(item){
        let index = this.inventory.indexOf(item);
        let itemFront = this.inventory.splice(index, 1)[0];
        this.inventory.unshift(itemFront)
        console.log(`${this.name} added (${itemFront.ItemName}) to his quick access`)
    }
    //Display all stats of items in inventory
    displayInventory(){
        this.inventory.forEach(item => {console.log(`Name of item: ${item.ItemName}; Type of item: ${item.ItemType}; Effect of item: ${item.ItemEffect}; Value of item: ${item.ItemValue} gold`)});
    }
    //Find all of a type of item
    findTypeOf(type){
        this.inventory.filter(item => {
            if (item.ItemType == type) {
                console.log(`${item.ItemName} is in your inventory`)
            }
        })
    }
    //Sort all items
    sortBy(sortMethod){
        if (sortMethod === "value") {
            let x =this.inventory.sort((item1,item2) => item1.ItemValue - item2.ItemValue)
            console.log(x.reverse())
        } else if (sortMethod === "name") {
            console.log(this.inventory.sort((item1, item2) => item1.ItemName.localeCompare(item2.ItemName)))
        }
    }
    //Remove the item from the inventory
    remove(item){
        let index = this.inventory.indexOf(item);
        this.inventory.splice(index, 1);
        return console.log(`Removed (${item.ItemName}) from your inventory.`)
    }
    //Inspect subset of inventory
    sliceInventory(start, end){
        let copy = this.inventory
        let clone = [...copy]
        let result = clone.slice(start, end)
        console.log(`These are the items from inventory slot ${start+1} to ${(start+end-1)}`)
        for (let i = 0; i < result.length; i++) {
            console.log(`(${result[i].ItemName})`)
        }
    }
    //Apply enhancement to all items
    applyBuff(){
        let clone = this.inventory.map(item => {let enhancedItem = {...item}; enhancedItem.ItemValue += 10; return enhancedItem})
        clone.forEach(item => {console.log(`Name of item: ${item.ItemName}; Type of item: ${item.ItemType}; Effect of item: ${item.ItemEffect}; Enhanced value of item: ${item.ItemValue} gold`);
        });
    }
    //Total value of all items in inventory
    totalValue(){
        let totalItem = this.inventory.reduce((total, item) => total + item.ItemValue, 0)
        console.log(`The total value of all your items is ${totalItem} gold`)
    }
    //Show inventory
    showInventory() {
        if (this.inventory.length > 0){
            console.log(`${this.name} has the following items:`)
            for (let i = 0; i < this.inventory.length; i++) {
                console.log(`(${this.inventory[i].ItemName})`)
            }
        } else {
                return console.log(`${this.name} has no items`)
            }
        }
        }


class Item{
    constructor(name, type, effect, value){
        this.ItemName = name;
        this.ItemType = type;
        this.ItemEffect = effect;
        this.ItemValue = value
    }
}

// Usage example 
let bilbo = new Character('Bilbo')

let axe = new Item('Axe of Glory', 'axe', 'attack', 50)

let sword = new Item('Sword of Wisdom', 'sword', 'attack', 80)

let healingPotion = new Item('Health Potion', 'potion', 'healing', 10)

let strengthPotion = new Item('Strength Potion', 'potion', 'strength', 20)

//Exercise 1
bilbo.addItem(axe)
bilbo.addItem(sword)
bilbo.addItem(healingPotion)
bilbo.addItem(strengthPotion)

//Exercise 11
//bilbo.totalValue()

//Exercise 10
//bilbo.applyBuff()

//Exercise 9
//bilbo.sliceInventory(1, 3)

//Exercise 8
//bilbo.remove(axe)

//Exercise 7
//bilbo.sortBy('value')
//bilbo.sortBy('name')

//Exercise 6
//bilbo.findTypeOf('potion')

//Exercise 5
//bilbo.displayInventory()

//Exercise 4
//bilbo.quickAccess(potion)
//bilbo.showInventory()

//Exercise 3
//bilbo.useFirstItem()

//Exercise 2
//bilbo.removeLastItem()

bilbo.showInventory()