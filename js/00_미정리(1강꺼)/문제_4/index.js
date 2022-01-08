var randomDice6;
randomDice6 = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var s = "주사위를 굴려 ( " + randomDice6 + " ) 이 나왔습니다.";
document.write(s);


if(randomDice6 == 6) {
    //여기다가
    //todo: 당첨되셨습니다. 를 출력
    document.write("당첨되셨습니다.");
}