/* 레벨업 체크 */
function checkLevelup(){
    var requiredExp = elf.getNextLevelRequiredExp();
    if(elf.exp >= requiredExp){  // 레벨업 요구 경험치보다 현재 경험치가 같거나 많으면        
        var overExp = elf.exp - requiredExp;    // 오버한 경험치를 따로 계산        
        elf.lv ++;  // 레벨업 처리
        tv("[ 축하합니다. 레벨이 올랐습니다! ] \n");        
        elf.exp = overExp;  // 현재 경험치를 오버한 경험치만큼만으로 재 조정
        // 레벨업 시 혜택 부여        
        elf.maxHp += 50;            // 혜택 1. 최대 체력 +50
        elf.currentHp = elf.maxHp;  // 혜택 2. 체력을 풀로 채워줌
        elf.attack += 5;            // 혜택 3. 공격력 +5
    }
}

