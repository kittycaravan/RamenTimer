// 문제 11

var n = prompt("몇에 거시겠습니까? (1~6)");

document.write("당신은 " + n + "에 걸었습니다. <br>");
document.write("주사위를 굴렸습니다.<br>");

var randomDice6 = Math.floor(Math.random() * 6 + 1);

// document.write(randomDice6);
switch (randomDice6) {
    case 1:
        document.write("<img src='dice6_1.jpg'>");
        break;
    case 2:
        document.write("<img src='dice6_2.jpg'>");
        break;
    case 3:
        document.write("<img src='dice6_3.jpg'>");
        break;
    case 4:
        document.write("<img src='dice6_4.jpg'>");
        break;
    case 5:
        document.write("<img src='dice6_5.jpg'>");
        break;
    case 6:
        document.write("<img src='dice6_6.jpg'>");
        break;
}


document.write("<br>");
document.write("<br>");

if( n == randomDice6 ) {
    document.write(" *** YOU WIN *** ")
} else {
    document.write(" *** YOU LOSE *** ")
}