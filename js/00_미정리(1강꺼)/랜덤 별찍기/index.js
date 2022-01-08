var sPlayerName = "";
var sPlayerHp = 10;
var sMobHp = 3;

var sStar = "*";

function runWorld(){
    displayIntro();
    // displayRandomStars();
    displayStarLines();
    displayOutro();
}

function displayIntro(){
    document.write("<hr><h1>랜덤별찍기</h1><hr>");
}

function displayOutro(){
    document.write("<hr><h1>끝</h1><hr>");
}

function hello(str){
    var n = Math.floor(Math.random()*10)+1;    
    alert("헬로 "+str+" 월드! :"+n);
    console.log(1+2);
}

function getRandom(){
    var n = Math.floor(Math.random()*10)+1;        
    return n;
}

function displayStar(){
    document.write(sStar);
}

function displayEnter(){
    document.write("<br>");
}

function displayRandomStars(){
    var count = getRandom();
    for(var i = 1 ; i < count ; i ++) {
        displayStar();
    }
    displayEnter();
}

function displayStarLines(){
    for(var i = 0; i < 100 ; i ++ ){
        displayRandomStars();
    }
}

// function runWorld(){
//     while(1<0){
        
//     }
// }


/***************************************/
runWorld();
/***************************************/