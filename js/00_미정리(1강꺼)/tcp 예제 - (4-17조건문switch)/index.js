function br() {
    document.write("<br>");
}
function hr(str) {
    // document.write("<hr>"+"<p style='color: pink; font-style:bold; background-color:green;'>"+str+"</p><hr>");
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>" + str + "</p>");
}



window.onload = function () {
    // document.getElementById("b").innerHTML="야아오옹아!";

    /**
    * 조건문 - switch
    */
    hr("* 조건문 - switch");
    /* 아래 값 변경하면서 테스트 */
    var n = 1;
    // var n = 2;
    // var n = 3;
    // var n = 1000;

    switch(n){
        case 1:
            document.write("<p>스위치 케이스 1을 탔음</p>")
            break;
        case 2:
            document.write("<p>스위치 케이스 2을 탔음</p>")
            break;
        case 3:
            document.write("<p>스위치 케이스 3을 탔음</p>")
            break;
        default:
            document.write("<p>스위치 케이스 다 못타면 여기임</p>")                            
    }


    /**
    * 조건문 - switch 문자
    */
     hr("* 조건문 - switch 문자");
     /* 아래 값 변경하면서 테스트 */
     var s = "aa";
    //  var s = "bb";
    //  var s = "cc";
    //  var s = "xx";

 
     switch(s){
         case "aa":
             document.write("<p>스위치 케이스 'aa' 을 탔음</p>")
             break;
         case "bb":
             document.write("<p>스위치 케이스 'bb' 을 탔음</p>")
             break;
         case "cc":
             document.write("<p>스위치 케이스 'cc' 을 탔음</p>")
             break;
         default:
             document.write("<p>스위치 케이스 다 못타면 여기임</p>")                            
     }
}
