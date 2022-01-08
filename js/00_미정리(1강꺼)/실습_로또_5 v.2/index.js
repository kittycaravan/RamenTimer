var playerLotto = [1,2,3,4,5,6];
var lotto = [0,0,0,0,0,0];
var lottoBonusNo;   // 컴퓨터가 뽑은 로또 보너스번호를 저장 할 변수

/* 첫번째 번호 처리 */
var r = Math.floor(Math.random() * 45 + 1); // 1~45 사이의 랜덤 번호 뽑기
lotto[0] = r;   // 뽑은거 첫번째 로또 칸에 적기
var temp = 0;   // 컴퓨터가 뽑은 임리 로또 번호를 저장 할 변수

/* 두번째 번호 처리 */
label_2:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 첫번째 번호와 임시번호만 비교하면 되므로 이 내부에서 반복문을 쓸 필요 없이 이것만 비교하면 됨. */
    if(lotto[0] == temp){
        continue label_2;       // 중복이면 컨티뉴 label_2 라벨 가서 처음부터 다시 하게 함.
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[1] = temp;    // 로또 두번째 자리에 값 넣어주고    
    break;  // 반복문을 빠져나가기
}

/* 세번째 번호 처리 */
label_3:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 첫번째, 두번째 번호와 임시번호만 비교하면 되므로 두바퀴만 돌리면 됨. */
    for(var i=0;i<2;i++){
        if(lotto[i] == temp){
            continue label_3;       // 중복이면 컨티뉴 label_3 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[2] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 네번째 번호 처리 */
label_4:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 1, 2, 3 번째 번호와 임시번호만 비교하면 되므로 3번만 돌리면 됨. */
    for(var i=0;i<3;i++){
        if(lotto[i] == temp){
            continue label_4;   // 중복이면 컨티뉴 label_4 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[3] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 다섯번째 번호 처리 */
label_5:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 1, 2, 3, 4 번째 번호와 임시번호만 비교하면 되므로 4번만 돌리면 됨. */
    for(var i=0;i<4;i++){
        if(lotto[i] == temp){
            continue label_5;   // 중복이면 컨티뉴 label_5 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[4] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 여섯번째 번호 처리 */
label_6:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 1, 2, 3, 4, 5 번째 번호와 임시번호만 비교하면 되므로 5번만 돌리면 됨. */
    for(var i=0;i<5;i++){
        if(lotto[i] == temp){
            continue label_6;   // 중복이면 컨티뉴 label_6 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lotto[5] = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

/* 보너스 번호 처리 */
label_7:
while(true){
    temp = Math.floor(Math.random() * 45 + 1);
    /* 중복검사 : 1, 2, 3, 4, 5, 6 번째 번호와 임시번호만 비교하면 되므로 6번만 돌리면 됨. */
    for(var i=0;i<6;i++){
        if(lotto[i] == temp){
            continue label_7;   // 중복이면 컨티뉴 label_7 라벨 가서 처음부터 다시 하게 함.
        }
    }
    //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
    lottoBonusNo = temp;    // 값 넣어주고
    break;  // 반복문을 빠져나가기
}

dw("당첨번호: ");
for(var i=0;i<lotto.length;i++){
    dw(lotto[i] + " ");
}
dw("[보너스번호: "+lottoBonusNo + "]");

br();
dw("당신의 번호: ");
for(var i=0;i<6;i++){
    dw(playerLotto[i] + " ");
}
br();


/* 플레이어 로또와 컴퓨터 로또를 비교하여 등수 처리 */
var okCount = 0;
for(var i=0;i<6;i++){    
    for(var j=0;j<6;j++){
        if(lotto[i] == playerLotto[j]){ // 플레이어 로또 중 컴퓨터 로또와 일치하는게 있으면            
            okCount = okCount + 1;  // 당첨 카운트를 1 증가(맞춤 표시 1개 증가)
            break;
        }
    }
}
dw("맞춘 갯수:" + okCount); br();

/* 등수 화면 표시 */
switch(okCount){
    case 3:
        dw("5등입니다.");
        break;
    case 4:
        dw("4등입니다.");
        break;
    case 5: // 3등인 사람
        // 보너스 번호를 이용 2등 , 3등 여부 가리기
        // 보너스 번호를 맞췄는지 찾아내기
        var hasBonusNo = false;
        for(var i=0;i<6;i++){    
            if(playerLotto[i] == lottoBonusNo){ // 플레이어 로또 중 컴퓨터 로또 보너스 번호와 일치하는게 있으면                                
                hasBonusNo = true;  // 찾았다고 표시 해두기
            }
        }
        // 찾았는지 여부를 저장한 boolean 변수가 true 면 보너스 번호를 맞춘 것이므로 2등 처리, 아니면 3등 처리
        if(hasBonusNo){ 
            dw("2등입니다.");
        } else {
            dw("3등입니다.");
        }
        break;
    case 6:
        dw("1등입니다.");
        break;
    default:
        dw("꽝입니다.")
        break;
}
