/* 클래스 - 회원정보  */
function Member(){
    this.id = "";
    this.pw = "";
    this.name = "";
    this.email = "";
    this.birth = "";
    this.sex = "";
    this.tel = "";

    this.setMember = function(id, pw, name, email, birth, sex, tel){
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.sex = sex;
        this.tel = tel;
    }
}

/* 회원가입 처리 */
function procReg(id, pw, name, email, birth, sex, tel){

}

/* 입력한 회원정보 데이터를 체크 
*   실패 시 false 리턴
*   성공 시 true 리턴
*/
function checkRegInfo(id, pw, pwRe, name, email, birthY, birthM, birthD, sex, tel_1, tel_2, tel_3){
    //test 출력하기
    var sexStr = "";
    if(sex[0].checked){
        sexStr = "M"
    } else {
        sexStr = "G"
    }
    alert(
        "id:"+id+"\n"
        +"pw:"+pw+"\n"
        +"pwRe:"+pwRe+"\n"
        +"name:"+name+"\n"
        +"email:"+email+"\n"
        +"birthY:"+birthY+"\n"
        +"birthM:"+birthM+"\n"
        +"birthD:"+birthD+"\n"
        +"sex:"+sexStr+"\n"
        +"tel_1:"+tel_1+"\n"
        +"tel_2:"+tel_2+"\n"
        +"tel_3:"+tel_3+"\n"
    )

    //todo 값 검사
    if(id.length < 6){
        alert("아이디를 6자 이상 입력해주세요.");
        return false;
    }
    if(id.length > 12){
        alert("아이디를 12자 이하로 입력해주세요.");
        return false;
    }
    if(pw.length < 6){
        alert("암호를 6자 이상 입력해주세요.");
        return false;
    }
    if(pw.length > 15){
        alert("암호를 15자 이하로 입력해주세요.");
        return false;
    }
    if(pwRe.length < 6){
        alert("암호(재입력)를 6자 이상 입력해주세요.");
        return false;
    }
    if(pwRe.length > 15){
        alert("암호(재입력)를 15자 이하로 입력해주세요.");
        return false;
    }
    

    //todo 성공 시 return true;
    // return true;
}

window.onload = function () {
    var iId = document.getElementById("id");
    var iPw = document.getElementById("pw");
    var iPwRe = document.getElementById("pw_re");
    var iName = document.getElementById("name");
    var iEmail = document.getElementById("email");
    var iBirthY = document.getElementById("birth_y");
    var sBirthM = document.getElementById("birth_m");
    var sBirthD = document.getElementById("birth_d");
    var rSex = document.getElementsByName("sex");   // rSex[1].checked
    var iTel_1 = document.getElementById("tel_1");
    var iTel_2 = document.getElementById("tel_2");
    var iTel_3 = document.getElementById("tel_3");

    var iSubmit = document.getElementById("submit");
    // var form = document.getElementById("form"); //form.submit();

    iSubmit.onclick = runForm;
    function runForm(){        
        var isOk = checkRegInfo(
            iId.value
            ,iPw.value
            ,iPwRe.value
            ,iName.value
            ,iEmail.value
            ,iBirthY.value
            ,sBirthM.value
            ,sBirthD.value
            ,rSex
            ,iTel_1.value
            ,iTel_2.value
            ,iTel_3.value
        )

        if(isOk == true){
            //todo 회원가입 처리
            
        } else {
            return;
        }
    }   
}