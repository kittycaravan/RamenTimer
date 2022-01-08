/*
    화면 출력용 함수들을 모아놓음
*/

/* 메세지창의 내용이 길어질 경우 상하 스크롤을 맨 아래로 위치시키는 함수 */
function screenMessageBoxScrollToBot() {
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}
/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 메세지 창 쪽 */
function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;

    screenMessageBoxScrollToBot();
}
/* textarea 텍스트 지우기 */
function tvClear(){
    screenMessageBox.value = "";
}
/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 플레이어 정보 창 쪽 */
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    screenPlayerInfo.value = str;
}
/* textarea 텍스트 지우기 */
function tvPlayerInfoClear(){
    screenPlayerInfo.value = "";
}
/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 게임 오브젝트 창 쪽 */
function tvGameObject(str){
    var screenString = screenGameObject.value;
    screenGameObject.value = str;
}
/* textarea 텍스트 지우기 */
function tvGameObjectClear(){
    screenGameObject.value = "";
}
/* 플레이어 정보 출력 */
function displayCharactersInfo() {
    elf.info();
}
/* 방 정보 보여주기 */
function displayRoomInfo() {
    getCurrentRoomObject().displayRoomInfo();
    displayCurrentRoomMonstersInfo();
}
/* 현재 방의 몬스터들을 출력 처리 */
function displayCurrentRoomMonstersInfo(){
    //todo 현재 방에 있는 몬스터들이 뭐가 있는지 출력
    var currentRoomMonstersArray = getCurrentRoomMonsters();
    var monstersString = "";    // 게임 오브젝트 창에 몬스터 간략정보들을 저장할 변수 선언
    for(var i=0;i<currentRoomMonstersArray.length;i++){
        console.log(currentRoomMonstersArray[i].name);
        // 게임 오브젝트 창에 몬스터 간략정보들을 저장할 변수에 누적시키기
        monstersString = monstersString + currentRoomMonstersArray[i].getInfo();    
    }    
    tvGameObject(monstersString);   // 게임 오브젝트 창에 출력
}