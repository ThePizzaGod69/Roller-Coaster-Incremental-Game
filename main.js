
function simplify(number, magnitude) {
    return Math.round(number * Math.pow(10, magnitude)) / Math.pow(10, magnitude);
}

function incrementRiders() {
    gameData.baseRiderGain = simplify(gameData.length / 10,3);
    let baller=simplify(Math.pow(gameData.baseRiderGain,gameData.riderExponent),3);
    gameData.riderGain = simplify(gameData.riderGain*riderMultiplier, 3);
    
    // make number go up
    gameData.riders = simplify(gameData.riderGain+gameData.riders,3);
}

function updateRiders() {
    $("#riderText").text("You have " + gameData.riders + " riders");
    $("#riderGainText").text("You are getting " + gameData.riderGain + " riders per second");
}
// Function to update the UI with the latest rider and length data

function saveGame() {
    localStorage.setItem("save", JSON.stringify(gameData));
}
function deleteSave(){
        gameData = {
            riders: 1,
            baseRiderGain: 0,
            riderExponent: 1,
            riderMultiplier:1,
            riderGain: 0,
            length: 0,
            lengthBuyable1: 0,
            lengthBuyable2: 0,
            lengthBuyable3: 0,
            lengthBuyable4: 0,
            lengthUpgrade: false,
            hills: 0,
            hillBaseCost:250,
            hillCost:250,
            hillGain: 0,
            hillExponent: 1.2,
            hillUpgrade1: false,
            hillUpgrade2: false,
            hillUpgrade3: false,
            hillUpgrade4: false,
            hillUpgrade5: false,
            hillUpgrade6: false,
            inversions: 0,
            inversionGain: 0,
            inversionExponent: 1.6
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
        updateLengthBuyables();
        updateLength();
        updateRiders();
    } else {
        // Initialize the game data if no saved game exists
        deleteSave();
        updateLengthBuyables();
        };
    }
}
