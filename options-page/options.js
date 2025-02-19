function exportGame(){
    $("#goodBox").val(localStorage.getItem("everything"))
}
loadGame(false);
updateRiders();
hideStuff();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
}, 100);