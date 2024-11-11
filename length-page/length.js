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
    condition:false
}
// Simplify function to round numbers
function simplify(number, magnitude) {
    return Math.round(number * Math.pow(10, magnitude)) / Math.pow(10, magnitude);
}

// Function to increment the number of riders based on coaster length
function incrementRiders() {
    gameData.baseRiderGain = simplify(gameData.length / 10, 3);
    gameData.riderGain = simplify(Math.pow(gameData.baseRiderGain, gameData.riderExponent), 3);

    gameData.riderGain = simplify(gameData.riderGain, 3);

    // Increment riders by the calculated rider gain
    gameData.riders = simplify(gameData.riders + gameData.riderGain, 3);
}

// Function to update the length of the coaster

// Function to update the length buyable buttons with their current cost and count
function updateLengthBuyables() {
    $("#length1").html(lengthBuyable1.text1 + lengthBuyable1.cost + lengthBuyable1.text2 + lengthBuyable1.count);
    $("#length2").html(lengthBuyable2.text1 + lengthBuyable2.cost + lengthBuyable2.text2 + lengthBuyable2.count);
    $("#length3").html(lengthBuyable3.text1 + lengthBuyable3.cost + lengthBuyable3.text2 + lengthBuyable3.count);
    $("#length4").html(lengthBuyable4.text1 + lengthBuyable4.cost + lengthBuyable4.text2 + lengthBuyable4.count);
    if(gameData.lengthUpgrade==true){$("#hillsButton").html(lengthUpgrade.text+"<br>"+"bought")}
}

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

// Save the game data to localStorage
function saveGame() {
    localStorage.setItem("save", JSON.stringify(gameData));
}

if (localStorage.getItem("save")!==null) {
    // Load saved game data
    gameData = JSON.parse(localStorage.getItem("save"));
    // Update the buyables from the saved game data
    lengthBuyable1.count = gameData.lengthBuyable1;
    lengthBuyable2.count = gameData.lengthBuyable2;
    lengthBuyable3.count = gameData.lengthBuyable3;
    lengthBuyable4.count = gameData.lengthBuyable4;
    updateLengthBuyables()
    updateLength()
    updateRiders()

} else {
    // Initialize the game data if no saved game exists
    gameData = {
        riders: 1,
        baseRiderGain: 0,
        riderMultiplier: 1,
        riderExponent: 1,
        riderGain: 0,
        length: 0,
        lengthBuyable1: 0,
        lengthBuyable2: 0,
        lengthBuyable3: 0,
        lengthBuyable4: 0,
        lengthUpgrade: false,
        hills: 0,
        hillGain: 0,
        hillExponent: 1.4,
        hillUpgrade1: false,
        hillUpgrade2: false,
        hillUpgrade3: false,
        hillUpgrade4: false,
        hillUpgrade5: false,
        hillUpgrade6: false,
        inversions:0,
        inversionGain:0,
        inversionExponent:1.6,
        
    };
    updateLengthBuyables()
}
// Update the game state every second
window.setInterval(function () {
    updateLengthBuyables();
    updateLength();
   }, 1000);