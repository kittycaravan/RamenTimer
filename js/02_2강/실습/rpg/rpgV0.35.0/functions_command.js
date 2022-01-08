/* 명령 버튼 - 기본 배치 */
function commandShowButtonDefault(){
    divCommands.innerHTML =     
    "<input type='button' value='턴 진행' onclick='turn();'>&nbsp;"
    + "<input type='button' value='동' onclick='move(\"동\");'>&nbsp;"
    + "<input type='button' value='서' onclick='move(\"서\");'>&nbsp;"
    + "<input type='button' value='남' onclick='move(\"남\");'>&nbsp;"
    + "<input type='button' value='북' onclick='move(\"북\");'>&nbsp;"
    + "<input type='button' value='위' onclick='move(\"위\");'>&nbsp;"
    + "<input type='button' value='밑' onclick='move(\"밑\");'>&nbsp;";
}
/* 명령 버튼 - 기본 배치 + 여관 */
function commandShowButtonInn(){
    divCommands.innerHTML =     
    "<input type='button' value='턴 진행' onclick='turn();'>&nbsp;"
    + "<input type='button' value='동' onclick='move(\"동\");'>&nbsp;"
    + "<input type='button' value='서' onclick='move(\"서\");'>&nbsp;"
    + "<input type='button' value='남' onclick='move(\"남\");'>&nbsp;"
    + "<input type='button' value='북' onclick='move(\"북\");'>&nbsp;"
    + "<input type='button' value='위' onclick='move(\"위\");'>&nbsp;"
    + "<input type='button' value='밑' onclick='move(\"밑\");'>&nbsp;"
    + "<input type='button' value='숙박(480턴)' onclick='innSleep();'>&nbsp;";
}

