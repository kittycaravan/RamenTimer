function Monster(name,hp,attack,location){ 
    /* 속성, 프로퍼티 */
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.exp = 100;   // 경험치
    this.money = 10;   // 돈
    this.location = location;  // 위치 (0: 미배치)
    /* 멤버함수, 멤버메소드 */
    this.info = function(){
        tvGameObject("["+this.name+"("+this.currentHp + "/" + this.maxHp+")]");
    }
    this.getInfo = function(){
        return "["+this.name+"("+this.currentHp + "/" + this.maxHp+")]";
    }

}