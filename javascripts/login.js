function login() {
    try{

        const id = document.getElementById("loginid").value;
        const pwd = document.getElementById("pwd").value;

        fetch('http://localhost:3000/signup/login',  { 
            method:"POST",
            headers: {
                "content-Type":"application/json"
            },
            body: JSON.stringify({
                nickname: id,
                password: pwd
            })
        })
        .then(res => {
            if(res.status == 201) {
                return res.json()
            }
            return alert("회원 멤버가 아닙니다.")
        })
        .then(data => {
            if(data.message == "success") {
                return   document.cookie = 'token' + '=' + data['token'],
                window.sessionStorage.setItem("user_id", data.user_id),
                location.replace('http://127.0.0.1:5500/html/main2.html')
            }
        })
        .catch(err => {
            console.log('Fetch err', err);
        });   
    } catch(err) {
        console.log(err)
    }
}

function logout() {
    try{
        const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token'))
        .split('=')[1];

        addEventListener('click', function(){
            console.log(token != null)
            
            if(token != null) {
                return  Deletetoken(),
                location.href = 'main.html';
            }
        })
    }catch(err) {
        console.log(err)
    }
}

function Deletetoken() {
    document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=127.0.0.1; path=/html;'
}