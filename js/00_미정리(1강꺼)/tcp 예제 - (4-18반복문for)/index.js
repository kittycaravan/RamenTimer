function br() {
    document.write("<br>");
}
function hr(str) {
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>" + str + "</p>");
}



window.onload = function () {

    /**
    * 반복문 - for
    * 
    *   for (초기식; 표현식; 증감식) {
            표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
        }
    * 
    */
    hr("* 반복문 - for");

    for (var i = 0 ; i < 10 ; i ++ ) {
        document.write ( "*" );
    }

    br(); br();

    for (var i = 0 ; i < 10 ; i ++ ) {
        document.write ( i + "<br>" );
    }

    hr("* 반복문 - for - 배열 가지고 하기");

    // var arr = [3, 4, 5];
    
    var arr = ["★", "※", "☆"];

    for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.    
        document.write(arr[i] + " ");    
    }




    // 아래는 패스..
    // 반복문 - for - of
    // 반복문 - for - in


}
