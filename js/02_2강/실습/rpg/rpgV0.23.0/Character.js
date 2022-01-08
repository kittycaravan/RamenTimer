/* 
    플레이어 케릭터 클래스 
    
    name 이름
    hp 현재체력
    attack 공격력 (0~공격력<랜덤> 만큼 데미지를 줌)
*/
function Character(name,hp,attack){ 
    /* 속성, 프로퍼티 */
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.exp = 0;   // 경험치
    this.money = 0; // 돈
    /* 멤버함수, 멤버메소드 */
    this.info = function(){ // 플레이어 정보 창에 플레이어 정보 출력하는 함수. ex. [엠피스(70/100)]<exp: 100>
        tvPlayerInfo("["+this.name+"("+this.currentHp + "/" + this.maxHp+")](exp: "+this.exp+"/300)");
    }
}