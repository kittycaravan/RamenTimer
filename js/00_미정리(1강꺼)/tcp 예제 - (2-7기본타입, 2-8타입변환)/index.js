document.write(); br();

function br(){
    document.write("<br>");
}
function hr(str){
    // document.write("<hr>"+"<p style='color: pink; font-style:bold; background-color:green;'>"+str+"</p><hr>");
    document.write("<p style='color: pink; font-style:bold; background-color:green;'>"+str+"</p>");
}

window.onload = function () {
    /**
     * 기본타입
     */
    hr("기본타입");
    var num = 10;
    var myName = "홍길동";
    var str;
    document.write(num, myName, str); br();br();   // 한칸 내리는 함수 일부러 만듬
    
    /**
     * typeof 연산자 <무슨 형의 변수인지 알아내는 녀석>
     */    
    hr("typeof 연산자");
    document.write(typeof 10); br();    
    document.write(typeof "고양이"); br();
    document.write(typeof true); br();
    document.write(typeof undefined); br();
    document.write(typeof null); br();br();

    /**
     * 타입 변환
     */
    hr("타입 변환");
    var num = 20;          
    document.write(num); br();
    num = "이십";
    document.write(num); br();
    var num = 100;
    document.write(num); br();br();

    /**
     * 묵시적 타입 변환
     */
    hr("묵시적 타입 변환");
    document.write(10 + "고양이"); br();

    /**
     * 명시적 타입 변환
     */    
    hr("명시적 타입 변환");
    document.write(Number("10")); br(); //숫자10이됨

    /**
     * 숫자를 문자열로 변환
     */ 
    hr("* 숫자를 문자열로 변환");
    var num2 = 100;
    document.write(num2.toString()); br(); //문자100이됨
 
    /**
     * 날짜를 문자열이나 숫자로 변환
     */    
    hr("* 날짜를 문자열이나 숫자로 변환");
    document.write(Date().toString()); br();
    var date = new Date();
    document.write(date.getFullYear()); br();
    document.write(date.getTime()); br(); // 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.

    /**
     * 문자열을 숫자로 변환
     */   
    hr("* 문자열을 숫자로 변환");
    var s = "12345";
    document.write(parseInt(s)); br();
    var f = "12.345";
    document.write(parseFloat(f)); br();

    /**
     * 불리언 값을 숫자로 변환
     */       
    hr("* 불리언 값을 숫자로 변환");
    var n2 = Number(true);
    document.write(n2); br();
    var n3 = Number(false);
    document.write(n3); br();
}




