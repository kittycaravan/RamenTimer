var lotto = [0,0,0,0,0,0];

for(var i=0;i<6;i++){
    var r = Math.floor(Math.random() * 45 + 1);
    lotto[i] = r;
}

dw("당첨번호: ");
for(var i=0;i<lotto.length;i++){
    dw(lotto[i] + " ");
}