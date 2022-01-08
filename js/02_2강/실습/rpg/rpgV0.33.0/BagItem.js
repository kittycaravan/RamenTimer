/* 클래스 - 가방에 들어있는 아이템 */
function BagItem(itemName, id, type, effectPoint){
    this.itemName = itemName;
    this.id = id;   // 아이디 규칙. 접두어(Bag 의 B) "B-" + 숫자
    /* 타입 */
    /*
        체력물약

        .. todo 추가예정
    */
    this.type = type;       // 타입 :
    this.effectPoint = effectPoint; // 영향 포인트. ex. 물약이면 회복량
}