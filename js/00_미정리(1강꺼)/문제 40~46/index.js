// function run50(a){
//     var a1 = a[0];
//     var a2 = a[1];
//     var a3 = a[2];
//     var a4 = a[3];
//     var sum = a1 + a2 + a3 + a4;
//     return sum;
// }
// var run50array1 = [1,2,0,3];
// var run50array2 = [5,0,6,0];
// dw("50: " + (run50(run50array1) + run50(run50array2)));

//함수 = 작은 프로그램이라고 생각하세요.
//프로그램
//  1.입력
//  2.처리
//  3.출력

//ex. 게임
//   1.입력 - 키보드, 마우스 입력
//   2.처리 - 케릭터가 움직인다든지, 맞는다든지, 맵이 이동한다든지
//   3.출력 -  // 화면에 뿌려주잖아요 = 출력

//1. 숫자 둘을 입력받기 = 입력
//2. 둘을 더하기        = 처리
//3. 그 결과 리턴하기   = 출력
/* 문제 40 */
function run40add(n1, n2){  // 입력
    var sum = n1 + n2;  // 처리
    //출력    
    // return "고양이";
    // return 100;
    return sum;
}

/* 문제 41 */
// 문40함수가지고 1 + 2 처리
// 문40함수를 수정하시면 안되요
function run41(){
    dw("== 문제 41 ==");br();
    var sum = run40add(1,2);
    dw(sum);
    br();
}
run41();br();

/* 문제 42 */
// 문40 함수로 1 + 2 를 처리, 화면출력
// 문40 함수로 3 + 4 를 처리, 화면출력
function run42(){
    dw("== 문제 42 ==");br();
    var sum1 = run40add(1,2);
    dw("42번-1: "+ sum1);
    br();
    var sum2 = run40add(3,4);
    dw("42번-2: "+ sum2);
}
run42();br();br();

/* 문제 43 */
function run43(){
    dw("== 문제 43 ==");br();
    // var sum1 = run40add(1, 2);
    // var sum2 = run40add(3, sum1);
    // dw("43번: " + sum2);

    dw( run40add(3, run40add(1,2) ) );
}
run43();br();br();

/* 문제 44 */
// 문40 함수로 1 + 2 를 처리 한 결과 값과		
// 문40 함수로 3 + 4 를 처리 한 결과 값		
// 이 둘을 문40 함수로 더하기 처리		(1 + 2 ) + (3 + 4 )
// 해서 출력하기		
function run44(){
    dw("== 문제 44 ==");br();
    var sum1 = run40add(1,2);
    var sum2 = run40add(3,4);
    var sum3 = run40add(sum1, sum2);
    dw(sum3);
}
run44();br();br();

/* 문제 45 */
// 숫자 넷을 입력 받아서 더해서 결과를 리턴하는 함수 만들고	
// 위 함수와 문40함수 써서 아래 식 처리	
// (1 + 2 + 3 + 4) + (  5 + 6 + 7 + 8 )
function add4(n1, n2, n3, n4){
    // var sum = n1 + n2 + n3 + n4;
    // return sum;
    return n1 + n2 + n3 + n4;
}
function run45(){
    dw("== 문제 45 ==");br();
    var sum1 = add4(1,2,3,4);
    var sum2 = add4(5,6,7,8);
    var sum3 = run40add( sum1, sum2);
    dw(sum3);
    br();
}
run45();br();br();

/* 문제 46 */
function add4array(x){
    // a[0]    // a + [ index ] 
    // a[0]    // a + [ 몇번째인지 가르키는 숫자. <주의> 근데 0부터시작함. 0 ~ 1 ,2 ,3 4 .... ] 

    var a1 = x[0];
    var a2 = x[1];
    var a3 = x[2];
    var a4 = x[3];

    var sum = a1 + a2 + a3 + a4;
    return sum;
}
function run46(){
    dw("== 문제 46 ==");br();
    
    //배열 = 변수를 모아 놓은 애     
    var x = [ 7 , 77 , 777, 7777 ]; //배열 선언

    // dw(x[0]);   // 첫번째꺼 = 7 을 찍기
    // dw(x[1]);   // 두번째꺼 = 77 을 찍기

    var y = [ 5 , 6 , 7 , 8 ]; //배열 선언
    
    // var sum1 = add4(1,2,3,4);

    var sum1 = add4array(x);
    var sum2 = add4array(y);

    var sum3 = run40add(sum1, sum2);

    // 출력작업
    dw(sum3);
}
run46();
