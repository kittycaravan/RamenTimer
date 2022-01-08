function br(){
    document.write("<br>");
}

var c = {
    catName: "나비",
    age: 1,
    weight: 10
}

function Cat2(catName, age, weight){
    this.catName = catName;
    this.age = age;
    this.weight = weight;
}

window.onload = function () {
    // document.write(c.toString());
    br();
    document.write(c.catName);
    br();
    document.write(c.age);
    br();
    document.write(c.weight);   
    br();
    br();
    br();

    var cat = new Cat2("야옹이", 10, 20);
    var cat2 = new Cat2("냐옹이", 10, 20);
    document.write(cat.catName);
    br();
    document.write(cat.age);
    br();
    document.write(cat.weight);   
    
    //배열에 클래스들 넣기
    
    var classArray = [cat, cat2];

    //배열-클래스-변수 찍기
    var s = classArray[1].catName;
    br();
    br();
    br();
    document.write(s);
    
}