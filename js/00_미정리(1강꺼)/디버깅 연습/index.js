var test = 1;
var aa;
function aOver(){
    debugger;
    alert("오버하지마");
    test ++;
}




window.onload = function () {
    test = 2;
    test = 3;
    test = 4;
    test = 5;
    
    // debugger;   // 디버거 설치
    /*
    f5 : 계속
    f10 : 한칸씩 실행
    f11 : 단계 정보
    shift + f11 : 단계 출력
    ctrl + shift + f5 : 다시 시작
    shift + f5 : 중지
    
    */
    
    test = 6;
    test = 7;
    test = 8;
    aa = document.getElementById("aa");
    aa.addEventListener("mouseover", aOver, false);
}


