/* 게임 오브젝트 창의 오브젝트 클릭 시 실행 */
function gameObjectClick(gameObjectId){ // 임시로 몬스터 id 만 처리함
    if(currentMode == "전투"){ // 이미 전투 상태이면 return 하여 이후 처리가 안되도록 함
        console.log("이미 전투 중인 상태입니다.");
        return;
    }
    // 해당 몬스터와 전투 처리
    console.log("클릭 한 게임 오브젝트 id:"+gameObjectId);
    currentMode = "전투"; //현재 모드를 전투로 바꿈    
    // 전역 몬스터 배열에서 해당 아이디 몬스터를 찾아서
    for(var i=0;i<monsterArray.length;i++){
        if(monsterArray[i].id == gameObjectId){
            monsterArray[i].aggressionType = "H";   //  대상 몬스터를 적대적으로 바꿈
        }
    }
    turn(); // 턴 처리
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
/* 쥐 추가 등장 */
function createMob(){
    var newMonsterId = monsterIdPrefix + monsterLastIdNumber;   // 몹 아이디 생성
    monsterLastIdNumber++;  // 몹 아이디 증가
    var newMonster = new Monster(newMonsterId,"쥐", 50, 5, 1005, "H");  // 몹 생성
    monsterArray.push(newMonster);  // 몹 배열에 추가
}
