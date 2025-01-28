loadGame();

// Function to update the length of the coaster
function updateLength() {
    $("#lengthText").text("Your coaster is " + lengthArray[0].toString() + " meters long");
}

// Function to update the length buyable buttons with their current cost and count
function updateLengthBuyables() {
    while(i<4){
    i+=1;
    thing="#length"+i;
    $("#length1").html(lengthArray[i].text1 + lengthArray[i].cost.toString() + lengthArray[i].text2 + lengthArray[i].count.toString());
    }
    if(lengthArray[5].value==true){$("#hillsButton").html("Hills Unlocked")}
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
    if(lengthArray[0].gte(new Decimal(250))==true){
        if(lengthArray[5].value==false){
            lengthArray[5].value=true;

            saveGame();
        }
    }
}
//for length page-specific saving

// Update the game state every second
window.setInterval(function(){
    updateLength()
    updateLengthBuyables()
    incrementRiders();
    updateRiders();
    updateLengthBuyables();
}, 1000);

