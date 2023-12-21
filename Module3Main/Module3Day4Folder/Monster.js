const monsterCollection = new Set();
const treasureMap = new Map();

let goblin = "Goblin"
let dragon = "Dragon"

function addMonster(monster){
    if (monsterCollection.has(monster)===true){
        console.log(`You already caught a ${monster}`)
    } else {
        monsterCollection.add(monster)
        console.log(`You caught a ${monster}`)
    }
}

function showClue(monster){
    return console.log(treasureMap.get(monster))
}

addMonster(goblin);
addMonster(dragon);
addMonster(goblin);

treasureMap.set(goblin, "Hidden in the volcano's heart.");
treasureMap.set(dragon, "Buried under the old oak tree.");


showClue(goblin)
showClue(dragon)
console.log(monsterCollection)

let player1 = { name: "Alice" };
let secretMessages = new WeakMap();
secretMessages.set(player1, "Meet at dawn near the ancient ruins.");

function tellSecret(player){
    console.log(secretMessages.get(player))
    secretMessages.delete(player)
}

tellSecret(player1)

tellSecret(player1)

function saveGame(){
    const gameState = { monsters: Array.from(monsterCollection), treasures: Array.from(treasureMap) };
    const gameStateJSON = JSON.stringify(gameState);
    return gameStateJSON
}

function loadGameState(gameStateJSON) {
    const loadedGameState = JSON.parse(gameStateJSON);
    monsterCollection.clear()
    var dog = new Set(loadedGameState.monsters)
    treasureMap.clear()
    var cat = new Map(loadedGameState.treasures)
    return console.log(cat, dog)
}

saveGame()

const gameStateJSON = saveGame()

loadGameState(gameStateJSON)