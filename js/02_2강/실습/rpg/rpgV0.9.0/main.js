function displayCharactersInfo() {
    elf.info();
    orc.info();
    tv("\n");
}

/* 보상 획득 처리 */
function getReward() {
    elf.money = elf.money + orc.money;
    //todo 출력 전환
    tv(orc.money + "원을 얻었습니다.\n");
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

// - 전투 종료 처리(종료메세지 출력, 경험치 획득)
function endBattle() {
    //todo 출력 전환
    tv("전투 종료\n");
    // br();
    // 경험치 처리
    elf.exp = elf.exp + orc.exp;
    // - 전투 종료 후 경험치 획득 메세지 출력 ex. 불쌍한 토끼, 엠피스에게 경험치 100 을 주고 죽었습니다.
    //todo 출력 전환
    tv("불쌍한 " + orc.name + ", " + elf.name + "에게 경험치 " + orc.exp + "을 주고 죽었습니다.\n");
    // br();
    getReward();

}

function procBattleTurn() {
    // 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
    var monsterDamage = getRandomAttackValue(orc.attack);
    var playerDamage = getRandomAttackValue(elf.attack);

    orc.currentHp = orc.currentHp - playerDamage;
    //todo 출력 전환
    tv(elf.name + "가 " + orc.name + "에게 데미지를 " + playerDamage + " 입혔습니다.\n");
    elf.currentHp = elf.currentHp - monsterDamage;
    //todo 출력 전환
    tv(orc.name + "가 " + elf.name + "에게 데미지를 " + monsterDamage + " 입혔습니다.\n");



    // hp 검사하기
    if (elf.currentHp <= 0 || orc.currentHp <= 0) {
        endBattle();    // 전투 종료 처리
        displayCharactersInfo();
        return false;
    } else {
        displayCharactersInfo();
        return true;
    }
}




var screen;
var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);

window.onload = function () {
    screen = document.getElementById("screen");

    displayCharactersInfo();


    //todo 출력 전환    
    tv("전투 시작\n");

    //전투 무한 루프 처리
    var loop = true;
    while (loop) {
        loop = procBattleTurn();
    }

}




