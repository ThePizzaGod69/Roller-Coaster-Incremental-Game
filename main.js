let riderArray = [];
let lengthArray = [];
let hillsArray = [];
let fullData = [];
function incrementRiders() {
    riderArray[1] = lengthArray[0].plus(new Decimal(1));
    riderArray[4] = riderArray[1].times(riderArray[3]);
    
    // make number go up
    riderArray[0] = riderArray[0].plus(riderArray[4].times(new Decimal(0.1)));
}

function updateRiders() {
    $("#riderText").html("You have " + riderArray[0].toString() + " riders");
    $("#riderGainText").html("You are getting " + riderArray[4].toString() + " riders per second");
}
// Function to update the UI with the latest rider and length data

function saveGame() {
    fullData={riderArray: riderArray.map(value => value instanceof Decimal ? value.toString() : value),
        lengthArray: lengthArray.map(value => {
            if (value instanceof Decimal) {
                return value.toString();
            } else if (typeof value === "object" && value !== null) {
                // Save nested properties inside the object
                return {
                    ...value,
                    count: value.count instanceof Decimal ? value.count.toString() : value.count,
                    startCost: value.startCost instanceof Decimal ? value.startCost.toString() : value.startCost,
                    cost: value.cost instanceof Decimal ? value.cost.toString() : value.cost,
                    exponent: value.exponent instanceof Decimal ? value.exponent.toString() : value.exponent,
                    adder: value.adder instanceof Decimal ? value.adder.toString() : value.adder
                };
            }
            return value;
        }),
        hillsArray: hillsArray.map(value => value instanceof Decimal ? value.toString() : value)
    }
    localStorage.setItem("everything", JSON.stringify(fullData));
}
function deleteSave(){
        riderArray = [
                new Decimal(10),//rider count(0)
                new Decimal(0),//base rider gain(1)
                new Decimal(1),//rider exponent(2)
                new Decimal(1),//rider multiplier(3)
                new Decimal(0)//rider gain(4)
            ];
        lengthArray=[
                new Decimal(0),//length(0)
                //buyable 1 stuff(1)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(1),
                    cost: new Decimal(1),
                    exponent: new Decimal(1.1),
                    adder: new Decimal(1)},
                    //buyable 2 stuff(2)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(4),
                    cost: new Decimal(4),
                    exponent: new Decimal(1.2),
                    adder: new Decimal(2)},
                    //buyable 3 stuff(3)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(10),
                    cost: new Decimal(10),
                    exponent: new Decimal(1.3),
                    adder: new Decimal(5)},
                    //buyable 4 stuff(4)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(20),
                    cost: new Decimal(20),
                    exponent: new Decimal(1.4),
                    adder: new Decimal(10)},
                    //buyable 1 stuff(1)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(75),
                    cost: new Decimal(75),
                    exponent: new Decimal(1.6),
                    adder: new Decimal(25)},
                    //buyable 1 stuff(1)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(200),
                    cost: new Decimal(200),
                    exponent: new Decimal(1.75),
                    adder: new Decimal(50)},
                    //upgrade stuff
                false
                
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

        riderArray=fullData.riderArray.map(value => new Decimal(value));
        lengthArray=fullData.lengthArray.map(item => {
            if(typeof item === "string"){
                return new Decimal(item)
            }
            else if (typeof item === "object"){
                return{
                    ...item,
                    count: new Decimal(item.count),
                    startCost: new Decimal(item.startCost),
                    cost: new Decimal(item.cost),
                    exponent: new Decimal(item.exponent),
                    adder: new Decimal(item.adder)
                }
                }
            }
        );
        hillsArray=fullData.hillsArray.map(value => value instanceof string ? new Decimal(value) : value);
        // Update the UI with the saved data
        updateRiders();
    } else {
        // Initialize the game data if no saved game exists
        deleteSave();

        };
}
