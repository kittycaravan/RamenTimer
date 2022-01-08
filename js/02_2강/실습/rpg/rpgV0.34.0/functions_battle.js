/* 보상 획득 처리 */
function getReward(dieMonster) {
    // 보상 - 경험치 처리
    elf.exp = elf.exp + dieMonster.exp;

    // 레벨업 체크
    checkLevelup();

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