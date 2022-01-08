/* 가방 아이템을 클릭 시 처리 */
function bagItemClick(id){
    console.log("가방 아이템 클릭됨 id:"+id);

    var item = getBagItemById(id);
    
    //item의 타입에 따라 처리
    switch(item.type){
        case "체력물약":
            // 체력 회복 처리            
            elf.currentHp += item.effectPoint;
            if(elf.maxHp < elf.currentHp){  // 회복량이 오버한 경우 최대 체력만큼만 회복처리
                elf.currentHp = elf.maxHp;
            }
            console.log("물약마심");
            tv("체력물약을 마셨습니다.\n");
            break;
    }    
    deleteBagItemById(id);  // 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 삭제하기
    displayBagItemList();   // 가방 갱신
    elf.info();    // 플레이어 정보 갱신
}

/* 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 꺼내기 */
function getBagItemById(id){
    for(var i=0;i<bagItemArray.length;i++){
        if(bagItemArray[i].id == id){
            return bagItemArray[i];
        }
    }
    return null;    // 못찾으면 null 리턴
}
/* 가방 아이템 배열에서 id로 가방 아이템 객체를 하나 삭제하기 */
function deleteBagItemById(id){
    var findI = -1;
    for(var i=0;i<bagItemArray.length;i++){
        if(bagItemArray[i].id == id){
            findI = i;
        }
    }
    bagItemArray.splice(findI,1);   // 삭제
}