let hillUpgradeButton1 = $("#hill1");
let hillUpgradeButton2 = $("#hill2");
let hillUpgradeButton3 = $("#hill3");
let hillUpgradeButton4 = $("#hill4");
let hillUpgradeButton5 = $("#hill5");
let hillUpgradeButton6 = $("#hill6");

let hillUpgrade1 = {
    text:"Multiply riders by 5<br>Cost: 3 hills",
    condition:false,
    cost:3,
}
let hillUpgrade2 = {
    text:"Keep all the first length buyables on reset<br>Cost: 3 hills",
    condition:false,
    cost:3
}
let hillUpgrade3 = {
    text:"Keep all the second length buyables on reset<br>Cost: 4 hills",
    condition:false,
    cost:4
}
let hillUpgrade4 = {
    text:"Keep all the third length buyables on reset<br>Cost: 6 hills",
    condition:false,
    cost:6
}
let hillUpgrade5 = {
    text:"Keep all the fourth length buyables on reset<br>Cost: 10 hills",
    condition:false,
    cost:10
}
let hillUpgrade6 = {
    text:"Unlock inversions and<br>never lose hill unlock<br>Cost: 25 hills",
    condition:false,
    cost:25
}
function hillsReset(){
    if(gameData.lengthUpgrade==true){
        if(gameData.length>=gameData.hillCost){
            gameData.hills+=1
            gameData.length=0
            //Check for upgrades, and keep buyables if so
            if(gameData.hillsUpgrade2==false){gameData.lengthBuyable1=0}
            if(gameData.hillsUpgrade3==false){gameData.lengthBuyable2=0}
            if(gameData.hillsUpgrade4==false){gameData.lengthBuyable3=0}
            if(gameData.hillsUpgrade5==false){gameData.lengthBuyable4=0}
            saveGame();
        }
    }
}
function buyHillUpgrade1(){
    if(gameData.hills>=3){
        if(hillUpgrade1.condition==false){
        gameData.hills-=3;
        hillUpgrade1.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton1.text(hillUpgrade1.text+"<br>"+"bought")
}
function buyHillUpgrade2(){
    if(gameData.hills>=3){
        if(hillUpgrade2.condition==false){
        gameData.hills-=3;
        hillUpgrade2.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton2.text(hillUpgrade2.text+"<br>"+"bought")
}
function buyHillUpgrade3(){
    if(gameData.hills>=4){
        if(hillUpgrade3.condition==false){
        gameData.hills-=4;
        hillUpgrade3.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton3.text(hillUpgrade3.text+"<br>"+"bought")
}
function buyHillUpgrade4(){
    if(gameData.hills>=6){
        if(hillUpgrade4.condition==false){
        gameData.hills-=6;
        hillUpgrade4.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton4.text(hillUpgrade4.text+"<br>"+"bought")
}
function buyHillUpgrade5(){
    if(gameData.hills>=10){
        if(hillUpgrade5.condition==false){
        gameData.hills-=10;
        hillUpgrade5.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton5.text(hillUpgrade5.text+"<br>"+"bought")
}
function buyHillUpgrade6(){
    if(gameData.hills>=25){
        if(hillUpgrade6.condition==false){
        gameData.hills-=25;
        hillUpgrade6.condition=true;
        saveGame();
        }
    }
    hillUpgradeButton6.text(hillUpgrade6.text+"<br>"+"bought")
}
updateHills(){
    gameData.hillsCost=simplify(gameData.baseCost*Math.Pow(1.2,gameData.hills),3)
}
window.setInterval(function () {
    incrementRiders();
    updateRiders();
    
    saveGame();
}, 1000);
