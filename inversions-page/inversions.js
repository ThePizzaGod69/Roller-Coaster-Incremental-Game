function inversionsReset(){
    if(hillsArray[0].gte(inversionArray[2])){
        hillsArray[0].minus()
    }
}
function updateInversionBuyables() {
    $("#inversion1").html("Corkscrew<br>Cost: " + inversionArray[5].cost.toPrecision(5) + " inversion<br>gives*25 rider gain<br>Bought: "+ inversionArray[5].count.toString());
    $("#inversion2").html("Vertical Loop<br>Cost: " + inversionArray[6].cost.toPrecision(5) + " inversion<br>makes base rider gain ^1.3<br>Bought: " + inversionArray[6].count.toString());
    $("#inversion3").html("Roll<br>Cost: " + inversionArray[7].cost.toPrecision(5) + " inversion<br>makes base rider gain ^1.5<br>Bought: " + inversionArray[7].count.toString());
    $("#inversion4").html("Dive Loop<br>Cost: " + inversionArray[8].cost.toPrecision(5) + " inversions<br>rider gain *69<br>Bought: " + inversionArray[8].count.toString());
    $("#inversion5").html("Batwing<br>Cost: " + inversionArray[9].cost.toPrecision(5) + " inversions<br>rider gain *420<br>Bought: " + inversionArray[9].count.toString());
    $("#inversion6").html("Pretzel Knot<br>Cost: " + inversionArray[10].cost.toPrecision(5) + " inversions<br>makes rider gain ^2.5<br>Bought: " + inversionArray[10].count.toString());
    if(inversionArray[12]==true){$("#hillsButton").html("You have unlocked hills")}
}
function updateInversions(){
    inversionArray[2]=inversionArray[1].times(inversionArray[4].pow(inversionArray[0]));
    $("#inversionsResetButton").text("Reset Previous progress for an Inversion"+"\n"+"Next at: "+inversionArray[2].toString()+" Hills");
}
function inversionsDisplay(){
    $("#inversionText").html("Your Coaster has "+inversionArray[0].toString()+" Inversions")
}
function buyInversionBuyable(value){
    if (inversionArray[0].gte(inversionArray[value].cost)==true) {
        inversionArray[0] = (inversionArray[0].minus(inversionArray[value].cost)).floor(); // Take away riders
        inversionArray[value].count = inversionArray[value].count.plus(new Decimal(1)); // Increment count
        inversionArray[value].cost = (inversionArray[value].startCost.times(inversionArray[value].exponent.pow(inversionArray[value].count))).ceil(); // Calculate new cost
        // Update cost
        giveBuyableEffect(value-4);
        updateInversionBuyables(); // Update the buyable UI
        saveGame();
    }
}
function giveBuyableEffect(buyable){
    if(buyable===1){
        riderArray[3]=riderArray[3].times(new Decimal(25));
    }
    else if(buyable===2){
        riderArray[2]=riderArray[2].times(new Decimal(1.3));
    }
    else if(buyable===3){
        riderArray[2]=riderArray[2].times(new Decimal(1.5));
    }
    else if(buyable===4){
        riderArray[3]=riderArray[3].times(new Decimal(69));
    }
    else if(buyable===5){
        riderArray[3]=riderArray[3].times(new Decimal(420));
    }
    else if(buyable===6){
        riderArray[2]=riderArray[2].times(new Decimal(2.5));
    }
    saveGame();
}
let inversionUpgrade = {
    text:"Press here to unlock themes<br>Requires 100 inversions",
}
loadGame();
updateRiders();
updateInversionBuyables();
inversionsDisplay();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
    updateInversionBuyables();
    updateInversions();
    inversionsDisplay();
}, 100);