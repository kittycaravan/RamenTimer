window.onload = function () {

function test(){
    alert("야옹이");
}

    var pTag = document.getElementById("test");
    // pTag.innerHTML = "";
    pTag.innerHTML = "<img src='dice6_1.jpg'>";
    pTag.addEventListener("mouseover",test,false);
}

