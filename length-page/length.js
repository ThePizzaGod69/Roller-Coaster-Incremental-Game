let gameData={};
// Define the length buyables
let lengthBuyable1 = {
    text1: "Press this to get 1 more meter of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: 0,
    startCost: 1,
    cost: 1,
    exponent: 1.1,

};

let lengthBuyable2 = {
    text1: "Press this to get 2 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: 0,
    startCost: 4,
    cost: 4,
    exponent: 1.2,

};

let lengthBuyable3 = {
    text1: "Press this to get 5 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: 0,
    startCost: 10,
    cost: 10,
    exponent: 1.3,

};

let lengthBuyable4 = {
    text1: "Press this to get 10 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: 0,
    startCost: 20,
    cost: 20,
    exponent: 1.4,

};
let lengthUpgrade = {
    text:"Press here to unlock hills<br>Requires 250 meters of length",
}

// Function to update the length of the coaster

// Function to update the length buyable buttons with their current cost and count


// Function to handle buying a length buyable (1 meter)
function buyLengthBuyable1() {
    if (gameData.riders >= lengthBuyable1.cost) {
        gameData.riders -= lengthBuyable1.cost; // Take away riders
        lengthBuyable1.count += 1; // Increment count
        gameData.length += 1; // Increase length by 1 meter
        let newCost = lengthBuyable1.startCost * Math.pow(lengthBuyable1.exponent, lengthBuyable1.count); // Calculate new cost
        lengthBuyable1.cost = simplify(newCost, 2); // Update cost
        gameData.lengthBuyable1=lengthBuyable1.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (2 meters)
function buyLengthBuyable2() {
    if (gameData.riders >= lengthBuyable2.cost) {
        gameData.riders -= lengthBuyable2.cost; // Take away riders
        lengthBuyable2.count += 1; // Increment count
        gameData.length += 2; // Increase length by 2 meters
        let newCost = lengthBuyable2.startCost * Math.pow(lengthBuyable2.exponent, lengthBuyable2.count); // Calculate new cost
        lengthBuyable2.cost = simplify(newCost, 2); // Update cost
        gameData.lengthBuyable2=lengthBuyable2.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (5 meters)
function buyLengthBuyable3() {
    if (gameData.riders >= lengthBuyable3.cost) {
        gameData.riders -= lengthBuyable3.cost; // Take away riders
        lengthBuyable3.count += 1; // Increment count
        gameData.length += 5; // Increase length by 5 meters
        let newCost = lengthBuyable3.startCost * Math.pow(lengthBuyable3.exponent, lengthBuyable3.count); // Calculate new cost
        lengthBuyable3.cost = simplify(newCost, 2); // Update cost
        gameData.lengthBuyable3=lengthBuyable3.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (10 meters)
function buyLengthBuyable4() {
    if (gameData.riders >= lengthBuyable4.cost) {
        gameData.riders -= lengthBuyable4.cost; // Take away riders

        lengthBuyable4.count += 1; // Increment count
        gameData.length += 10; // Increase length by 10 meters
        let newCost = lengthBuyable4.startCost * Math.pow(lengthBuyable4.exponent, lengthBuyable4.count); // Calculate new cost
        lengthBuyable4.cost = simplify(newCost, 2); // Update cost
        gameData.lengthBuyable4=lengthBuyable4.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}
function buyLengthUpgrade(){
    if(gameData.length>=250){
        if(gameData.lengthUpgrade==false){
            gameData.lengthUpgrade=true;

            saveGame();
        }
    }
}
loadGame();
// Update the game state every second
window.setInterval(function () {
    updateLengthBuyables();
    updateLength();
   }, 1000);