function singup_check() {
    try{
        const regexp_name     = /^[가-힣a-zA-Z]+$/; 
        const regexp_nickname = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/; 
        const regexp_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}/;  
        const regexp_phone    = /^(010|011|016|017|018|019)\d{3,4}\d{4}$/;
        const regexp_email    = /^(\w{1,20})+@(\w{1,20})+\.([a-zA-Z]{2,4}$)+$/;

        const name       = document.getElementById("name");
        const nickname   = document.getElementById("nickname");
        const pwd        = document.getElementById("password");
        const cnfirm_pwd = document.getElementById("cnfirm_pwd");
        const email      = document.getElementById("email");
        const emailNum   = document.getElementById("emailNum");
        const phone      = document.getElementById("phone");

        const checkbox1 = document.getElementById('chk1');
        const checkbox2 = document.getElementById('chk2');

        if (!regexp_name.test(name.value)) { 
            return alert("이름은 한글 및 영문 대소문자만 가능합니다."), name.focus();
        };
        

        if (!regexp_nickname.test(nickname.value)) {
            return alert("아이디는 한글/영문/대소문자/최소 2이상~10이하 가능합니다."), nickname.focus();   
        };
    

        if (!regexp_password.test(pwd.value)) { 
            return alert("비밀번호는 영문 대소문자/숫자 특수문자 포함 8자~15자 이어야 합니다."), pwd.focus();   
        };
        
        if (cnfirm_pwd.value !== pwd.value) { 
            return alert("비밀번호와 일치하지 않습니다."), cnfirm_pwd.focus();
        };
        
        if (!regexp_email.test(email.value)) { 
            return alert("이메일 형식에 따라주세요."), email.focus();
        };
    
        if(sessionStorage.getItem("emailNum") != emailNum.value) {  
            return alert("이메일 인증번호가 올바르지 않습니다."), emailNum.focus();
        }
        
        if (!regexp_phone.test(phone.value)) { 
            return alert("-(하이폰)은 제외 하고 숫자만 입력해주세요."), phone.focus();
        };
        
        if (!checkbox1.checked) {
            return alert("이용약관 및 개인정보 수집 동의체크 해야 가입이 가능합니다.");   
        };
        
        if (!checkbox2.checked) {
            return alert("이용약관 및 개인정보 수집 동의체크 해야 가입이 가능합니다.");
        };
        
        const singupData   = {
            name: document.getElementById("name").value,
            nickname: document.getElementById("nickname").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        }

        fetch('http://localhost:3000/signup/sing', {
            method: "POST",
            headers: { 
                "content-Type": "application/json"
            },
            body: JSON.stringify(singupData)
        })
        .then(res => res.json()) 
        .then(res => {
            
            if(res.message == "success") {
                return  location.replace('http://127.0.0.1:5500/html/login.html')
            }
        })
        .catch(err => {
            console.log('Fetch err',err);
        });
    } catch(e){
        console.log(e)
    };
};


