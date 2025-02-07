function initializeHillUpgrades(){
    if(hillsArray(5)===true){
        $("#hill1").html(text2);
    }
}
//handles the buying of hill upgrades
function buyHillUpgrade(which, price, text1, text2, thing){
    if(hillsArray[which+4]===false){
        if(hillsArray[0].gte(new Decimal(price))){
            //takes your precious hills for an upgrade
            hillsArray[0] = hillsArray[0].minus(new Decimal(price))
            hillsArray[which+4]=true;
            giveEffect(which);
            $("#"+thing).html(text2);
        }
        else{$("#"+thing).html(text1);}
    }
    else{$("#"+thing).html(text2);}
}
//gives the actual reward for the upgrades
function giveEffect(newUpgrade){
    if(newUpgrade===1){
        riderArray[3] = riderArray[3].times(new Decimal(5));
    }
    else if(newUpgrade===6){
        console.log('need to add this')
    }
    else{
        riderArray[3] = riderArray[3].times(new Decimal(2));
    }
    saveGame();
}
//updates the hill total
function updateHills(){
    hillsArray[2]=hillsArray[1].times(hillsArray[4].pow(hillsArray[0]));
    $("#hillResetButton").html("Reset Previous progress for a hill"+"\n"+"Next at: "+hillsArray[2].toString()+" Meters of Length");
}
//updates the button used to buy hills
function hillsDisplay(){
    $("#hillText").text("Your Coaster has "+hillsArray[0].toString()+" Hills")
}
//handles the usage of the hills reset button
function hillsReset(){
    if (lengthArray[0].gte(hillsArray[2]) && lengthArray[7]===true){
        hillsArray[0]=hillsArray[0].plus(new Decimal(1));
        if(hillsArray[6]===false){
            lengthArray[1].count=0;
        }
        if(hillsArray[7]===false){
            lengthArray[2].count=0;
        }
        if(hillsArray[8]===false){
            lengthArray[3].count=0;
            lengthArray[4].count=0;
        }
        if(hillsArray[9]===false){
            lengthArray[5].count=0;
            lengthArray[6].count=0;
        }
        if(hillsArray[10]===false){
            lengthArray[7]=false
        }
        fixLength();
        riderArray[0] = new Decimal(0);
        riderArray[1] = new Decimal(0);
    }
    saveGame()
}
loadGame();
updateRiders();
hillsDisplay();
updateHills();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
    hillsDisplay();
    updateHills();
}, 100);
