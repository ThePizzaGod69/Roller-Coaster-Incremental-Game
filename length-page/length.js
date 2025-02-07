
// Function to update the length of the coaster
function updateLength() {
    $("#lengthText").text("Your coaster is " + lengthArray[0].toString() + " meters long");
}
// Function to update the length buyable buttons with their current cost and count
function updateLengthBuyables() {
    $("#length1").html("Press this to get 1 more meter of length<br>Requires: " + lengthArray[1].cost.toString() + " riders<br>Bought: " + lengthArray[1].count.toString());
    $("#length2").html("Press this to get 2 more meters of length<br>Requires: " + lengthArray[2].cost.toString() + " riders<br>Bought: " + lengthArray[2].count.toString());
    $("#length3").html("Press this to get 5 more meters of length<br>Requires: " + lengthArray[3].cost.toString() + " riders<br>Bought: " + lengthArray[3].count.toString());
    $("#length4").html("Press this to get 10 more meters of length<br>Requires: " + lengthArray[4].cost.toString() + " riders<br>Bought: " + lengthArray[4].count.toString());
    $("#length5").html("Press this to get 20 more meters of length<br>Requires: " + lengthArray[5].cost.toString() + " riders<br>Bought: " + lengthArray[5].count.toString());
    $("#length6").html("Press this to get 50 more meters of length<br>Requires: " + lengthArray[6].cost.toString() + " riders<br>Bought: " + lengthArray[6].count.toString());
    if(lengthArray[7]==true){$("#hillsButton").html("You have unlocked hills")}
}

// Function to handle buying a length buyable (1 meter)
function buyLengthBuyable(value) {
    if (riderArray[0].gte(lengthArray[value].cost)==true) {
        riderArray[0] = riderArray[0].minus(lengthArray[value].cost); // Take away riders
        lengthArray[value].count = lengthArray[value].count.plus(new Decimal(1)); // Increment count
        lengthArray[0] = lengthArray[0].plus(lengthArray[value].adder); // Increase length by 1 meter
        let newCost = lengthArray[value].startCost.times(lengthArray[value].exponent.pow(lengthArray[value].count)); // Calculate new cost
        lengthArray[value].cost = newCost; // Update cost
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
    let newCost = lengthArray[value].startCost.times(lengthArray[value].exponent.pow(lengthArray[value].count)); // Calculate new cost
    lengthArray[value].cost = newCost;
}
function buyLengthUpgrade(){
    if(lengthArray[0].gte(new Decimal(500))==true){
        if(lengthArray[7]==false){
            lengthArray[7]=true;

            saveGame();
        }
    }
}
loadGame();
updateRiders();
updateLength();
updateLengthBuyables();
// Update the game state 10 times every second
window.setInterval(function(){
    incrementRiders();
    updateRiders();
    updateLength();
    updateLengthBuyables();
}, 100);
