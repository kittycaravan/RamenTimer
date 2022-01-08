// 문제 12

var n = prompt("몇에 거시겠습니까? (1~6)");

document.write("당신은 " + n + "에 걸었습니다. <br>");
document.write("주사위를 굴렸습니다.<br>");

var randomDice6 = Math.floor(Math.random() * 6 + 1);

document.write("<img src='dice6_" + randomDice6 + ".jpg'>");

document.write("<br>");
document.write("<br>");

if( n == randomDice6 ) {
    document.write(" *** YOU WIN *** ")
} else {
    document.write(" *** YOU LOSE *** ")
}