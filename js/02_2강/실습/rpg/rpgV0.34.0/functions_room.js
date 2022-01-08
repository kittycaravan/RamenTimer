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
/* 현재 방에 있는 Npc들을 배열로 리턴 */
function getCurrentRoomNpcs(){
    var currentRoomNpcs = new Array();  // 빈 배열 생성 (갯수 0개)
    for(var i=0;i<npcArray.length;i++){ // 전역 변수 npcArray 순회
        if(npcArray[i].location == currentRoomId){   // NPC 리스트의 id와 현재 방 id가 같으면 (즉, 현재 방에 있는 NPC면)
            currentRoomNpcs.push(npcArray[i]);  // 배열.push(배열에 넣을 변수) 하면 배열에 값이 추가로 들어감
        }
    }
    return currentRoomNpcs; // 현재 방에 있는 NPC 들을 찾아내서 배열로 만든 걸 리턴
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
/* 현재 방 체크 및 처리 */
function checkCurrentRoom(){
    var commandTags = divCommands.innerHTML;    // 기존 태그 불러오기
    var room = getCurrentRoomObject();    
    if(room.roomName == "여관"){    // 현재 방이 여관이면        
        if(elf.currentHp < elf.maxHp){
            elf.currentHp += 1; // 현재 체력 1 증가
            console.log("체력회복 1");
            tv("체력이 회복되었다.\n");
        }        
        placeCommandButtonSleep();  // 숙박 커맨드로 표시
    } else {
        placeCommandButtonBase();   // 기본 커맨드로 표시
    }
}
