function br() {
    document.write("<br>");
}
function hr(str) {
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>" + str + "</p>");
}


window.onload = function () {
    /**
    * 반복문 - while
    * 
        while (표현식) {

            표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;

        }
    */
    hr("* 반복문 - while");
    var a = 0;
    while (a < 10) {
        document.write("<span style='color: yellow; background: black;'>★</span>");
        a = a + 1;
    }
    br(); br();

    document.write("아래는 무한(조건부) <br>");

    var b = 0;
    while (1) {
        document.write("<span style='color: yellow; background: black;'>★</span>");
        b = b + 1;
        if (b > 50) {
            break;
        }
    }
    document.write(" 끝 ");

    /**
    * 반복문 - do - while
    * do 부분이 무조건 한번 실행됨.
    * while 괄호의 조건이 참이면 { } 부분이 계속 실행됨.
    */
    hr("* 반복문 - do - while (한번만 실행되게 한거)");
    var n = 2;
    do {
        document.write("<span style='color: yellow; background: black;'>★</span>");
    } while (n > 2);

    hr("* 반복문 - do - while (여러번 실행되게 한거)");
    var m = 1;
    do {
        document.write("<span style='color: yellow; background: black;'>★</span>");
        m = m + 1;
    } while (m < 10);    
}