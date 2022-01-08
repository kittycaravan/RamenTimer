window.onload = function () {
    alert("고양이");
    var catAge = 10;
    var catType = "동네고양이";
    var catName = "야옹이";
    var result =
        "고양이나이:" + catAge + "<br>"
        + "고양이종류:" + catType + "<br>"
        + "고양이이름:" + catName;


        var catP = document.getElementById("cat");
        catP.innerHTML = result;
    
}

