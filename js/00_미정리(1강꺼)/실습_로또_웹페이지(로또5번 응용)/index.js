window.onload = function () {
    /************************************************/
    /* 선언부                                        */
    /************************************************/
    var playerLotto = [0, 0, 0, 0, 0, 0];       // 내 로또 번호 배열
    var lotto = [0, 0, 0, 0, 0, 0];             // 당첨 로또 번호를 넣을 배열
    var lottoBonusNo;   // 컴퓨터가 뽑은 로또 보너스번호를 저장 할 변수

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    var ip1 = document.getElementById("ip1");
    var ip2 = document.getElementById("ip2");
    var ip3 = document.getElementById("ip3");
    var ip4 = document.getElementById("ip4");
    var ip5 = document.getElementById("ip5");
    var ip6 = document.getElementById("ip6");
    var btn = document.getElementById("btn");

    btn.onclick = btnClick; // 버튼 클릭 시 동작 시킬 함수 지정하기

    function btnClick() {   // 버튼 클릭 시 이 함수가 동작 함
        // 입력 번호를 플레이어 로또 배열에 넣기
        playerLotto[0] = ip1.value;
        playerLotto[1] = ip2.value;
        playerLotto[2] = ip3.value;
        playerLotto[3] = ip4.value;
        playerLotto[4] = ip5.value;
        playerLotto[5] = ip6.value;

        runLotto(); // 당첨 확인 처리(이전 당첨 확인 처리 부분을 여기다 다 넣어버림)
    }

    function runLotto() {
        /************************************************/
        /* 당첨 번호 처리                                */
        /************************************************/
        /* 첫번째 번호 처리 */
        var r = Math.floor(Math.random() * 45 + 1); // 1~45 사이의 랜덤 번호 뽑기
        lotto[0] = r;   // 뽑은거 첫번째 로또 칸에 적기
        var temp = 0;   // 컴퓨터가 뽑은 임리 로또 번호를 저장 할 변수

        /* 두번째 번호 처리 */
        label_2:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 첫번째 번호와 임시번호만 비교하면 되므로 이 내부에서 반복문을 쓸 필요 없이 이것만 비교하면 됨. */
            if (lotto[0] == temp) {
                continue label_2;       // 중복이면 컨티뉴 label_2 라벨 가서 처음부터 다시 하게 함.
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[1] = temp;    // 로또 두번째 자리에 값 넣어주고    
            break;  // 반복문을 빠져나가기
        }

        /* 세번째 번호 처리 */
        label_3:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 첫번째, 두번째 번호와 임시번호만 비교하면 되므로 두바퀴만 돌리면 됨. */
            for (var i = 0; i < 2; i++) {
                if (lotto[i] == temp) {
                    continue label_3;       // 중복이면 컨티뉴 label_3 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[2] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 네번째 번호 처리 */
        label_4:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 1, 2, 3 번째 번호와 임시번호만 비교하면 되므로 3번만 돌리면 됨. */
            for (var i = 0; i < 3; i++) {
                if (lotto[i] == temp) {
                    continue label_4;   // 중복이면 컨티뉴 label_4 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[3] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 다섯번째 번호 처리 */
        label_5:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 1, 2, 3, 4 번째 번호와 임시번호만 비교하면 되므로 4번만 돌리면 됨. */
            for (var i = 0; i < 4; i++) {
                if (lotto[i] == temp) {
                    continue label_5;   // 중복이면 컨티뉴 label_5 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[4] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 여섯번째 번호 처리 */
        label_6:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 1, 2, 3, 4, 5 번째 번호와 임시번호만 비교하면 되므로 5번만 돌리면 됨. */
            for (var i = 0; i < 5; i++) {
                if (lotto[i] == temp) {
                    continue label_6;   // 중복이면 컨티뉴 label_6 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[5] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 보너스 번호 처리 */
        label_7:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 : 1, 2, 3, 4, 5, 6 번째 번호와 임시번호만 비교하면 되므로 6번만 돌리면 됨. */
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue label_7;   // 중복이면 컨티뉴 label_7 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lottoBonusNo = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /************************************************/
        /* 당첨 번호 출력부 */
        /************************************************/
        var ts = "";    // 1. 빈 문자열 변수 선언(만들어 놓기)
        ts = "당첨번호 : ";
        for (var i = 0; i < lotto.length; i++) {
            ts = ts + (lotto[i] + " "); // 2. 문자열 변수에 문자열 누적시키기     
        }
        ts = ts + " [보너스 번호: " + lottoBonusNo + "]";   // 보너스 번호 출력
        // p1.innerHTML = "당첨번호";
        p1.innerHTML = ts;  // 3. 실제로 찍기
        var ts2 = "";
        ts2 = "당신의 로또 번호 : ";
        for (var i = 0; i < 6; i++) {
            ts2 = ts2 + (playerLotto[i] + " ");   //새 코드
        }
        p2.innerHTML = ts2;

        /************************************************/
        /* 플레이어 로또와 컴퓨터 로또를 비교하여 등수 처리 */
        /************************************************/
        var okCount = 0;
        for(var i=0;i<6;i++){    
            for(var j=0;j<6;j++){
                if(lotto[i] == playerLotto[j]){ // 플레이어 로또 중 컴퓨터 로또와 일치하는게 있으면            
                    okCount = okCount + 1;  // 당첨 카운트를 1 증가(맞춤 표시 1개 증가)
                    break;
                }
            }
        }
        p3.innerHTML = "맞춘 갯수:" + okCount;

        /************************************************/
        /* 등수 화면 표시 */
        /************************************************/
        switch (okCount) {
            case 3:
                p4.innerHTML = "5등입니다.";
                break;
            case 4:
                p4.innerHTML = "4등입니다.";
                break;
            case 5:
                // 보너스 번호를 이용 2등 , 3등 여부 가리기
                // 보너스 번호를 맞췄는지 찾아내기
                var hasBonusNo = false;
                for (var i = 0; i < 6; i++) {
                    if (playerLotto[i] == lottoBonusNo) { // 플레이어 로또 중 컴퓨터 로또 보너스 번호와 일치하는게 있으면                                
                        hasBonusNo = true;  // 찾았다고 표시 해두기
                    }
                }
                // 찾았는지 여부를 저장한 boolean 변수가 true 면 보너스 번호를 맞춘 것이므로 2등 처리, 아니면 3등 처리
                if (hasBonusNo) {
                    p4.innerHTML = "2등입니다.";
                } else {
                    p4.innerHTML = "3등입니다.";
                }
                break;
            case 6:
                p4.innerHTML = "1등입니다.";
                break;
            default:
                p4.innerHTML = "꽝입니다.";
                break;
        }
    }
}