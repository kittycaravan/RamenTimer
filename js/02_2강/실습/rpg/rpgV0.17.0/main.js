var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);
var turnCount = 1;
var itTurn; // 현재 턴 수를 표시하는 input text 변수
var currentMode = "대기"; // 현재 플레이 상태를 표시하는 변수 (대기, 전투)
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1000;
// var roomArray = [roomA,roomB,roomC];
/* 방 객체를 배열에 넣음. 방 정보 로딩 */
var roomArray = [
    new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0) ,
    new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
    new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0)
];

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    
    displayCharactersInfo();
    // roomA.displayRoomInfo();
    // roomArray[0].displayRoomInfo();
    // getCurrentRoomObject().displayRoomInfo();
    displayRoomInfo();
}




