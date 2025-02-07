loadGame();
updateRiders();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
}, 100);