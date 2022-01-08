function displayCharactersInfo() {
    elf.info();
    orc.info();
    tv("\n");
}

/* 보상 획득 처리 */
function getReward() {
    elf.money = elf.money + orc.money;
    tv(orc.money + "원을 얻었습니다.\n");
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

// - 전투 종료 처리(종료메세지 출력, 경험치 획득)
function endBattle() {
    tv("전투 종료\n");
    // 경험치 처리
    elf.exp = elf.exp + orc.exp;
    // - 전투 종료 후 경험치 획득 메세지 출력 ex. 불쌍한 토끼, 엠피스에게 경험치 100 을 주고 죽었습니다.
    tv("불쌍한 " + orc.name + ", " + elf.name + "에게 경험치 " + orc.exp + "을 주고 죽었습니다.\n");
    getReward();
    currentMode = "대기"; // 현재 턴 타입을 <대기>로 전환
    tvGameObjectClear();    // 게임 오브젝트 화면을 지움
}

function procBattleTurn() {
    // 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
    var monsterDamage = getRandomAttackValue(orc.attack);
    var playerDamage = getRandomAttackValue(elf.attack);

    orc.currentHp = orc.currentHp - playerDamage;
    tv(elf.name + "가 " + orc.name + "에게 데미지를 " + playerDamage + " 입혔습니다.\n");
    elf.currentHp = elf.currentHp - monsterDamage;
    tv(orc.name + "가 " + elf.name + "에게 데미지를 " + monsterDamage + " 입혔습니다.\n");

    // hp 검사하기
    if (elf.currentHp <= 0 || orc.currentHp <= 0) {
        displayCharactersInfo();
        endBattle();    // 전투 종료 처리
        return false;
    } else {
        displayCharactersInfo();
        return true;
    }    
}

function turn(){
    if(currentMode == "전투"){
        procBattleTurn();
    } else {
        procNormalTurn();
    }
    turnCount++;
    itTurn.value = turnCount;   // 현재 턴 표시
    console.log("현재 턴:"+turnCount);
}

function procNormalTurn(){
    // tvClear();  // 메세지창을 지움
    //비전투 상황 시의 턴 처리
    //임시: "아무것도 안하고 시간이 흘러감" 이라고 출력
    tv("특별한 것은 보이지 않는다.\n");       
}

function screenMessageBoxScrollToBot(){
    // textarea.scrollTop = textarea.scrollHeight;
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}

function moveEast(){
    tv("동쪽으로 이동했습니다.");
    turn();
}
function moveWest(){
    tv("서쪽으로 이동했습니다.");
    turn();
}
function moveSouth(){
    tv("남쪽으로 이동했습니다.");
    turn();
}
function moveNorth(){
    tv("북쪽으로 이동했습니다.");
    turn();
}
function moveUp(){
    tv("위쪽으로 이동했습니다.");
    turn();
}
function moveDown(){
    tv("아래쪽으로 이동했습니다.");
    turn();
}