var span;
var imgDice_1;

function spanMouseOver(){
    span.style.color = "red";
    imgDice_1.src = "dice6_6.jpg";
}
function spanMouseOut(){
    span.style.color = "black";
    imgDice_1.src = "dice6_1.jpg";
}

window.onload = function () {
    span = document.getElementById("aa");
    imgDice_1 = document.getElementById("img_dice_1");
    span.addEventListener("mouseover", spanMouseOver, false);
    span.addEventListener("mouseout", spanMouseOut, false);        
}

