window.onload = function() {
    var image = document.getElementById("image");
    var random = Math.floor(Math.random() * 6) + 1;


    /* case 1: */
    image.src = "dice6_"+ random +".jpg";            

    /* case 2: */
    // switch(random) {
    //     case 1:
    //         // 자바스크립트 상에서 image태그의 src속성 먹이는 방법이 있을까요?
    //         image.src = "dice6_1.jpg";            
    //         break;
    //     case 2:
    //         image.src = "dice6_2.jpg";
    //         break;
    //     case 3:
    //         image.src = "dice6_3.jpg";
    //         break;
    //     case 4:
    //         image.src = "dice6_4.jpg";
    //         break;
    //     case 5:
    //         image.src = "dice6_5.jpg";
    //         break;
    //     case 6:
    //         image.src = "dice6_6.jpg";
    //         break;
    // }
}