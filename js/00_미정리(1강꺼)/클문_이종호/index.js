// 아이디 비번 비번확인 이름 이메일 생일 성별 전화번호
// input_id input_pw1 input_pw2 input_name input_email input_birthday input_man input_woman input_phone(1, 2, 3)

function Member(id, pw, name, email, birthday, gender, phone) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.email = email;
    this.birthday = birthday;
    this.gender = gender;
    this.phone = phone;
}

obj = new Member("goott123", "1q2w3e4r", "홍길동", "hello@hello.com", "2010-01-01", "남성", "010-0000-0000");
obj2 = new Member("goott456", "1q2w3e4r!@", "김철수", "world@world.com", "2010-01-02", "남성", "010-1111-1111");
obj3 = new Member("goott789", "1q2w3e4r#$", "안영희", "javascript@javascript.com", "2010-01-03", "여성", "010-2222-2222");

var list = [obj, obj2, obj3];

var input_id;
var input_pw1;
var input_pw2;
var input_name;
var input_email;
var input_birthday;
var input_man;
var input_woman;
var input_phone1;
var input_phone2;
var input_phone3;

var id_dup_test_btn;
var submit_btn;
var reset_btn;

var dup_pass = false;
var dup_pass_value;

var member_join_area;

window.onload = function() {

    var ta = [1,2,3];
    ta[3]=4;
    alert(ta[0]);
    alert(ta[1]);
    alert(ta[2]);
    alert(ta[3]);



    input_id = document.getElementById("input_id");
    input_pw1 = document.getElementById("input_pw1");
    input_pw2 = document.getElementById("input_pw2");
    input_name = document.getElementById("input_name");
    input_email = document.getElementById("input_email");
    input_birthday = document.getElementById("input_birthday");
    input_man = document.getElementById("input_man");
    input_woman = document.getElementById("input_woman");
    input_phone1 = document.getElementById("input_phone1"); // new
    input_phone2 = document.getElementById("input_phone2"); // new
    input_phone3 = document.getElementById("input_phone3"); // new

    id_dup_test_btn = document.getElementById("id_dup_test_btn");
    id_dup_test_btn.onclick = dupTest;

    submit_btn = document.getElementById("submit_btn");
    submit_btn.onclick = submit;

    reset_btn = document.getElementById("reset_btn");

    member_join_area = document.getElementById("table");
}

function dupTest() {
    var input_id_value = input_id.value;

    if(input_id_value.length == 0) {
        alert("아이디를 입력해주세요");
        dup_pass = false;
    }
    else if(input_id_value.length < 6 || input_id_value.length > 12) {
        alert("아이디는 6자 이상 12자 이하여야 합니다");
        dup_pass = false;
    }
    else {
        var length = list.length;
        var i;

        for(i = 0; i < length; ++i) {
            if(list[i].id == input_id_value) {
                break;
            }
        }

        if(i == length) {
            alert(input_id_value + "는 사용 가능한 아이디입니다");
            dup_pass = true;
            dup_pass_value = input_id_value;
        }
        else {
            alert("이미 사용 중인 아이디 입니다");
            dup_pass = false;
        }
    }
}


function submit() {
    var input_id_value = input_id.value;
    var input_pw1_value = input_pw1.value;
    var input_pw2_value = input_pw2.value;
    var input_name_value = input_name.value;
    var input_email_value = input_email.value;
    var input_birthday_value = input_birthday.value;
    var input_man_value = input_man.checked; // boolean
    var input_woman_value = input_woman.checked; // boolean
    var input_gender_value;
    var input_phone1_value = input_phone1.value;
    var input_phone2_value = input_phone2.value;
    var input_phone3_value = input_phone3.value;

    if(input_id_value.length > 0 && input_pw1_value.length > 0 && input_pw2_value.length > 0 && input_name_value.length > 0 && input_email_value.length > 0 && input_birthday_value.length > 0) {
        if(input_man_value ^ input_woman_value) {
            if(input_man_value) {
                input_gender_value = "남성";
            }
            else {
                input_gender_value = "여성";
            }

            if(dup_pass && dup_pass_value == input_id_value) {
                if(input_pw1_value.length > 5 && input_pw1_value.length < 16) {
                    if(input_pw1_value == input_pw2_value) {
                        if(input_name_value.length > 1 && input_name_value.length < 21) {
                            if(/^[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-zA-Z]{2,3}$/.test(input_email_value)) {
                                if(/^01(0|1|[6-9])$/.test(input_phone1_value) && /^[0-9]{4}$/.test(input_phone2_value) && /^[0-9]{4}$/.test(input_phone3_value)) {
                                    member_join_area.style.display = "none";
                                    submit_btn.style.display = "none";
                                    reset_btn.style.display = "none";
                                    
                                    alert(
                                        "아이디 : " + input_id_value + "\n" +
                                        "이름 : " + input_name_value + "\n" +
                                        "이메일 : " + input_email_value + "\n" +
                                        "생년월일 : " + input_birthday_value + "\n" +
                                        "성별 : " + input_gender_value + "\n" +
                                        "전화번호 : " + input_phone1_value + input_phone2_value + input_phone3_value
                                    );
    
                                    new Member(input_id_value, input_pw1_value, input_name_value, input_email_value, input_birthday_value, input_gender_value, (input_phone1_value + input_phone2_value + input_phone3_value));
                                }
                                else {
                                    alert("올바른 전화번호 형식이 아닙니다");
                                }
                            }
                            else {
                                alert("올바른 이메일 형식이 아닙니다");
                            }
                        }
                        else {
                            alert("이름은 2자 이상 20자 이하여야 합니다");
                        }
                    }
                    else {
                        alert("비밀번호가 일치하지 않습니다");
                    }
                }
                else {
                    alert("비밀번호는 6자 이상 15자 이하여야 합니다");
                }
            }
            else {
                alert("아이디 중복 검사를 해주세요");
            }
        }
        else {
            alert("항목을 모두 입력하세요");
        }
    }
    else {
        alert("항목을 모두 입력하세요");
    }
}