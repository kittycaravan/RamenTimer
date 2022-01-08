/* 여관 - 숙박 명령 시 */
function innSleep(){
    console.log("cmd 숙박");    
    // 돈 검사
    if(elf.money < 10){ // 여관 비가 모자라면
        tv("돈이 모잘라요.\n");
        return;
    } else {    // 여관비가 있을 때만
        elf.money -= 10; // 여관비 지불
        tv("여관비 10원을 지불하였다.\n");    
        tv("당신은 침대에 누워 잠을 청했다.\n")
        tv("zzz............................\n")
        turnCount += 480; //turn을 +480 처리
        elf.currentHp = elf.maxHp;  // hp 최대치로 회복
        tv("당신은 침대에서 몸을 일으켰다. 체력이 회복되었다.\n")    
        displayRoomInfo();  /* 방 정보 보여주기 */    
        displayCharactersInfo();    // 케릭터 정보 갱신
    }
}

