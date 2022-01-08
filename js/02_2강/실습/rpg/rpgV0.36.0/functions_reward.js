/* 보상 획득 처리 */
function rewardGetReward(dieMonster) {
    // 보상 - 경험치 처리
    elf.exp = elf.exp + dieMonster.exp;

    // 레벨업 체크
    lvCheckLevelup();

    // - 전투 종료 후 경험치 획득 메세지 출력 ex. 불쌍한 토끼, 엠피스에게 경험치 100 을 주고 죽었습니다.
    tv("불쌍한 " + dieMonster.name + ", " + elf.name + "에게 경험치 " + dieMonster.exp + "을 주고 죽었습니다.\n");

    // 보상 - 돈
    elf.money = elf.money + dieMonster.money;
    tv(dieMonster.money + "원을 얻었습니다.\n");
}