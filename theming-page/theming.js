function themesReset(){
    if(inversionArray[0].gte(themingArray[2])){
        themingArray[0]=themingArray[0].plus(new Decimal(1));
        themingArray[2]=(new Decimal(30)).times(themingArray[3].pow(themingArray[0]))
        saveGame();
        updateTheming();
    }
}
// Function to update the length of the coaster
function updateTheming() {themingArray[1]=themingArray[1].plus(themingArray[0].pow(themingArray[4]))
    $("#themingResetButton").html("Get a Theme"+"\n"+"Next at "+themingArray[2].toString()+"Inversions")
    $("#themingText").text("You have " + themingArray[0].toString() + " Themes");
    $("#themingGainText").text("You are getting " + themingArray[0].pow(themingArray[4]).toString() + " Theme Points per second");
    $("#themingPointText").text("You have " + themingArray[1].toString() + " Theme Points");
}
// Function to update the length buyable buttons with their current cost and count
function updateThemingBuyables() {
    $("#theme1").html("Tree<br>Cost: " + themingArray[5].cost.toString() + " theme points<br>makes rider gain ^1.4<br>Bought: " + themingArray[5].count.toString());
    $("#theme2").html("New sign<br>Cost: " + themingArray[6].cost.toString() + " theme points<br>makes rider gain ^1.7<br>Bought: " + themingArray[6].count.toString());
    $("#theme3").html("Do a promo video<br>Cost: " + themingArray[7].cost.toString() + " theme points<br>makes rider gain ^2.3<br>Bought: " + themingArray[7].count.toString());
    $("#theme4").html("New paint job<br>Cost: " + themingArray[8].cost.toString() + " theme points<br>base rider gain ^4<br>Bought: " + themingArray[8].count.toString());
    $("#theme5").html("Do a holiday event<br>Cost: " + themingArray[9].cost.toString() + " theme points<br>base rider gain ^6<br>Bought: " + themingArray[9].count.toString());
    $("#theme6").html("Change the park name<br>Cost: " + themingArray[10].cost.toString() + " theme points<br>theme point gain ^1.2<br>Bought: " + themingArray[10].count.toString());
    if(themingArray[9]==true){$("#endButton").html("YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
}

// Function to handle buying any theming buyable
function buyThemingBuyable(value) {
    if (themingArray[1].gte(themingArray[value].cost)==true) {
        themingArray[1] = themingArray[1].minus(themingArray[value].cost); // Take away riders
        themingArray[value].count = themingArray[value].count.plus(new Decimal(1)); // Increment count
        themingArray[1] = themingArray[1].plus(themingArray[value].adder); // Increase length by 1 meter
        let newCost = themingArray[value].startCost.times(themingArray[value].exponent.pow(themingArray[value].count)); // Calculate new cost
        themingArray[value].cost = newCost; // Update cost
        updateThemingBuyables(); // Update the buyable UI
        giveBuyableEffect(value-2);
        saveGame();
    }
    themingArray[value].cost = themingArray[value].startCost.times(themingArray[value].exponent.pow(themingArray[value].count)); // Calculate new cost
    
}
function giveBuyableEffect(buyable){
    if(buyable===1){
        riderArray[2]=riderArray[2].times(new Decimal(1.4));
    }
    else if(buyable===2){
        riderArray[2]=riderArray[2].times(new Decimal(1.7));
    }
    else if(buyable===3){
        riderArray[2]=riderArray[2].times(new Decimal(2.3));
    }
    else if(buyable===4){
        riderArray[2]=riderArray[2].times(new Decimal(4));
    }
    else if(buyable===5){
        riderArray[2]=riderArray[2].times(new Decimal(6));
    }
    else if(buyable===6){
        themingArray[2]=themingArray[2].times(new Decimal(1.2));
    }
    saveGame();
}
function buyEndUpgrade(){
    if(themingArray[1].gte(new Decimal(1e10))){
        if(themingArray[9]==false){
            themingArray[9]=true;
            saveGame();

        }
    }
}

loadGame(false);
updateRiders();
updateTheming();
updateThemingBuyables();
window.setInterval(function(){
    useAutobuyers();
    incrementRiders();
    updateRiders();
    updateTheming();
}, 100);
