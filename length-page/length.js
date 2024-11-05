
    let lengthButton1 = $("#length1");
    lengthButton1.text("ofniajdsnvoiaj");
    let lengthButton2 = $("#length2");
    let lengthButton3 = $("#length3");
    let lengthButton4 = $("#length4");
    lengthBuyable1={
        text1:"Press this to get 1 more meter of length"<br>"Requires: ",
        text2:"riders"<br>"Bought: ",
        count:0,
        startCost:1,
        cost:1,
        exponent:1.1,
        button:$("#length1")
    }
    lengthBuyable2={
        text1:"Press this to get 2 more meters of length"<br>"Requires: ",
        text2:"riders"<br>"Bought: ",
        count:0,
        startCost:4,
        cost:4,
        exponent:1.2,
        button:$("#length2")
    }
    lengthBuyable3={
        text1:"Press this to get 5 more meters of length"<br>"Requires: ",
        text2:"riders"<br>"Bought: ",
        count:0,
        startCost:10,
        cost:10,
        exponent:1.3,
        button:$("#length3")
    }
    lengthBuyable4={
        text1:"Press this to get 10 more meters of length"<br>"Requires: ",
        text2:"riders"<br>"Bought: ",
        count:0,
        startCost:20,
        cost:20,
        exponent:1.4,
        button:$("#length4")
    }
    function buyLengthBuyable1(){
        if(gameData.riders>=lengthBuyable1.cost){
            lengthBuyable1.count+=1;
            let newCost = lengthBuyable1.startCost*lengthBuyable1.exponent^lengthBuyable1.count;
            lengthBuyable1.cost=simplify(newCost)
        }
    }
    function updateLengthBuyables(){
        if(gameData.lengthBuyable1==!lengthBuyable1.count){
            lengthButton1.text(lengthBuyable1.text1+lengthBuyable1.cost+text2+lengthBuyable1.count);
            gameData.lengthBuyable1=lengthBuyable1.count;
        }
        if(gameData.lengthBuyable2==!lengthBuyable2.count){
            lengthButton2.text(lengthBuyable1.text1+lengthBuyable2.cost+text2+lengthBuyable2.count);
            gameData.lengthBuyable1=lengthBuyable1.count;
        }
        if(gameData.lengthBuyable3==!lengthBuyable3.count){
            lengthButton3.text(lengthBuyable3.text1+lengthBuyable3.cost+text2+lengthBuyable3.count);
            gameData.lengthBuyable3=lengthBuyable3.count;
        }
        if(gameData.lengthBuyable4==!lengthBuyable4.count){
            lengthButton4.text(lengthBuyable4.text1+lengthBuyable4.cost+text2+lengthBuyable4.count);
            gameData.lengthBuyable4=lengthBuyable4.count;
        }
    }
    function simplify(number,magnitude){
        return Math.round(number*10^magnitude)/10^magnitude
    }
    function incrementRiders(){
        gameData.riders=simplify(gameData.riders+gameData.riderGain,3);
    }
    
    function loadGame(){
    let saveLoader = JSON.parse(localStorage.getItem("save"))
    }
    function saveGame() {
    localStorage.setItem("save",JSON.stringify(gameData));
    }
    window.setInterval(function(){
        incrementRiders();
        saveGame();
        updateLengthBuyables();
        saveGame();
        }, 1000)