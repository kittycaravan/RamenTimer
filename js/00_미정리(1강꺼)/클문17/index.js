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

    this.introduce = function(){
        alert(
            "회원id: " + this.id
            +"이름: " + this.name
            +"이메일:" + this.email
            +"생년월일:" + this.birth
            +"성별:" + this.sex
            +"TEL:" + this.tel
        )
    }
}

/* 회원가입 처리 */
function procReg(id, pw, name, email, birth, sex, tel){
    oMember = new Member();
    oMember.setMember(id, pw, name, email, birth, sex, tel);    
    oMember.introduce();    //값 확인
}

var sRegInfo = "";  // 회원가입 전, 후 alert에 찍을 회원정보를 담을 문자열 변수
var oMember;    // 회원객체 (임시로 한 유저 객체 정보만 저장함);

/* 입력한 회원정보 데이터를 체크 
*   실패 시 false 리턴
*   성공 시 true 리턴
*/
function checkRegInfo(id, pw, pwRe, name, email, birthY, birthM, birthD, sexStr, tel_1, tel_2, tel_3){
    sRegInfo = 
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
        + "tel_2:" + tel_2 + "\n"
        + "tel_3:" + tel_3 + "\n";

    alert(sRegInfo);

    //값 검사
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
    if(name.length < 2){
        alert("이름을 2자 이상 입력해주세요.");
        return false;
    }
    if(name.length > 20){
        alert("이름을 20자 이하로 입력해주세요.");
        return false;
    }
    if(email.length < 10){
        alert("이메일을 10자 이상 입력해주세요.");
        return false;
    }
    if(email.length > 20){
        alert("이메일을 20자 이하로 입력해주세요.");
        return false;
    }   
    if(birthY.length != 4){
        alert("생년을 4자로 입력해주세요.");
        return false;
    }    
    if(tel_1.length != 2 && tel_1.length != 3){
        alert("전화번호 앞자리의 번호를 두 자리 또는 세 자리로 입력해주세요.");
        return false;
    }
    if(tel_2.length != 3 && tel_2.length != 4){
        alert("전화번호 두번째 자리의 번호를 세 자리 또는 네 자리로 입력해주세요.");
        return false;
    }
    if(tel_3.length != 4){
        alert("전화번호 세번째 자리의 번호를 네 자리로 입력해주세요.");
        return false;
    }
    //암호1 2 비교하기
    if(pw != pwRe){
        alert("암호와 재입력 암호가 일치하지 않습니다.");
        return false;
    }
    return true;    //성공 시 return true;
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
        var sexStr = "";
        if(rSex[0].checked){
            sexStr = "M"
        } else {
            sexStr = "G"
        }        
        
        var isOk = checkRegInfo(
            iId.value
            ,iPw.value
            ,iPwRe.value
            ,iName.value
            ,iEmail.value
            ,iBirthY.value
            ,sBirthM.value
            ,sBirthD.value
            ,sexStr
            ,iTel_1.value
            ,iTel_2.value
            ,iTel_3.value
        )

        if(isOk == true){
            sRegInfo += "회원가입 되셨습니다. \n\n";
            alert(sRegInfo);
            
            //회원가입 처리
            procReg(
                iId.value
                ,iPw.value
                ,iName.value
                ,iEmail.value
                ,iBirthY.value + sBirthM.value + sBirthD.value
                ,sexStr
                ,iTel_1.value + iTel_2.value + iTel_3.value                
            )
        } else {
            return;
        }
    }   
}