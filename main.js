let riderArray = [];
let lengthArray = [];
let hillsArray = [];
let inversionArray = [];
let themingArray = []
let fullData = {};
function incrementRiders() {
    riderArray[1] = lengthArray[0].plus(new Decimal(1));

    riderArray[4] = riderArray[1].pow(riderArray[2]).times(riderArray[3]);
    
    // make number go up
    riderArray[0] = riderArray[0].plus(riderArray[4].times(new Decimal(0.1)));
}

function updateRiders() {
    $("#riderText").html("You have " + riderArray[0].toPrecision(5) + " riders");
    $("#riderGainText").html("You are getting " + riderArray[4].toPrecision(5) + " riders per second");
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
            } else{
            return value;
            }
        }),
        hillsArray: hillsArray.map(value => value instanceof Decimal ? value.toString() : value),
        inversionArray: inversionArray.map(value => {
            if (value instanceof Decimal) {
                return value.toString();
            } else if (typeof value === "object") {
                if(value.count){
                    // Save nested properties inside the object
                    return {
                        ...value,
                        count: value.count instanceof Decimal ? value.count.toString() : value.count,
                        startCost: value.startCost instanceof Decimal ? value.startCost.toString() : value.startCost,
                        cost: value.cost instanceof Decimal ? value.cost.toString() : value.cost,
                        exponent: value.exponent instanceof Decimal ? value.exponent.toString() : value.exponent,
                    };
                }
                else{
                    return{
                        ...value,
                        autobuyer1: value.autobuyer1,
                        autobuyer2: value.autobuyer2,
                        autobuyer3: value.autobuyer3,
                        autobuyer4: value.autobuyer4,
                        autobuyer5: value.autobuyer5,
                        autobuyer6: value.autobuyer6,
                    }
                }
            } else{
            return value;
            }
        }),
        themingArray: themingArray.map(value => {
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
                    };
                } else{
                return value;
                }
        })
    }
    localStorage.setItem("everything", JSON.stringify(fullData));
}
function deleteSave(){
        riderArray = [
                new Decimal(1),//rider count(0)
                new Decimal(0),//base rider gain(1)
                new Decimal(1),//rider exponent(2)
                new Decimal(1),//rider multiplier(3)
                new Decimal(0)//rider gain(4)
            ];
        lengthArray=[
                new Decimal(0),//length(0)
                
                {//buyable 1 stuff(1)
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
                    //buyable 5 stuff(1)
                {
                    count: new Decimal(0),
                    startCost: new Decimal(75),
                    cost: new Decimal(75),
                    exponent: new Decimal(1.6),
                    adder: new Decimal(25)},
                    //buyable 6 stuff(1)
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
            new Decimal(500),//base cost of hills(1)
            new Decimal(500),//current hill cost(2)
            new Decimal(0),//hill gain(3)
            new Decimal(1.1),//hill cost increase exponent(4)
            false,//if you have hill upgrade 1(5)
            false,//if you have hill upgrade 2(6)
            false,//if you have hill upgrade 3(7)
            false,//if you have hill upgrade 4(8)
            false,//if you have hill upgrade 5(9)
            false,//if you have hill upgrade 6(10)
            false,//if you have inversions unlocked(11)
        ];
        inversionArray=[
            new Decimal(0),//inversion count(0)
            new Decimal(50),//base cost of inversions(1)
            new Decimal(50),//current inversion cost(2)
            new Decimal(0),//inversion gain(3)
            new Decimal(1.1),//inversion cost increase exponent(4)
        
            {
            count: new Decimal(0),
            startCost: new Decimal(1),
            cost: new Decimal(1),
            exponent: new Decimal(1.1),
            },
            {
            count: new Decimal(0),
            startCost: new Decimal(1),
            cost: new Decimal(1),
            exponent: new Decimal(1.2),
            },
            {
            count: new Decimal(0),
            startCost: new Decimal(1),
            cost: new Decimal(1),
            exponent: new Decimal(1.4),
            },
            {
            count: new Decimal(0),
            startCost: new Decimal(5),
            cost: new Decimal(5),
            exponent: new Decimal(1.7),
            },
            {
            count: new Decimal(0),
            startCost: new Decimal(10),
            cost: new Decimal(10),
            exponent: new Decimal(2),
            },
            {
            count: new Decimal(0),
            startCost: new Decimal(25),
            cost: new Decimal(25),
            exponent: new Decimal(2.5),
            },
            {
            autobuyer1: false,
            autobuyer2: false,
            autobuyer3: false,
            autobuyer4: false,
            autobuyer5: false,
            autobuyer6: false,
            }
        ];
        themingArray=[
            new Decimal(0),//themes(0)
            new Decimal(0),//theme points
            new Decimal(1),//exponent applied to themes to generate theme points
            {//buyable 1 stuff(1)
                count: new Decimal(0),
                startCost: new Decimal(30),
                cost: new Decimal(30),
                exponent: new Decimal(1.05)},
                //buyable 2 stuff(2)
            {
                count: new Decimal(0),
                startCost: new Decimal(250),
                cost: new Decimal(250),
                exponent: new Decimal(1.1)},
                //buyable 3 stuff(3)
            {
                count: new Decimal(0),
                startCost: new Decimal(1000),
                cost: new Decimal(1000),
                exponent: new Decimal(1.18)},
                //buyable 4 stuff(4)
            {
                count: new Decimal(0),
                startCost: new Decimal(10000),
                cost: new Decimal(10000),
                exponent: new Decimal(1.26)},
                //buyable 5 stuff(1)
            {
                count: new Decimal(0),
                startCost: new Decimal(100000),
                cost: new Decimal(100000),
                exponent: new Decimal(1.3)},
                //buyable 6 stuff(1)
            {
                count: new Decimal(0),
                startCost: new Decimal(1000000),
                cost: new Decimal(1000000),
                exponent: new Decimal(1.4)},
                //final upgrade
            false
            ]
}
function fixLength(){
    const myThing=new Decimal(lengthArray[1].count).times(new Decimal(1)).plus(new Decimal(lengthArray[2].count).times(new Decimal(2)).plus(new Decimal(lengthArray[3].count).times(new Decimal(5)).plus(new Decimal(lengthArray[4].count).times(new Decimal(10)).plus(new Decimal(lengthArray[5].count).times(new Decimal(20)).plus(new Decimal(lengthArray[6].count).times(new Decimal(20)))))));
    lengthArray[0]=myThing}
function loadGame() {
    const theTester=JSON.parse(localStorage.getItem("everything"));
    if (theTester) {
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
                else{
                    return item;
                }
            }
        );
        hillsArray=fullData.hillsArray.map(value => typeof value === "string" ? new Decimal(value) : value);
        inversionArray=fullData.inversionArray.map(item => {
            if(typeof item === "string"){
                return new Decimal(item)
            }
            else if (typeof item === "object"){
                if(typeof item.count==="string"){
                    return{
                        ...item,
                        count: new Decimal(item.count),
                        startCost: new Decimal(item.startCost),
                        cost: new Decimal(item.cost),
                        exponent: new Decimal(item.exponent),
                    }
                }
                else{
                    return{
                        ...item,
                        autobuyer1: item.autobuyer1,
                        autobuyer2: item.autobuyer2,
                        autobuyer3: item.autobuyer3,
                        autobuyer4: item.autobuyer4,
                        autobuyer5: item.autobuyer5,
                        autobuyer6: item.autobuyer6,
                    }
                }
            }
            else{
                return item;
            }
        }
        );
        themingArray=fullData.themingArray.map(item => {
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
                }
            
                }
                else{
                    return item;
                }
            }
        );
        // Update the UI with the saved data
        updateRiders();
    } else {
        // Initialize the game data if no saved game exists
        deleteSave();

        };
}