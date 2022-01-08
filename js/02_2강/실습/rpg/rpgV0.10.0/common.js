/*
    공통함수들을 모아놓음
*/

/* textarea 에 텍스트 입력 처리 */
function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value = screenString;
    screenPlayerInfo.value = str;
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}