function dw(s){    
    document.write(s);
}
function br(){
    document.write("<br>");
}

/* 문제 30 */
function return10000(){
    return 10000;
}
function q30(){
    dw("== 문제 30 ==");br();
    var n = return10000();
    // document.write(run());
    document.write(n); br();
}
q30();br();


/* 문제 31 */
function return1000add2000(){
    return 1000+2000;
}
function q31(){
    dw("== 문제 31 ==");br();
    var n31 = return1000add2000();
    document.write(n31); br();
}
q31();br();

/* 문제 32 */
function methodFor32(){
    var n1 = 1000;
    var n2 = 2000;
    var sum = n1 + n2;
    return sum;
}
function q32(){
    dw("== 문제 32 ==");br();
    var n32 = methodFor32();
    document.write(n32); br();
}
q32();br();

/* 문제 33 */
function methodFor33(sss){    
    document.write(sss);    //함수 내에서 전달받은 문자열(인사말 텍스트)을 출력
    // return sss;  //리턴은 안함
}
function q33(){
    dw("== 문제 33 ==");br();
    methodFor33("run33 - 안녕하세요!"); br(); // 함수 호출 시에 인사말을 전달.
}
q33();br();

/* 문제 34 */
function methodFor34(number){    
    // document.write(number);
    dw(number);
}
function q34(){
    dw("== 문제 34 ==");br();
    // run33(0); br();  // 함수 호출 시에 인사말을 전달.
    methodFor34(1000000); br();  // 함수 호출 시에 인사말을 전달.
}
q34();br();


/* 문제 35 */
function methodFor35(n1, n2, n3){
    var sum = n1 * n2 * n3; // 처리. 끝.
    //출력
    return sum;
}
function q35(){
    dw("== 문제 35 ==");br();
    var r35 = methodFor35(1,-1,10000);  // 입력. 3개 수
    document.write("r35: " + r35); br();
}
q35();br();


/* 문제 36 */

// + * /
var a = 6;
var b = 3;

function run36add(a, b){
    //case 1
    var sum = a + b;    // 처리 - 덧셈처리
    return sum;    

    //case 2
    // return a + b;   // 처리 - 덧셈처리
}
function run36sub(a, b){
    //case 1
    var sum = a - b;
    return sum;

    //case 2
    // return a - b;
}
function run36mul(a, b){
    //case 1
    var sum = a * b;
    return sum;

    //case 2
    // return a * b;
}
function run36div(a, b){
    //case 1
    var sum = a / b;
    return sum;

    //case 2
    // return a / b;
}
function q36(){
    dw("== 문제 36 ==");br();
    document.write("a,b 더하기: " + run36add(a, b) ); br();
    // document.write("a,b 더하기: " + run36add(6,3) );
    // document.write("a,b 더하기: " + 9 );
    document.write("a,b 빼기: " + run36sub(a,b) ); br();
    document.write("a,b 곱하기: " + run36mul(a,b) ); br();
    document.write("a,b 나누기: " + run36div(a,b) ); br();
}
q36();br();

/* 문제 37 */
function run37add(a, b){
    // return a + b;

    var sum = a + b;
    return sum;
}
function run37sub(a, b){
    // return a - b;

    var sum = a - b;
    return sum;    
}

/* 문제 38 */
function run38(){
    dw("== 문제 38 ==");br();
    var sum = run37add(100, 200);
    document.write(sum);
    // document.write(run37add(100, 200));
}
run38();
