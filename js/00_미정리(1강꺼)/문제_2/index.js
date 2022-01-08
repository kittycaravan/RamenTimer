/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);


/* 표현 2 */
// var random;
// random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");


/* 표현 3 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");

/* 표현 4 */
// document.write("주사위를 굴려 ( " + (Math.floor(Math.random() * 6) + 1) + " ) 이 나왔습니다.");


/* 표현 5 */


function dice(n){
    var r = Math.floor(Math.random() * n) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    return r;
}

document.write("6면체 주사위를 굴려 ( " + dice(6) + " ) 이 나왔습니다.<br>");
document.write("4면체 주사위를 굴려 ( " + dice(4) + " ) 이 나왔습니다.<br>");
document.write("10면체 주사위를 굴려 ( " + dice(10) + " ) 이 나왔습니다.<br>");
document.write("100면체 주사위를 굴려 ( " + dice(100) + " ) 이 나왔습니다.<br>");
