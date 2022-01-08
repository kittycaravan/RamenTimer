/* 이동 처리 */
function move(direction) {  // direction : 방향 값 ex. '동','밑' 등
    var nowRoom = roomGetCurrentRoom()
    var connectionRoomId = nowRoom.getIdByDirection(direction);
    if(connectionRoomId == 0){  // 갈수 없는 방향이면 ( 값 0 ) 갈수 없음 출력 후 함수를 빠져나감 ( return; )
        tv("갈수 없음\n");
        return;
    } else {
        currentRoomId = connectionRoomId;
        console.log("현재 방번호:"+currentRoomId);
    }
    
    // 전투 중 이동 시 처리
    //todo 추후 도망에 대한 확률 체크 필요. 또한 도망에 대한 처리 기획 필요.
    // 우선은 도망이 100% 확률로 가능하도록 함. 이동 허용. 단, 대기 상태로 전환하도록함.
    if(currentMode == "전투"){
        tv("ㅌㅌㅌ\n"); // 전투 중 이동 시 "ㅌㅌ" 출력
        currentMode = "대기";   // 대기 상태로 바꿈
    }

    switch (direction) {
        case "동":
            tv("동쪽으로 이동했습니다.\n");
            break;
        case "서":
            tv("서쪽으로 이동했습니다.\n");
            break;
        case "남":
            tv("남쪽으로 이동했습니다.\n");
            break;
        case "북":
            tv("북쪽으로 이동했습니다.\n");
            break;
        case "위":
            tv("위쪽으로 이동했습니다.\n");
            break;
        case "밑":
            tv("아래쪽으로 이동했습니다.\n");
            break;
    }
    /* 이동 후 할일들 */
    displayRoomInfo();  /* 방 정보 보여주기 */    
    turn();             /* 턴 진행 */
}