function exportGame(){
    $("#goodBox").val(localStorage.getItem("everything"))
}
loadGame(false);
updateRiders();
window.setInterval(function(){
    incrementRiders();
    updateRiders();
}, 100);