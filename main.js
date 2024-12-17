
function simplify(number, magnitude) {
    return number,times(new Decimal(10).pow(magnitude)).div(new Decimal(10).pow(magnitude));
}

function incrementRiders() {
    gameData.baseRiderGain = simplify(gameData.length.div(new Decimal(10)),new Decimal(3));
    let baller=simplify(gameData.baseRiderGain.pow(riderExponent),new Decimal(3));
    gameData.riderGain = simplify(gameData.riderGain.times(gameData.riderMultiplier), new Decimal(3));
    
    // make number go up
    gameData.riders = simplify(gameData.riderGain.plus(gameData.riders),new Decimal(3));
}

function updateRiders() {
    $("#riderText").html("You have " + gameData.riders + " riders");
    $("#riderGainText").html("You are getting " + gameData.riderGain + " riders per second");
}
// Function to update the UI with the latest rider and length data

function saveGame() {
    localStorage.setItem("save", JSON.stringify(gameData));
}
function deleteSave(){
        gameData = {
            riders: new Decimal(1),
            baseRiderGain: new Decimal(0),
            riderExponent: new Decimal(1),
            riderMultiplier:new Decimal(1),
            riderGain: new Decimal(0),
            length: new Decimal(0),
            lengthBuyable1: new Decimal(0),
            lengthBuyable2: new Decimal(0),
            lengthBuyable3: new Decimal(0),
            lengthBuyable4: new Decimal(0),
            lengthUpgrade: false,
            hills: new Decimal(0),
            hillBaseCost:new Decimal(250),
            hillCost:new Decimal(250),
            hillGain: new Decimal(0),
            hillExponent: new Decimal(1.2),
            hillUpgrade1: false,
            hillUpgrade2: false,
            hillUpgrade3: false,
            hillUpgrade4: false,
            hillUpgrade5: false,
            hillUpgrade6: false,
            inversions: new Decimal(0),
            inversionGain: new Decimal (0),
            inversionExponent: new Decimal(1.6)
    };
    saveGame();
}

function loadGame() {
    savedData=localStorage.getItem("save")
    if (savedData!==null) {
        gameData = JSON.parse(localStorage.getItem("save"));

        // Load the saved counts for each length buyable
        lengthBuyable1.count=gameData.lengthBuyable1
        lengthBuyable2.count=gameData.lengthBuyable2
        lengthBuyable3.count=gameData.lengthBuyable3
        lengthBuyable4.count=gameData.lengthBuyable4
        
        // Update the UI with the saved data

        updateRiders();
    } else {
        // Initialize the game data if no saved game exists
        deleteSave();

        };
}
window.setInterval(function () {

}, 1000);
