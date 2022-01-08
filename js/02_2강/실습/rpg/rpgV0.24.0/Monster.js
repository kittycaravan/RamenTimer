function Monster(id,name,hp,attack,location,aggressionType){ 
    /* 속성, 프로퍼티 */
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.exp = 100;   // 경험치
    this.money = 10;   // 돈
    this.location = location;  // 위치 (0: 미배치)
    this.aggressionType = aggressionType;  // 공격성 (F: Favorable 호의적인, H: Hostile 적대적인, N: None 없음<default> )
    this.id = id;   // 몬스터 id
    /* 멤버함수, 멤버메소드 */
    this.info = function(){
        tvGameObject("["+this.name+"("+this.currentHp + "/" + this.maxHp+")]");
    }
    this.getInfo = function(){
        return "["+this.name+"("+this.currentHp + "/" + this.maxHp+")]";
    }

}