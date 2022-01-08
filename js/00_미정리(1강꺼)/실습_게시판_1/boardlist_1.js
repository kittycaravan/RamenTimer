var board_list_1;
var board_list_2;
var board_list_3;

var board_con_post_1;
var board_con_post_2;
var board_con_post_3;

var currentOpenPost = -1;

function closeAllPost(){
    board_con_post_1.style.display = "none";
    board_con_post_2.style.display = "none";
    board_con_post_3.style.display = "none";
}



function togglePost1(){
    if(currentOpenPost == -1){
        currentOpenPost = 1;
        board_con_post_1.style.display = "block";
    } else if(currentOpenPost == 1) {
        board_con_post_1.style.display = "none";
        currentOpenPost = -1;
    } else {
        closeAllPost();
        board_con_post_1.style.display = "block";
        currentOpenPost = 1;
    }
}
function togglePost2(){
    if(currentOpenPost == -1){
        currentOpenPost = 2;
        board_con_post_2.style.display = "block";
    } else if(currentOpenPost == 2) {
        board_con_post_2.style.display = "none";
        currentOpenPost = -1;
    } else {
        closeAllPost();
        board_con_post_2.style.display = "block";
        currentOpenPost = 2;        
    }
}
function togglePost3(){
    if(currentOpenPost == -1){
        currentOpenPost = 3;
        board_con_post_3.style.display = "block";
    } else if(currentOpenPost == 3) {
        board_con_post_3.style.display = "none";
        currentOpenPost = -1;
    } else {
        closeAllPost();
        board_con_post_3.style.display = "block";
        currentOpenPost = 3;
    }    
}

window.onload = function () {
    board_list_1 = document.getElementById("board_list_1");
    board_list_2 = document.getElementById("board_list_2");
    board_list_3 = document.getElementById("board_list_3");

    board_con_post_1 = document.getElementById("board_con_post_1");
    board_con_post_2 = document.getElementById("board_con_post_2");
    board_con_post_3 = document.getElementById("board_con_post_3");

    board_list_1.onclick = togglePost1;
    board_list_2.onclick = togglePost2;
    board_list_3.onclick = togglePost3;
}

