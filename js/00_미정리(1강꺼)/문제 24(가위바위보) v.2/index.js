/* 문제 24(가위바위보) */
// 가위바위보 ( Rock Paper Scissors )
// 가위 = Scissors
// 바위 = Rock
// 보   = Paper

//1일때 가위, 2일때 바위, 3일때 보

var computerRPS;    // 컴퓨터가 낸 가위바위보
var playerRPS;      // 플레이어가 낸 가위바위보

var btnPlayerS;
var btnPlayerR;
var btnPlayerP;
var pPlayerRPS;     // 플레이어가 낸 가위바위보를 출력할 p 태그
var pComputerRPS;   // 컴퓨터가 낸 가위바위보를 출력할 p 태그
var pResult;        // 경기 결과를 출력할 p 태그

function procRPS(playerRPS) { // 플레이어 가위 버튼 클릭 시 동작하는 애
    /* 1. 컴퓨터 가위바위보 내게 하기 */
    computerRPS = Math.floor(Math.random() * 3 + 1);    // 1일때 가위, 2일때 바위, 3일때 보

    switch (playerRPS) {
        case 1: // 플레이어가 가위
            pPlayerRPS.innerHTML = "플레이어가 가위를 냈습니다.";
            if (computerRPS == 1) {
                pComputerRPS.innerHTML = "컴퓨터가 가위를 냈습니다.";
                pResult.innerHTML = "서로 비겼습니다.";
            } else if (computerRPS == 2) {
                pComputerRPS.innerHTML = "컴퓨터가 바위를 냈습니다.";
                pResult.innerHTML = "컴퓨터가 이겼습니다.";
            } else {
                pComputerRPS.innerHTML = "컴퓨터가 보를 냈습니다.";
                pResult.innerHTML = "플레이어가 이겼습니다.";
            }
            break;
        case 2: // 플레이어가 바위
            pPlayerRPS.innerHTML = "플레이어가 바위를 냈습니다.";
            if (computerRPS == 1) {
                pComputerRPS.innerHTML = "컴퓨터가 가위를 냈습니다.";
                pResult.innerHTML = "플레이어가 이겼습니다.";
            } else if (computerRPS == 2) {
                pComputerRPS.innerHTML = "컴퓨터가 바위를 냈습니다.";
                pResult.innerHTML = "서로 비겼습니다.";
            } else {
                pComputerRPS.innerHTML = "컴퓨터가 보를 냈습니다.";
                pResult.innerHTML = "컴퓨터가 이겼습니다.";
            }
            break;
        case 3: // 플레이어가 보
            pPlayerRPS.innerHTML = "플레이어가 보를 냈습니다.";
            if (computerRPS == 1) {
                pComputerRPS.innerHTML = "컴퓨터가 가위를 냈습니다.";
                pResult.innerHTML = "컴퓨터가 이겼습니다.";
            } else if (computerRPS == 2) {
                pComputerRPS.innerHTML = "컴퓨터가 바위를 냈습니다.";
                pResult.innerHTML = "플레이어가 이겼습니다.";
            } else {
                pComputerRPS.innerHTML = "컴퓨터가 보를 냈습니다.";
                pResult.innerHTML = "서로 비겼습니다.";
            }
            break;
    }
}

window.onload = function () {
    /* 1. 태그 변수와 각 태그를 연결 */
    btnPlayerS = document.getElementById("rps_s");  // 가위 버튼 연결
    btnPlayerR = document.getElementById("rps_r");  // 바위 버튼 연결
    btnPlayerP = document.getElementById("rps_p");  // 보 버튼 연결
    pPlayerRPS = document.getElementById("player_rps");  // 플레이어가 낸 가위바위보를 출력하는 p태그 연결
    pComputerRPS = document.getElementById("computer_rps");  // 컴퓨터가 낸 가위바위보를 출력하는 p태그 연결
    pResult = document.getElementById("result");  // 결과 출력용 p 태그 연결

    /* 2. 태그 변수(플레이어가 낼 가위바위보 버튼들) 에 이벤트를 감시할 애들을 붙이기  */
    btnPlayerS.onclick = function(){procRPS(1)};   // 가위 버튼은 클릭 이벤트를 감지하는 애를 playerR 이라는 함수로 정했음.
    btnPlayerR.onclick = function(){procRPS(2)};
    btnPlayerP.onclick = function(){procRPS(3)};
}

