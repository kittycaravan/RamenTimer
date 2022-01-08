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
    currentMode = "비전투"; // 현재 모드를 비전투로 전환
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
    tvClear();  // 메세지창을 지움
    //todo 비전투 상황 시의 턴 처리
    //임시: "아무것도 안하고 시간이 흘러감" 이라고 출력
    tv("아무것도 안하고 시간이 흘러감 \n");
    
}


var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);
var turnCount = 0;
var itTurn; // 현재 턴 수를 표시하는 input text 변수
var currentMode = "전투"; // 현재 플레이 상태를 표시하는 변수 (비전투, 전투)

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    
    displayCharactersInfo();

    tv("전투 시작\n");

    //전투 무한 루프 처리
    // var loop = true;
    // while (loop) {
    //     loop = procBattleTurn();
    // }
}




