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
}

class Inventory{
    constructor(items){
        this.items = items;
    }

    add(item, Character){
        this.items.push(item);
        if (item.ItemType === 'Axe') {
            Character.strength += 20
        } else if (item.ItemType === 'Sword') {
            Character.strength += 10
        } else if (item.ItemType === 'Mace') {
            Character.strength += 30
        } else if (item.ItemType === 'Strength Potion') {
            Character.strength *= 2
        } else {

        }
        return console.log(`Added (${item.ItemName}) to ${Character.name}'s inventory.`)
    }
    
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


bilbo.inventory.add(axe, bilbo);

bilbo.inventory.add(sword, bilbo);

bilbo.inventory.add(mace, bilbo);

bilbo.inventory.add(strengthPotion, bilbo);

frodo.inventory.add(axe, frodo);

bilbo.attack(frodo);