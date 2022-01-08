/**
 * 비교 연산자
 */
//  hr("* 비교 연산자");
//  document.write("3 % 2 = " + num); br();br();



// document.write(); br();

function br() {
    document.write("<br>");
}
function hr(str) {
    // document.write("<hr>"+"<p style='color: pink; font-style:bold; background-color:green;'>"+str+"</p><hr>");
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>" + str + "</p>");
}

window.onload = function () {
    /**
     * 산술 연산자 - %
     */
    hr("산술 연산자 - %");
    var num = 3 % 2;
    document.write("3 % 2 = " + num); br(); br();   // 한칸 내리는 함수 일부러 만듬

    /**
     * 산술 연산자 - 오른쪽에서 왼쪽으로 결합
     */
    hr("* 산술 연산자 - 오른쪽에서 왼쪽으로 결합");
    var c = 3;
    var b;
    var a;
    a = b = c;
    document.write("a = b = c 에서 c가 3일 때 a 값은 : " + a + " b 값은 :" + b); br(); br();

    /**
     * 대입 연산자 = 패스하십시오
     */
    /**
     * 증감 연산자 = 패스~
     */
    /**
     * 비교 연산자 - ==
     */
    hr("* 비교 연산자 - ==");
    var result = (1 == 2);
    document.write("1 == 2 (1과 2가 같은 값이냐?) :" + result); br(); br();

    /**
     * 비교 연산자 - !=
     */
    hr("* 비교 연산자 - !=");
    var result = (1 != 2);
    document.write("1 != 2 (1과 2가 다른 값이냐?) :" + result); br(); br();

    /**
     * 논리 연산자 - && (그리고 , And 라는 뜻임)
     * 둘다 참이여야 참임.
     * 하나라도 거짓(false) 이면 무조건 거짓임
     * 둘다 거짓이여도 마찬가지로 결과 값은 거짓임
     * 조건문 ( if문 ) 에서 주로 쓰이므로 아래 예제는 억지(?)로 낸거니까 나중에 조건문에서 보면 이해가 잘 되실 것임)
     */
    hr("* 논리 연산자 - && (그리고 , And 라는 뜻임)");
    var result = (true && true);
    document.write("true(참) && true(참) --> 참 그리고 참 이면 결과는 :" + result); br(); br();
    var result = (true && false);
    document.write("true(참) && false(거짓) --> 참 그리고 거짓 이면 결과는 :" + result); br(); br();

    /**
     * 논리 연산자 - || (우리말로 '또는' 에 해당 , 영어로 OR 라는 뜻임 ex. yes or no )
     * 아무나 하나 참이면 이 연산 후 결과가 참임.
     * 둘다 거짓이면 거짓이지만
     * 조건문 ( if문 ) 에서 주로 쓰이므로 아래 예제는 억지(?)로 낸거니까 나중에 조건문에서 보면 이해가 잘 되실 것임)
     */
     hr("* 논리 연산자 - || (우리말로 '또는' 에 해당 , 영어로 OR 라는 뜻임 ex. yes or no )");
     var result = (true && true);
     document.write("true(참) && true(참) --> 참 그리고 참 이면 결과는 :" + result); br(); br();
     var result = (true && false);
     document.write("true(참) && false(거짓) --> 참 그리고 거짓 이면 결과는 :" + result); br(); br();    

    /**
     * 논리 연산자 - ! (우리말로 '역', '반대' 에 해당 , 영어로 Not 라는 뜻임 )
     * 참에 ! 해서 !참 이면 거짓이 됨
     * 거짓에 ! 해서 !거짓 이면 참이 됨
     * 조건문 ( if문 ) 에서 주로 쓰이므로 아래 예제는 억지(?)로 낸거니까 나중에 조건문에서 보면 이해가 잘 되실 것임)
     */
     hr("* 논리 연산자 - ! (우리말로 '역', '반대' 에 해당 , 영어로 Not 라는 뜻임 )");
     var result = (!true);
     document.write("!true(참) --> 참의 반대는? :" + result); br(); br();
     var result = (!false);
     document.write("!false(거짓) --> 거짓의 반대는? :" + result); br(); br();

    /**
     * 비트 연산자 = 패스~
     */     

    /**
     * 기타 연산자 - 문자열 결합 연산자
     */      
     hr("aaa");
     var result = 1 + "개";
     document.write("1 + '개' = " + result); br(); br();
     var s1 = "개";
     var s2 = "냥이";
     var result = s1 + s2;
     document.write(" '개' + '냥이' 합치면 : " + result); br(); br();

    /**
     * 기타 연산자 - 삼항 연산자 = 패스~
     */
    /**
     * 기타 연산자 - 쉼표 연산자 = 패스~
     */    
}




