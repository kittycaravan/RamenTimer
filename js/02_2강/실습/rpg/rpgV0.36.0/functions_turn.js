/* 턴 처리 */
function turn() {
    if (currentMode == "전투") {
        battleProcBattleTurn();
    } else {
        procNormalTurn();
    }
    turnCount++;
    itTurn.value = turnCount;   // 현재 턴 표시
    console.log("현재 턴:" + turnCount);

    //todo 10턴 마다 쥐 추가 생성. 임시로 고정 위치에 생성
    if(turnCount % REGEN_TURN_MOUSE == 0){
        mobCreate();
    }
}
/* 턴 처리 - 일반(비전투 상황 시의 턴 처리) */
function procNormalTurn() {
    roomCheckHostileMob();    /* 현재 방의 몬스터들의 처리 */
    roomCheck(); // 현재 방 체크 및 처리
    displayCharactersInfo();    // 케릭터 정보 갱신
}