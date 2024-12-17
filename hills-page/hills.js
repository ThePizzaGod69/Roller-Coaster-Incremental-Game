let hillUpgradeButton1 = $("#hill1");
let hillUpgradeButton2 = $("#hill2");
let hillUpgradeButton3 = $("#hill3");
let hillUpgradeButton4 = $("#hill4");
let hillUpgradeButton5 = $("#hill5");
let hillUpgradeButton6 = $("#hill6");

let hillUpgrade1 = {
    text:"Multiply riders by 5<br>Cost: 3 hills",
    condition:false,
    cost:new Decimal(3)
}
let hillUpgrade2 = {
    text:"Keep all the first length buyables on reset<br>Cost: 3 hills",
    condition:false,
    cost:new Decimal(3)
}
let hillUpgrade3 = {
    text:"Keep all the second length buyables on reset<br>Cost: 4 hills",
    condition:false,
    cost:new Decimal(4)
}
let hillUpgrade4 = {
    text:"Keep all the third length buyables on reset<br>Cost: 6 hills",
    condition:false,
    cost:new Decimal(6)
}
let hillUpgrade5 = {
    text:"Keep all the fourth length buyables on reset<br>Cost: 10 hills",
    condition:false,
    cost:new Decimal(10)
}
let hillUpgrade6 = {
    text:"Unlock inversions and<br>never lose hill unlock<br>Cost: 25 hills",
    condition:false,
    cost:new Decimal(25)
}
function hillsReset(){
    if(gameData.lengthUpgrade==true){
        if(gameData.length>=gameData.hillCost){
            gameData.hills=gameData.hills.plus(new Decimal(1))
            gameData.length=new Decimal(0)
            gameData.riders=new Decimal(0)
            //Check for upgrades, and keep buyables if so
            if(gameData.hillsUpgrade2==false){gameData.lengthBuyable1=new Decimal(0)}
            if(gameData.hillsUpgrade3==false){gameData.lengthBuyable2=new Decimal(0)}
            if(gameData.hillsUpgrade4==false){gameData.lengthBuyable3=new Decimal(0)}
            if(gameData.hillsUpgrade5==false){gameData.lengthBuyable4=new Decimal(0)}
            saveGame();
        }
    }
}
function buyHillUpgrade1(){
    if(gameData.hills.gt(new Decimal(3))==true){
        if(hillUpgrade1.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(3));
            hillUpgrade1.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton1.text(hillUpgrade1.text+"<br>"+"bought")
}
function buyHillUpgrade2(){
    if(gameData.hills.gt(new Decimal(3))==true){
        if(hillUpgrade2.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(3));
            hillUpgrade2.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton2.text(hillUpgrade2.text+"<br>"+"bought")
}
function buyHillUpgrade3(){
    if(gameData.hills.gt(new Decimal(4))==true){
        if(hillUpgrade3.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(4));
            hillUpgrade3.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton3.text(hillUpgrade3.text+"<br>"+"bought")
}
function buyHillUpgrade4(){
    if(gameData.hills.gt(new Decimal(6))==true){
        if(hillUpgrade4.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(6));
            hillUpgrade4.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton4.text(hillUpgrade4.text+"<br>"+"bought")
}
function buyHillUpgrade5(){
    if(gameData.hills.gt(new Decimal(10))==true){
        if(hillUpgrade5.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(10));
            hillUpgrade5.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton5.text(hillUpgrade5.text+"<br>"+"bought")
}
function buyHillUpgrade6(){
    if(gameData.hills.gt(new Decimal(25))==true){
        if(hillUpgrade6.condition==false){
            gameData.hills=gameData.hills.sub(new Decimal(25));
            hillUpgrade6.condition=true;
            saveGame();
        }
    }
    hillUpgradeButton6.text(hillUpgrade6.text+"<br>"+"bought")
}
function updateHills(){
    gameData.hillsCost=simplify(gameData.baseCost*Math.pow(1.2,gameData.hills),3);
    hillResetButton.html();
}
window.setInterval(function () {
    incrementRiders();
    updateRiders();
    
    saveGame();
}, 1000);
