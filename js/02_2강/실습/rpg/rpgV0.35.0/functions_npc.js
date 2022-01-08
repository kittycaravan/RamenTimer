/* 게임 오브젝트 창 - npc 클릭 시 실행 */
function npcClick(gameObjectId){
    console.log("클릭 한 게임 오브젝트 id:"+gameObjectId);
    // 룰루 대사 치기. 랜덤
    var random = Math.floor(Math.random()*npcSpeechArrayLullu.length);
    var randomSpeech = npcSpeechArrayLullu[random];
    tv("룰루가 말합니다. \"" + randomSpeech + "\"\n");
}

