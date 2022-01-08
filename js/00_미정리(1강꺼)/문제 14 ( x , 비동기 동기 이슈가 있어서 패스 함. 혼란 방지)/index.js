// 문제 14

// setTimeout() 메소드
// setTimeout() 메소드는 명시된 시간이 지난 뒤에 지정된 함수를 호출합니다.

// 문법
// window.setTimeout(호출할함수, 지연시간);

// 이 메소드가 성공적으로 호출되면, 설정된 timeoutID를 반환합니다.

// 이 메소드는 밀리초(milliseconds) 단위로 지연 시간을 설정할 수 있습니다.


var n;


function runDice6(){
    document.write("주사위를 굴렸습니다.<br>");

    var randomDice6 = Math.floor(Math.random() * 6 + 1);
    
    // 이슈 있음. 주의.
    // document.write("<img src='dice6_" + randomDice6 + ".jpg'>"); // 아래 코드로 대체
    document.write("<img src='dice6_" + randomDice6 + ".jpg' style='width:100px;height:100px'>");
    
    document.write("<br>");
    document.write("<br>");
    
    if( n == randomDice6 ) {
        document.write(" *** YOU WIN *** ")
    } else {
        document.write(" *** YOU LOSE *** ")
    }
}


n = prompt("몇에 거시겠습니까? (1~6)");

document.write("당신은 " + n + "에 걸었습니다. <br>");

window.setTimeout(runDice6, 3000);
