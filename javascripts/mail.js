function sendemail() {
    const email = document.getElementById("email");
    const data = email.value
    
    const regexp_email    = /^(\w{1,20})+@(\w{1,20})+\.([a-zA-Z]{2,4}$)+$/;
    
    if (!regexp_email.test(data)) {
        alert("이메일 형식에 따라주세요.");
        return false;
    }

    if (regexp_email.test(data)) {
    const data2 = { email: data }
    console.log(data2)
    checkNumPopup()
    timer()
    hiddens()
    
    alert("인증번호가 발송 되었습니다.");

    fetch('http://localhost:3000/signup/mail', {
        method:"POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            email: data2
        }),
    })
    .then(res => res.json())
    .then(data =>{
        sessionStorage.setItem("emailNum", data.emailNum)
    }).catch(err => { 
        console.log('Fetch Error', err);
    });
    }
};

function emailNum() {
    const emailNum = document.getElementById("emailNum");
    const email = document.getElementById("email");
    
    fetch('http://localhost:3000/signup/mailcheck', {
        method:"POST",
        headers: {
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            emailNum: emailNum.value,
            email:email.value
        }),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    }).catch(err => { 
        console.log('Fetch Error', err);
    });
};

function timer() {

    let time = 180000;
    let min = 3;
    let sec = 60;
    
    let timerId = setInterval(function(){
        time = time - 1000;
        min = time/(60*1000);
        sec = sec-1
        let sec2 = sec < 10 ? "0" + sec : sec

        const display = document.querySelector("span")
        const storage = JSON.parse(sessionStorage.getItem("emailNum"))
        const Num = document.getElementById("emailNum")
        const emailNums = Num.value

        if(sec > 0) {
            display.textContent = Math.floor(min) + ":" + sec2;
        }

        if(sec === 0){
            sec = 60 // 초 시간이 0이되면 다시 sec 설정을 60으로 맞춰주면 1초마다 함수가 실행하니 위에 if (sec> 0) 조건이 설립되어 다시 초가 보인다.
            display.textContent = Math.floor(min) + ":" + "00";
        }

        if (emailNums == storage) {
            return  clearInterval(timerId), 
                    clearInterval(timeout)        
        } 
    }, 1000);

    const timeout =setTimeout(function(){
    clearInterval(timerId),alert("인증시간이 초과 하였습니다.")
    },180000)
}


function checkNumPopup() {
    window.open("mailpopup3.html", "인증번호를 입력해주세요", "top=100px,left=200px,width=400px,height=250px;");
  }

function hiddens() {
    const span = document.querySelector("span")
    const timer_id = document.getElementById("Timer")
    if (timer_id.click) {
        span.style.visibility = 'visible';
    }
}

function hiddens2() {
    const span = document.querySelector("span")
    const timer_id = document.getElementById("Timer")
    if (timer_id.click) {
        span.style.visibility = 'hidden';
    }
}

function emailNum_check() {
    const storage = JSON.parse(sessionStorage.getItem("emailNum"))
    const Num = document.getElementById("emailNum")
    const emailNums = Num.value
   
    if(emailNums == storage) {
        return  alert("인증 확인되었습니다."),
                hiddens2()    
    }    
    alert("인증번호가 다릅니다. 다시 확인요청 바랍니다.")
}