deleteSave()
// Function to update the length of the coaster
function updateLength() {
    $("#lengthText").text("Your coaster is " + lengthArray[0].toString() + " meters long");
}
// Function to update the length buyable buttons with their current cost and count
function updateLengthBuyables() {
    $("#length1").html(lengthArray[1].text1 + lengthArray[1].cost.toString() + lengthArray[1].text2 + lengthArray[1].count.toString());
    $("#length2").html(lengthArray[2].text1 + lengthArray[2].cost.toString() + lengthArray[2].text2 + lengthArray[2].count.toString());
    $("#length3").html(lengthArray[3].text1 + lengthArray[3].cost.toString() + lengthArray[3].text2 + lengthArray[3].count.toString());
    $("#length4").html(lengthArray[4].text1 + lengthArray[4].cost.toString() + lengthArray[4].text2 + lengthArray[4].count.toString());
    if(lengthArray[5].value==true){$("#hillsButton").html("Hills Unlocked")}
}

// Function to handle buying a length buyable (1 meter)
function buyLengthBuyable(value) {
    thisObject=lengthArray[value].valueOf();
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
    if(lengthArray[0].gte(new Decimal(2500))==true){
        if(lengthArray[5].value==false){
            lengthArray[5].value=true;

            saveGame();
        }
    }
}
//for length page-specific saving

// Update the game state every second
 window.setInterval(function(){
    incrementRiders();
    updateRiders();
    updateLength();
    updateLengthBuyables();
}, 1000);

