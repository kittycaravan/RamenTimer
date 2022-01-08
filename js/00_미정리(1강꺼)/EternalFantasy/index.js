var sPlayerName = "";
var sPlayerHp = 10;
var sMobHp = 3;
var sLines = 1;

var sMainArea;

var sMainAreaText = "";

var sTotalCmdLine = 0;
var sTextArrayDisplayIndex = 0;
var sTextArrayDisplay = ["","","","","","","","","","","","","","","","","","","","",];
    
// 1. var arr = [배열요소1, 배열요소2,...];          // 배열 리터럴을 이용하는 방법
// 2. var arr = Array(배열요소1, 배열요소2,...);     // Array 객체의 생성자를 이용하는 방법
// 3. var arr = new Array(배열요소1, 배열요소2,...); // new 연산자를 이용한 Array 객체 생성 방법

var sCommandInput;  // 입력 인풋 태그

var sRoom;  // 맵 정보
var sPlayer; // 플레이어 정보

function init(){
    sMainArea = document.getElementById("main_area");
    sCommandInput = document.getElementById("input_command");
    focustInput();
    initRoom();
    initPlayer();
    initDisplay();
}

function initRoom(){
    sRoom = new Room("연습장 입구","연습장 입구이다.");
}
function initPlayer(){
    sPlayer = new Player();
    sPlayer.name = "안성모";
    sPlayer.hp = 100;
    sPlayer.race = "인간";
    sPlayer.job = "기사";    
}

function initDisplay(){
    displayRoom(sRoom);
    displayPlayer(sPlayer);
}
function displayRoom(room){
    displayRoomName(room);
    displayRoomDesc(room);
}
function displayRoomName(room){
    displayText("[" + room.roomName + "]");
}
function displayRoomDesc(room){
    displayText(room.desc);    
}
function displayPlayer(player){
    displayText(player.desc());    
}

function runWorld(){
    init();
}


function displayText(strCmd){    
    sTotalCmdLine ++;           // .입력 라인 수 인덱스를 증가시키기
    sMainArea.innerHTML = "";   // .출력창 초기화        
    // 1.텍스트를 배열에 넣음
    if(sTotalCmdLine <= 20){ // 출력 라인 수가 아직 20개를 안넘었을 때는 차곡차곡 하나씩 배열에 넣는다.
        sTextArrayDisplay[sTotalCmdLine - 1] = strCmd;        
    } else {
        // todo : 일단 아무것도 안함
        // 하나씩 올려야 함
        //
        // 배열 맨 앞에 제거. splice() 사용
        /* 배열 임의의 위치에 요소 추가 제거 */
        // start - 수정할 배열 요소의 인덱스
        // deleteCount - 삭제할 요소 개수, 제거하지 않을 경우 0
        // el - 배열에 추가될 요소
        // arr.splice(start, deleteCount, el);       
        sTextArrayDisplay.splice(0,1);
        sTextArrayDisplay.push(strCmd); // 끝에 추가
    }

    // 4.출력창에 출력

    if(sTotalCmdLine <= 20){
        for(var i=0;i<sTotalCmdLine;i++){        
            sMainArea.innerHTML += (i+1) + ":" + sTextArrayDisplay[i] + "<br>";   // 텍스트 추가
        }    
    } else {
        for(var i=0;i<20;i++){        
            sMainArea.innerHTML += (i+1) + ":" + sTextArrayDisplay[i] + "<br>";   // 텍스트 추가
        }    
    }
}

function commandBtnClick(){    
    var cmdStr = sCommandInput.value;
    displayText(cmdStr);
    clearInput();
}
function commandEnter(){
    // sCommandInput = document.getElementById("input_command");
    var cmdStr = sCommandInput.value;
    displayText(cmdStr);
    clearInput();
}
function clearInput(){
    sCommandInput.value = "";
}
function focustInput(){
    sCommandInput.focus();
}

/***************************************/
window.onload = function(){ // 할 것
    runWorld();
}    
/***************************************/