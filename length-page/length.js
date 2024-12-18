// Define the length buyables
let lengthBuyable1 = {
    text1: "Press this to get 1 more meter of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: new Decimal(0),
    startCost: new Decimal(1),
    cost: new Decimal(1),
    exponent: new Decimal(1.1),
    button: $("#length1")
};

let lengthBuyable2 = {
    text1: "Press this to get 2 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: new Decimal(0),
    startCost: new Decimal(4),
    cost: new Decimal(4),
    exponent: new Decimal(1.2),
    button: $("#length2")
};

let lengthBuyable3 = {
    text1: "Press this to get 5 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: new Decimal(0),
    startCost: new Decimal(10),
    cost: new Decimal(10),
    exponent: new Decimal(1.3),
    button: $("#length3")
};

let lengthBuyable4 = {
    text1: "Press this to get 10 more meters of length<br>Requires: ",
    text2: " riders<br>Bought: ",
    count: new Decimal(0),
    startCost: new Decimal(20),
    cost: new Decimal(20),
    exponent: new Decimal(1.4),
    button: $("#length4")
};
let lengthUpgrade = {
    text:"Press here to unlock hills<br>Requires 250 meters of length",
}

// Function to increment the number of riders based on coaster length
// Function to update the length of the coaster
function updateLength() {
    $("#lengthText").text("Your coaster is " + gameData.length + " meters long");
}

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
    if (gameData.riders.gt(lengthBuyable1.cost)==true) {
        gameData.riders = gameData.riders.sub(lengthBuyable1.cost); // Take away riders
        lengthBuyable1.count = lengthBuyable1.count.plus(new Decimal(1)); // Increment count
        gameData.length = gameData.length.plus(new Decimal(1)); // Increase length by 1 meter
        let newCost = lengthBuyable1.startCost.times(lengthBuyable1.exponent.pow(lengthBuyable1.count)); // Calculate new cost
        lengthBuyable1.cost = simplify(newCost, new Decimal(2)); // Update cost
        gameData.lengthBuyable1=lengthBuyable1.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (2 meters)
function buyLengthBuyable2() {
    if (gameData.riders.gt(lengthBuyable2.cost)==true) {
        gameData.riders = gameData.riders.sub(lengthBuyable2.cost); // Take away riders
        lengthBuyable2.count = lengthBuyable2.count.plus(new Decimal(1)); // Increment count
        gameData.length = gameData.length.plus(new Decimal(2)); // Increase length by 2 meters
        let newCost = lengthBuyable2.startCost.times(lengthBuyable2.exponent.pow(lengthBuyable2.count)); // Calculate new cost
        lengthBuyable2.cost = simplify(newCost, new Decimal(2)); // Update cost
        gameData.lengthBuyable2=lengthBuyable2.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (5 meters)
function buyLengthBuyable3() {
    if (gameData.riders .gt(lengthBuyable3.cost)==true) {
        gameData.riders = gameData.riders.sub(lengthBuyable3.cost); // Take away riders
        lengthBuyable3.count = lengthBuyable3.count.plus(new Decimal(1)); // Increment count
        gameData.length = gameData.length.plus(new Decimal(5)); // Increase length by 5 meters
        let newCost = lengthBuyable3.startCost.times(lengthBuyable3.exponent.pow(lengthBuyable3.count)); // Calculate new cost
        lengthBuyable3.cost = simplify(newCost, new Decimal(2)); // Update cost
        gameData.lengthBuyable3=lengthBuyable3.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}

// Function to handle buying a length buyable (10 meters)
function buyLengthBuyable4() {
    if (gameData.riders .gt(lengthBuyable4.cost)==true) {
        gameData.riders = gameData.riders.sub(lengthBuyable4.cost); // Take away riders
        lengthBuyable4.count = lengthBuyable4.count.plus(new Decimal(1)); // Increment count
        gameData.length = gameData.length.plus(new Decimal(10)); // Increase length by 10 meters
        let newCost = lengthBuyable4.startCost.times(lengthBuyable4.exponent.pow(lengthBuyable4.count)); // Calculate new cost
        lengthBuyable4.cost = simplify(newCost, new Decimal(2)); // Update cost
        gameData.lengthBuyable4=lengthBuyable4.count;
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
}
function buyLengthUpgrade(){
    if(gameData.length.gt(new Decimal(250))==true){
        if(gameData.lengthUpgrade==false){
            gameData.lengthUpgrade=true;

            saveGame();
        }
    }
}
loadGame();
// Update the game state every second
window.setInterval(function () {
    updateRiders()
    updateLengthBuyables()
    updateLength()
    incrementRiders();
    saveGame();
    updateRiders();
}, 1000);