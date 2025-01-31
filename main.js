let riderArray = [];
let lengthArray = [];
let hillsArray = [];
let fullData = [];

function incrementRiders() {
    riderArray[1] = new Decimal(0.1).times(lengthArray[0].plus(new Decimal(1)));
    riderArray[4] = riderArray[1].times(riderArray[3]);
    
    // make number go up
    riderArray[0] = riderArray[0].plus(riderArray[4])
}

function updateRiders() {
    $("#riderText").html("You have " + riderArray[0].toString() + " riders");
    $("#riderGainText").html("You are getting " + riderArray[4].toString() + " riders per second");
}
// Function to update the UI with the latest rider and length data

function saveGame() {
    fullData=[riderArray,lengthArray,hillsArray]
    localStorage.setItem("everything", JSON.stringify(fullData));
}
function deleteSave(){
        riderArray = [
                new Decimal(0),//rider count(0)
                new Decimal(0),//base rider gain(1)
                new Decimal(1),//rider exponent(2)
                new Decimal(1),//rider multiplier(3)
                new Decimal(0)//rider gain(4)
            ];
        lengthArray=[
                new Decimal(0),//length(0)
                //buyable 1 stuff(1)
                {text1: "Press this to get 1 more meter of length<br>Costs: ",
                    text2: " riders<br>Bought: ",
                    count: new Decimal(0),
                    startCost: new Decimal(1),
                    cost: new Decimal(1),
                    exponent: new Decimal(1.1),
                    adder: new Decimal(1)},
                    //buyable 2 stuff(2)
                {text1: "Press this to get 2 more meters of length<br>Costs: ",
                    text2: " riders<br>Bought: ",
                    count: new Decimal(0),
                    startCost: new Decimal(4),
                    cost: new Decimal(4),
                    exponent: new Decimal(1.2),
                    adder: new Decimal(2)},
                    //buyable 3 stuff(3)
                {text1: "Press this to get 5 more meters of length<br>Costs: ",
                    text2: " riders<br>Bought: ",
                    count: new Decimal(0),
                    startCost: new Decimal(10),
                    cost: new Decimal(10),
                    exponent: new Decimal(1.3),
                    adder: new Decimal(5)},
                    //buyable 4 stuff(4)
                {text1: "Press this to get 10 more meters of length<br>Requires: ",
                    text2: " riders<br>Bought: ",
                    count: new Decimal(0),
                    startCost: new Decimal(20),
                    cost: new Decimal(25),
                    exponent: new Decimal(1.4),
                    adder: new Decimal(10)},
                    //upgrade stuff
                {value:false,
                    notBoughtText:"Press here to unlock hills<br>Requires 2500 meters of length",
                    boughtText:"You have unlocked hills"},
            ];

        hillsArray=[
            new Decimal(0),//hills count(0)
            new Decimal(250),//base cost of hills(1)
            new Decimal(250),//current hill cost(2)
            new Decimal(0),//hill gain(3)
            new Decimal(1.2),//hill cost increase exponent(4)
            false,//if you have hill upgrade 1(5)
            false,//if you have hill upgrade 2(6)
            false,//if you have hill upgrade 3(7)
            false,//if you have hill upgrade 4(8)
            false,//if you have hill upgrade 5(9)
            false,//if you have hill upgrade 6(10)
                ];
        
}

function loadGame() {
    theTester=JSON.parse(localStorage.getItem("everything"));
    if (typeof theTester!==undefined) {
        fullData=theTester;
        riderArray=fullData[0];
        lengthArray=fullData[1];
        hillsArray=fullData[2];
        // Update the UI with the saved data

        updateRiders();
    } else {
        // Initialize the game data if no saved game exists
        deleteSave();

        };
}
