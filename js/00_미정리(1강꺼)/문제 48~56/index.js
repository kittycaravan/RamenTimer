/* 문제 48 */
// 1~ 20 까지 숫자 20개를  1 2 3 4 5 6 .... 배열에 넣으세요
var a = [
    1,  // a[0]
    2,  // a[1]
    3,  // a[2]
    4,  // a[3]
    5,  // a[4]
    6,  // a[5]
    7,  // a[6]
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
];

var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

/* 문제 49 */
dw("== 문제 49 =="); br();
var select7th = a[6];
dw(select7th); br();br();

/* 문제 50 */
dw("== 문제 50 =="); br();
dw("배열 첫번째 수 : " + a[0] + " 배열 마지막 수 : " + a[19] ); br();br();

/* 문제 51 */
dw("== 문제 51 =="); br();
var q51a = a[0];
var q51b = a[19];
var q51sum = q51a + q51b;
dw("배열 첫번째 수  + 배열 마지막 수 = " + q51sum); br();   
dw("(한줄코드표현)배열 첫번째 수  + 배열 마지막 수 = " + (a[0]+a[19]) ); br();br();

/* 문제 52 */
dw("== 문제 52 =="); br();
dw("배열길이는 = " + a.length); br();br();

/* 문제 53 */
dw("== 문제 53 =="); br();
for(var i = 0 ; i < 20 ; i = i + 1 ) {
    // a[0] ~ a[19]
    // i = 0 ~ i = 19
    dw(a[i]);
}
br();
br();

/* 문제 54 */
dw("== 문제 54 =="); br();
for(var i = 0 ; i < 20 ; i = i + 1 ) {
    // a[0] ~ a[19]
    // i = 0 ~ i = 19
    dw(a[i]);
    br();
}


/* 문제 55 */
var c = [1,2,3,4,5,6,7,8,9,10];
// var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
br(); dw("== 문제 55 =="); br();
for(var i = 0 ; i < c.length ; i = i + 1 ) {
    dw(c[i]);
    br();
}

/* 문제 56 */
var animals = [
    "개",
    "고양이",
    "토끼",
    "여우",
    "원숭이",
    "사자",
    "코끼리",
    "너굴맨",
    "공룡",
    "드래곤"    
];
br(); dw("== 문제 56 =="); br();

var q56FindIndex = 0;
for(var i = 0 ; i < animals.length ; i = i + 1 ) {
    dw(animals[i]);
    br();
    if(animals[i] == "너굴맨" ){
        q56FindIndex = i + 1;
        // dw("찾았다. 몇번째냐면 = " + (i + 1) + "번째");
    }
}
br();
dw("찾았다. 몇번째냐면 = " + q56FindIndex + "번째");
br();
