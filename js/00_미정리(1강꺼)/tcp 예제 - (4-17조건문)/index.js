function br() {
    document.write("<br>");
}
function hr(str) {
    // document.write("<hr>"+"<p style='color: pink; font-style:bold; background-color:green;'>"+str+"</p><hr>");
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>" + str + "</p>");
}

window.onload = function () {
    /**
     * 조건문 - if
     */
    hr("* 조건문 - if");
    document.write("2 가 1 보다 크면 ( <-- 당연히 맞고 이런걸 참이라고 부르고 boolean으로는 true 값을 가짐) : alert 창이 뜰 것임 "); br(); br();
    if (2 > 1) {
        // alert("참");
        document.write("<p>참</p>")
    }
    br();br();

    /**
     * 조건문 - if 랑 else 같이 쓰는거
     */
    hr("* 조건문 - if 랑 else 같이 쓰는거");
    document.write("2 와 1 이 같으면 ( <-- 당연히 안같으니까 이런걸 거짓이라고 부르고 boolean으로는 false 값을 가짐) : alert 창이 뜰 것임 "); br(); br();
    if (2 == 1) {        // 2 = 1 이 아니고 2와 1이 같냐는 식을 쓸때 쓰는 기호는 == 입니다. = 이거 두개.
        // alert("참");
        document.write("<p>참</p>")
    } else {   // 위 if 문 내에서 건 조건이 맞으면 위의 괄호 안이 실행되고, 아니면 여기 else 아래 { } 안의 내용일 실행됨
        // alert("거짓");
        document.write("<p>거짓</p>")
    }

    /**
     * 조건문 - if 랑 else if 같이 쓰는거
     */
    hr("* 조건문 - if 랑 else if 같이 쓰는거");
    document.write("2 와 1 이 같으면 ( <-- 당연히 안같으니까 이런걸 거짓이라고 부르고 boolean으로는 false 값을 가짐) : alert 창이 뜰 것임 "); br(); br();
    var n = 3; // 이걸 값을 바꿔보면서 하세요.
    //  var n = 2; // 이걸 값을 바꿔보면서 하세요.
    //  var n = 1; // 이걸 값을 바꿔보면서 하세요.
    //  var n = 0; // 이걸 값을 바꿔보면서 하세요.
    if (n == 3) {    // 맨 처음 여기 조건이 맞으면 아래 else if 랑 else 쪽 다 빠져나가는 겁니다. 이후 그 아래 다른 명령들을 수행하게됨()
        // alert("a");
        document.write("<p>a</p>")
    } else if (n == 2) {    // 다른 조건을 추가로 거는겁니다. 위에 부터 해서 ok가 안되면 여길 오는겁니다.
        // alert("b");
        document.write("<p>b</p>")
    } else if (n == 1) {    // 마찬가지고
        // alert("c");
        document.write("<p>c</p>")
    } else {   // 근데 위에 다 만족 못하는 까다로운 고객이면 그냥 이거 실행 됩니다.
        // alert("x");
        document.write("<p>x</p>")
    }

    /**
     * 삼항 연산자 = 패스하십시오..
     */    
}