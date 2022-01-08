function Cat(catName, age, weight){
    this.catName = catName;
    this.age = age;
    this.weight = weight;

    /* 클래스 내 함수 선언하는 법 */
    this.introduce = function(){  // 선언 시에는 꼭 this.모모 라고 해야함.
        dw("고양이이름: " + catName + " 나이:" + age + " 무게:" + weight); br();   // 클래스 함수 내에서 클래스 변수 쓸 때는 this 안해도 됨.
    }
}

window.onload = function () {

    var kitty = new Cat("키티",2,10);   // Cat 클래스 kitty 객체 선언. Cat 클래스 생성자 함수에 (이름, 나이, 몸무게) 를 넣어 객체 생성 함.
    var kitte = new Cat("키테",3,5);   // Cat 클래스 kitty 객체 선언. Cat 클래스 생성자 함수에 (이름, 나이, 몸무게) 를 넣어 객체 생성 함.

    kitty.introduce();    // 클래스 객체 함수 호출
    kitte.introduce();    // 클래스 객체 함수 호출
    
}