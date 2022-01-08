var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);
var turnCount = 1;
var itTurn; // 현재 턴 수를 표시하는 input text 변수
var currentMode = "대기"; // 현재 플레이 상태를 표시하는 변수 (대기, 전투)

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    
    displayCharactersInfo();
}




