/* 보상 획득 처리 */
function getReward(dieMonster) {
    // 보상 - 경험치 처리
    elf.exp = elf.exp + dieMonster.exp;
    // - 전투 종료 후 경험치 획득 메세지 출력 ex. 불쌍한 토끼, 엠피스에게 경험치 100 을 주고 죽었습니다.
    tv("불쌍한 " + dieMonster.name + ", " + elf.name + "에게 경험치 " + dieMonster.exp + "을 주고 죽었습니다.\n");

    // 보상 - 돈
    elf.money = elf.money + dieMonster.money;
    tv(dieMonster.money + "원을 얻었습니다.\n");
}
/* 0~공격력 값을 리턴 */
function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

/* - 전투 종료 처리(종료메세지 출력, 경험치 획득) */
function endBattle() {
    tv("전투 종료\n");    
    currentMode = "대기"; // 현재 턴 타입을 <대기>로 전환
}
/* 전투 턴 처리 */
//todo 고민(처리)할 문제 : 공격의 선,후를 어떻게 할 것인지? ex. 이번턴에 몹이나 유저가 죽었더라도 지금 처럼 
// 최후의 일격은 가한걸로 할건지?
// 현재는 한쪽이 죽는 상황이라도 현재 쌍방 데미지는 들어가는 방식임.
function procBattleTurn() {
    var hostileMonsterArray = getCurrentRoomHostileMonsters();    //현재 방의 적대적 몬스터 리스트 가져오기
    // 몬스터들의 공격 턴 처리 (단수가 아니라 복수임. 반복 필요)
    for(var i=0;i<hostileMonsterArray.length;i++){
        var monsterDamage = getRandomAttackValue(hostileMonsterArray[i].attack);   // 몬스터 랜덤 데미지 계산
        elf.currentHp = elf.currentHp - monsterDamage;  // 몬스터의 유저 공격 데미지 처리
        tv(hostileMonsterArray[i].name + "가 " + elf.name + "에게 데미지를 " + monsterDamage + " 입혔습니다.\n");  // 공격 메세지 출력
    }
    //유저 공격 턴(todo 단, 추후에 이걸 정해야함.. 유저가 어떤 몹을 공격할지.. 우선은 그냥 첫번째 몹을 공격하도록함)
    var playerTagetMonsterIndex = 0;    // 우선은 0을 주어 그냥 첫번째 몹을 공격하도록함.
    var playerDamage = getRandomAttackValue(elf.attack);    // 유저 랜덤 데미지 계산
    hostileMonsterArray[0].currentHp = hostileMonsterArray[0].currentHp - playerDamage;   // 유저의 몬스터 공격 데미지 처리
    tv(elf.name + "가 " + hostileMonsterArray[0].name + "에게 데미지를 " + playerDamage + " 입혔습니다.\n");   // 공격 메세지 출력

    if (elf.currentHp <= 0){    // 플레이어 사망 체크
        tv("YOE DIE ! \n"); // 플레이어 사망 메세지 출력
        tv("Game Over \n"); // 게임오버 메세지 출력
        //todo 게임 오버 처리.. 버튼 비활성화.. 재시도 등... 
        return;
    }

    //전투를 벌이고 있는 상대 몬스터(들)의 사망 체크
    for(var i=0;i<hostileMonsterArray.length;i++){
        if (hostileMonsterArray[i].currentHp <= 0) { // hp 가 0 이하면 사망 처리            
            getReward(hostileMonsterArray[i]);  // 기존 endBattle 에서 처리하고 있는 몹 처치 보상 처리를 여기서 해야함
            //todo 고민 할 일: 죽은 몹 전투 제외 시 동시의 문제. ex. 두마리가 동시에 죽은 경우는? 현재 로직에서 해결됨.            
            // 죽은 몹을 전달하여 해당 몹의 id 값을 통해 전역 몬스터 배열에서도 삭제
            deleteFromMonsterArray(hostileMonsterArray[i]);
        }
    }

    displayCurrentRoomMonstersInfo();   // 현재 방의 몬스터들 정보 갱신 출력
    displayCharactersInfo();    // 플레이어 정보 출력(데미지를 입은 상태 등을 갱신하여 표현하기 위해)

    // 남아 있는 적대적 몹이 한마리도 없는 상태를 체크하기 위해 한번 더 배열 값을 가져옴
    hostileMonsterArray = getCurrentRoomHostileMonsters();    //현재 방의 적대적 몬스터 리스트 가져오기
    if(hostileMonsterArray.length == 0){    // 남아있는 적대적 몹이 없는 경우
        endBattle();    // 전투 종료 처리
        return;
    }    
}
/* 턴 처리 */
function turn() {
    if (currentMode == "전투") {
        procBattleTurn();
    } else {
        procNormalTurn();
    }
    turnCount++;
    itTurn.value = turnCount;   // 현재 턴 표시
    console.log("현재 턴:" + turnCount);
}
/* 턴 처리 - 일반(비전투 상황 시의 턴 처리) */
function procNormalTurn() {
    tv("특별한 것은 보이지 않는다.\n");
}
/* 이동 처리 */
function move(direction) {  // direction : 방향 값 ex. '동','밑' 등
    var nowRoom = getCurrentRoomObject()
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
    procCurrentRoomMonster();    /* 현재 방의 몬스터들의 처리 */
    turn();             /* 턴 진행 */
}
/* 현재 방 id를 가지고 방 배열에서 해당 방 객체를 리턴 */
function getCurrentRoomObject() {
    for (var i = 0; i < roomArray.length; i++) {
        if (roomArray[i].id == currentRoomId) {
            return roomArray[i];
        }
    }
}
/* 현재 방에 있는 몬스터들을 배열로 리턴 */
function getCurrentRoomMonsters(){
    var currentRoomMonsters = new Array();  // 빈 배열 생성 (갯수 0개)
    for(var i=0;i<monsterArray.length;i++){
        if(monsterArray[i].location == currentRoomId){   // 몬스터 리스트의 id와 현재 방 id가 같으면 (즉, 현재 방에 있는 몬스터면)
            currentRoomMonsters.push(monsterArray[i]);  // 배열.push(배열에 넣을 변수) 하면 배열에 값이 추가로 들어감
        }
    }
    return currentRoomMonsters; // 현재 방에 있는 몬스터들을 찾아내서 배열로 만든 걸 리턴
}
/* 현재 방에 있는 적대적 몬스터들을 배열로 리턴 */
function getCurrentRoomHostileMonsters(){
    var currentRoomHostileMonsterArray = new Array();  // 빈 배열 생성 (갯수 0개)
    for(var i=0;i<monsterArray.length;i++){
        // 몬스터 리스트의 id와 현재 방 id가 같으면 (즉, 현재 방에 있는 몬스터면) 그리고 적대 몹이면
        if(monsterArray[i].location == currentRoomId && monsterArray[i].aggressionType == "H"){   
            currentRoomHostileMonsterArray.push(monsterArray[i]);  // 배열.push(배열에 넣을 변수) 하면 배열에 값이 추가로 들어감
        }
    }
    return currentRoomHostileMonsterArray; // 현재 방에 있는 몬스터들을 찾아내서 배열로 만든 걸 리턴
}
/* 현재 방의 몬스터들의 처리 */
function procCurrentRoomMonster(){    
    var currentRoomMonsterArray = getCurrentRoomMonsters();    //현재 방의 몬스터 리스트 가져오기
    for(var i=0;i<currentRoomMonsterArray.length;i++){ //이 몬스터들의 공격성 검사
        if(currentRoomMonsterArray[i].aggressionType == "H"){  // 공격성이 적대적(H) 인 몹이 있으면
            console.log("적대적인 몹이 있음");
            currentMode = "전투";   // 현재 모드를 전투로 바꾸어 이후 턴 처리가 전투 턴이 진행 되도록 함
        }
    }
}
/* 전역 몹 배열에서 죽은 몹 제거 */
function deleteFromMonsterArray(dieMonster){
    // 전역 몹 배열에서 죽은 몹의 id 값과 일치하는 배열 index 구하기
    var findI = -1;
    for(var i=0;i<monsterArray.length;i++){
        if(monsterArray[i].id == dieMonster.id){
            findI = i;
        }
    }    
    if(findI != -1){    // findI 값이 -1 이 아니면. 즉, 죽은 몹이 전역 몹 배열중 몇번째에 있는지 인덱스 값을 찾았으면.
        // 코드 참고 : 지정한 위치에 있는 요소(n개)를 제거하는 방법 : splice('위치값n', '제거할 요소의 갯수')
        monsterArray.splice(findI,1);   // 전역 몹 배열에서 죽은 몹을 제거
    }
}