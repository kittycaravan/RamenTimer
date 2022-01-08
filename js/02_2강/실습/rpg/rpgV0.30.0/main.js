var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var screenGameObjectNew; //screen_game_object_new
var screenGameObjectNpc; //screen_game_object_npcs
var divCommands; //div_commands
var divExp; //div_exp
// var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);
var turnCount = 1;
var itTurn; // 현재 턴 수를 표시하는 input text 변수
var currentMode = "대기"; // 현재 플레이 상태를 표시하는 변수 (대기, 전투)
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1000;
/* 방 객체를 배열에 넣음. 방 정보 로딩 */
var roomArray = [
    new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,1007,0,0,0,0) ,
    new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
    new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,1004,1003,1005,1006),
    new Room("연습장 북쪽","연습장 북쪽이다.",1003,0,0,1002,0,0,0),
    new Room("연습장 남쪽","연습장 남쪽이다.",1004,0,0,0,1002,0,0),
    new Room("연습장 누각","연습장 누각이다.",1005,0,0,0,0,0,1002),
    new Room("연습장 지하","연습장 지하이다.",1006,0,0,0,0,1002,0),
    new Room("연습장 가는길","연습장으로 통하는 길이다. 앞에 연습장 입구가 보인다.",1007,1000,1008,0,0,0,0),
    new Room("저잣거리 남쪽","저잣거리의 남쪽이다. 서쪽에 여관이 보인다.",1008,1007,1009,0,0,0,0),
    new Room("여관","저잣거리에 위치한 여관이다. 작고 오래되어 보이지만 하루 묵어가는데는 문제가 없을 듯 하다."
        ,1009,1008,0,0,0,0,0)
];
/* 몬스터 배치 */
var monsterArray = [
    new Monster("001","허수아비", 100, 1, 1001, "N"),    
    new Monster("002","허수아비", 100, 1, 1002, "N"),    
    new Monster("003","허수아비", 100, 1, 1003, "N"),    
    new Monster("004","허수아비", 100, 1, 1004, "N"),    
    new Monster("005","쥐", 50, 5, 1006, "H"),
    new Monster("006","쥐", 50, 5, 1005, "H"),
    new Monster("007","왕쥐", 150, 15, 1006, "H")
]
var monsterIdPrefix = "M-";
var monsterLastIdNumber = 10;
/* Npc 배치 */
var npcArray = [
    new Npc("N-1","룰루", 100, 1, 1009, "F"),   // 여관주인 "룰루"
]
var npcIdPrefix = "N-";
var npcLastIdNumber = 2;

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    screenGameObjectNew = document.getElementById("screen_game_object_new");
    divExp = document.getElementById("div_exp");
    screenGameObjectNpc = document.getElementById("screen_game_object_npcs");
    divCommands = document.getElementById("div_commands");
    
    displayCharactersInfo();
    displayRoomInfo();
}
