function singup_check() {
    
    const regexp_name     = /^[가-힣a-zA-Z]+$/; 
    const regexp_nickname = /^[가-힣a-zA-Z]+$/; 
    const regexp_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}/;  
    const regexp_phone    = /^(010|011|016|017|018|019)\d{3,4}\d{4}$/;
    const regexp_email    = /^(\w{1,20})+@(\w{1,20})+\.([a-zA-Z]{2,4}$)+$/;

    let name       = document.getElementById("name");
    let id         = document.getElementById("id");
    let pwd        = document.getElementById("pwd");
    let cnfirm_pwd = document.getElementById("cnfirm_pwd");
    let email      = document.getElementById("email");
    let phone      = document.getElementById("phone");

    const checkbox1 = document.getElementById('chk1');
    const checkbox2 = document.getElementById('chk2');

    if (!regexp_name.test(name.value)) {
        alert("이름은 한글 및 영문 대소문자만 가능합니다.");
        name.focus();
        return false;
    };

    if (!regexp_nickname.test(id.value)) {
        alert("아이디는 한글 및 영문 대소문자만 가능합니다.");
        id.focus();
        return false;   
    };

    if (!regexp_password.test(pwd.value)) {
        alert("비밀번호는 영문 대소문자/숫자 특수문자 포함 8자~15자 이어야 합니다.");
        pwd.focus();
        return false;   
    };
    
    if (cnfirm_pwd.value !== pwd.value) {
        alert("비밀번호와 일치하지 않습니다.");
        cnfirm_pwd.focus();
        return false;
    };

    if (!regexp_email.test(email.value)) {
        alert("이메일 형식에 따라주세요.");
        email.focus();
        return false;
    };

    if (!regexp_phone.test(phone.value)) {
        alert("-(하이폰)은 제외 하고 입력해주세요.");
        phone.focus();
        return false;
    };

    if (!checkbox1.checked) {
        alert("이용약관 및 개인정보 수집 동의체크 해야 가입이 가능합니다.");
        return false;
    };

    if (!checkbox2.checked) {
        alert("이용약관 및 개인정보 수집 동의체크 해야 가입이 가능합니다.");
        return false;
    };

    document.sign_form.submit();
}


