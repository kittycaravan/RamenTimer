//문제23. 

var dice_1; // 첫번째 이미지 태그 가져온거. 즉 첫번째 이미지 태그임.
var dice_2; // 두번째 이미지 태그 가져온거. 즉 첫번째 이미지 태그임.
var dice_3; // 세번째 이미지 태그 가져온거. 즉 첫번째 이미지 태그임.

function dice1over(){
    dice_1.src = "dice6_4.jpg";
}
function dice2over(){
    dice_2.src = "dice6_5.jpg";
}
function dice3over(){
    dice_3.src = "dice6_6.jpg";
}
function dice1out(){
    dice_1.src = "dice6_1.jpg";
}
function dice2out(){
    dice_2.src = "dice6_2.jpg";
}
function dice3out(){
    dice_3.src = "dice6_3.jpg";
}

window.onload = function () {
    dice_1 = document.getElementById("dice_1"); // 첫번째 이미지 태그 가져오기(id로)
    dice_2 = document.getElementById("dice_2"); // 두번째 이미지 태그 가져오기(id로)
    dice_3 = document.getElementById("dice_3"); // 세번째 이미지 태그 가져오기(id로)
    dice_1.addEventListener("mouseover", dice1over, false);
    dice_2.addEventListener("mouseover", dice2over, false);
    dice_3.addEventListener("mouseover", dice3over, false);
    dice_1.addEventListener("mouseout", dice1out, false);
    dice_2.addEventListener("mouseout", dice2out, false);
    dice_3.addEventListener("mouseout", dice3out, false);
}