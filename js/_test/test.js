/* 
    라면 타이머 만들기
*/
    
var interval;
/* 태그 요소들 */
var selectMinute;    //select_minute
var selectSecond;    //select_second
var btnTimerStart; //btn_timer_start
var btnTimerStop; //btn_timer_stop
var spanM; //span_m
var spanS; //span_s

/* 입력된 분, 초를 저장 */
var minute=0;
var second=0;
/* 입력된 분, 초로 계산하여 초로 환산한 값 */
var totalSecond=0;

window.onload = function(){
    selectMinute = document.getElementById("select_minute");
    selectSecond = document.getElementById("select_second");
    btnTimerStart = document.getElementById("btn_timer_start");
    btnTimerStop = document.getElementById("btn_timer_stop");
    spanM = document.getElementById("span_m");
    spanS = document.getElementById("span_s");
}

/* 타이머 시작 버튼을 누르면 이 함수 실행 */
function clickBtnTimerStart(){
    // 시간계산
    minute = parseInt(selectMinute.value);
    second = parseInt(selectSecond.value);
    totalSecond = minute * 60 + second;
    printTime();

    interval = setInterval(secondMinus, 1000);  // 타이머 시작
}
/* 1초 마다 실행되는 함수 */
function secondMinus(){
    totalSecond--;
    console.log("초 totalSecond:"+totalSecond);
    printTime();
    if(totalSecond <= 0){
        clearInterval(interval);    // 타이머 시간이 다 끝났으므로 clearInterval 처리
        document.write("<h1>야옹아 라면 불 꺼!!!</h1>");
    }
}
/* 시간 멈춰 버튼을 누르면 이 함수 실행 */
function clickBtnTimerStop(){
    clearInterval(interval);    // 강제로 clearInterval 처리
}
function printTime(){
    if(totalSecond >= 0){
        var minuteForPrint = parseInt(totalSecond / 60);
        var secondForPrint = parseInt(totalSecond % 60);
        spanM.innerHTML = minuteForPrint;
        spanS.innerHTML = secondForPrint;
    }
}