var lotto = [0,0,0,0,0,0];

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

dw("당첨번호: ");
for(var i=0;i<lotto.length;i++){
    dw(lotto[i] + " ");
}