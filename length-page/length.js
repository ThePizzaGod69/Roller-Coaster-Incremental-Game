
//Function to handle the acquisition of the upgrade
function buyLengthUpgrade(){
    if(lengthArray[0].gte(new Decimal(500))==true){
        if(lengthArray[7]==false){
            lengthArray[7]=true;

            saveGame();
        }
    }
}
// Function to update the length buyable buttons with their current cost and count
function updateLengthBuyables() {
    $("#length1").html("Press this to get 1 more meter of length<br>Requires: " + lengthArray[1].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[1].count.toString());
    $("#length2").html("Press this to get 2 more meters of length<br>Requires: " + lengthArray[2].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[2].count.toString());
    $("#length3").html("Press this to get 5 more meters of length<br>Requires: " + lengthArray[3].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[3].count.toString());
    $("#length4").html("Press this to get 10 more meters of length<br>Requires: " + lengthArray[4].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[4].count.toString());
    $("#length5").html("Press this to get 20 more meters of length<br>Requires: " + lengthArray[5].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[5].count.toString());
    $("#length6").html("Press this to get 50 more meters of length<br>Requires: " + lengthArray[6].cost.toPrecision(5) + " riders<br>Bought: " + lengthArray[6].count.toString());
    if(lengthArray[7]==true){$("#hillsButton").html("You have unlocked hills")}
}

// Function to update the length of the coaster
function updateLength() {
    $("#lengthText").text("Your coaster is " + lengthArray[0].toPrecision(5) + " meters long");
}

//initializing my data and the page
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
