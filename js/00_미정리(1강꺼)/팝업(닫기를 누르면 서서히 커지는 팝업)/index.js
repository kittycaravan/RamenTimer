function closePopup() {

    //팝업창 ( <div id="popup"> ) 을 찾고
    var popupWindow = document.getElementById("popup");

    //찾은 팝업 창을 닫기(라고 쓰고 안보이게 처리라고 읽는다.)
    // popupWindow.style.display = "none";

    popupWindow.style.color = "blue";

    popupWindow.style.height = "600px";

    popupWindow.style.width = "600px";

    popupWindow.style.background = "gray";

    popupWindow.style.transitionProperty = "width, height";
    popupWindow.style.transitionDuration = "2s";


}