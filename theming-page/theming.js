
// Function to update the length of the coaster
function updateTheming() {////////////////////////////////////////////add code to go up
    $("#themingText").text("You have " + themingArray[0].toString() + " Themes");
    $("#themingGainText").text("You are getting " + themingArray[0].pow(themingArray[2]).toString() + " Theme Points per second");
    $("#themePointText").text("You have " + themingArray[1].toString() + " Theme Points");
}
// Function to update the length buyable buttons with their current cost and count
function updateThemingBuyables() {
    $("#theme1").html("Tree<br>Cost: " + themingArray[3].cost.toString() + " theming points<br>makes rider gain ^1.4<br>Bought: " + themingArray[3].count.toString());
    $("#theme2").html("New sign<br>Cost: " + themingArray[4].cost.toString() + " theming points<br>makes rider gain ^1.7<br>Bought: " + themingArray[4].count.toString());
    $("#theme3").html("Do a promo video<br>Cost: " + themingArray[5].cost.toString() + " theme points<br>makes rider gain ^2.3<br>Bought: " + themingArray[5].count.toString());
    $("#theme4").html("New paint job<br>Cost: " + themingArray[6].cost.toString() + " theming points<br>base rider gain ^4<br>Bought: " + themingArray[6].count.toString());
    $("#theme5").html("Do a holiday event<br>Cost: " + themingArray[7].cost.toString() + " theme points<br>base rider gain ^6<br>Bought: " + themingArray[7].count.toString());
    $("#theme6").html("Change the park name<br>Cost: " + themingArray[8].cost.toString() + " theme points<br>theme point gain ^1.2<br>Bought: " + themingArray[8].count.toString());
    if(themingArray[9]==true){$("#endButton").html("YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
}

// Function to handle buying a length buyable (1 meter)
function buyThemingBuyable(value) {
    if (themingArray[0].gte(themingArray[value].cost)==true) {
        themingArray[0] = themingArray[0].minus(themingArray[value].cost); // Take away riders
        themingArray[value].count = themingArray[value].count.plus(new Decimal(1)); // Increment count
        themingArray[0] = themingArray[0].plus(themingArray[value].adder); // Increase length by 1 meter
        let newCost = themingArray[value].startCost.times(themingArray[value].exponent.pow(themingArray[value].count)); // Calculate new cost
        themingArray[value].cost = newCost; // Update cost
        updateLengthBuyables(); // Update the buyable UI
        saveGame();
    }
    themingArray[value].cost = themingArray[value].startCost.times(themingArray[value].exponent.pow(themingArray[value].count)); // Calculate new cost
    
}
function buyEndUpgrade(){
    if(themingArray[1].gte(new Decimal(1e10))==true){
        if(themingArray[9]==false){
            themingArray[9]=true;

            saveGame();
        }
    }
}

loadGame();
updateRiders();
updateTheming();
updateThemingBuyables();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
}, 100);