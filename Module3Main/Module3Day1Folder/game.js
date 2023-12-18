class Item{
    constructor(name, type){
        this.ItemName = name;
        this.ItemType = type;
    }
}

class Character{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 5;
        this.items = [];
        this.inventory = new Inventory(this.items);
    }
    //Let the opponents battle it out
    fight(enemy) {
        while (enemy.health > 0 && this.health > 0) {
            let x = this.strength;
            let y = enemy.strength;
            enemy.health -= x;
            this.health -= y
            console.log(`${enemy.name}'s been hit for (${this.strength}) damage and now has (${enemy.health}) health points remaining. ${this.name}'s been hit for (${enemy.strength}) damage and now has (${this.health}) health points remaining.`)
            if (enemy.health <= 0) {
                console.log(`${enemy.name} has fallen.`)
                for (let i = 0; i < enemy.items.length; i++) {
                    console.log(`${enemy.name} has dropped (${enemy.items[i].ItemName})`)
                }
            } else if (this.health <= 0 ) {
                console.log(`${this.name} has fallen.`)
                for (let i = 0; i < this.items.length; i++) {
                    console.log(`${this.name} has dropped (${this.items[i].ItemName})`)
                }
            }
        }
    }

    //Attack method
    attack(enemy) {
        let x = this.strength
        enemy.health -= x
        if (enemy.health <= 0) {
            console.log(`${enemy.name} has fallen.`)
            for (let i = 0; i < enemy.items.length; i++) {
                console.log(`${enemy.name} has dropped (${enemy.items[i].ItemName})`)
            }
        } else {
        return console.log(`${this.name} hit ${enemy.name} for (${this.strength}) damage. ${enemy.name} has (${enemy.health}) health points remaining`)
        }
    }

    //Show inventory
    showInventory() {
        console.log(`${this.name} has the following items:`)
        for (let i = 0; i < this.items.length; i++) {
            console.log(`(${this.items[i].ItemName})`)
    }
    }

    //Use an item and remove it from the inventory
    useItem(item) {
        if (item.ItemName === 'Potion of Strength') {
            this.strength *= 2;
            this.inventory.remove(strengthPotion)
            return console.log(`${this.name}'s strength has doubled. It is now (${this.strength})`)
        } else if (item.ItemName === 'Potion of Health') {
            this.health += 50;
            return console.log(`${this.name}'s health has increased. It is now (${this.health})`)
        } else if (item.ItemType === 'Axe') {
            Character.health = 0
            return console.log(`${this.name}'s butchered himself. He is now dead`)
        } else if (item.ItemType === 'Sword') {
            Character.health = 0
            return console.log(`${this.name}'s stabbed himself. He is now dead`)
        } else if (item.ItemType === 'Mace') {
            Character.health = 0
            return console.log(`${this.name}'s clobbered himself. He is now dead`)
        } else {

        }

}
}

class Inventory{
    constructor(items){
        this.items = items;
    }

    //Add an item to the inventory
    add(item, Character){
        this.items.push(item);
        if (item.ItemType === 'Axe') {
            Character.strength += 20
        } else if (item.ItemType === 'Sword') {
            Character.strength += 10
        } else if (item.ItemType === 'Mace') {
            Character.strength += 30
        } else {

        }
        return console.log(`Added (${item.ItemName}) to ${Character.name}'s inventory.`)
    }

    //Remove the item from the inventory
    remove(item){
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
        return console.log(`Removed (${item.ItemName}) from your inventory.`)


    }
}

let bilbo = new Character('Bilbo');

let frodo = new Character('Frodo');

let axe = new Item('Axe Of Glory', 'Axe');

let sword = new Item('Sword Of Justice', 'Sword');

let mace = new Item('Mace Of Windu', 'Mace');

let strengthPotion = new Item('Potion of Strength', 'Strength Potion');

let healthPotion = new Item('Potion of Health', 'Health Potion');

bilbo.inventory.add(axe, bilbo);

bilbo.inventory.add(sword, bilbo);

bilbo.inventory.add(mace, bilbo);

bilbo.inventory.add(strengthPotion, bilbo);

frodo.inventory.add(healthPotion, frodo);

//bilbo.attack(frodo);

//bilbo.showInventory()

//bilbo.useItem(strengthPotion)

bilbo.useItem(mace)

bilbo.showInventory()

bilbo.fight(frodo)

//bilbo.showInventory()