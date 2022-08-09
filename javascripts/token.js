function token() {
    try{
        
        const tokenCheck = document.cookie.match('token')
        console.log(tokenCheck)

        if(tokenCheck == null) {
            return alert("로그인 확인 바랍니다.")
        }
        const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token'))
        .split('=')[1];
    
        fetch('http://localhost:3000/jwt/token' ,{
            headers: { authorization : token }
        })
        .then(res => {
            if(res.status == 201) {
                return res.json()
            }
            return alert("다시 로그인 바랍니다.")
        })
        .then(data => {
            console.log(data.message)
            if(data.message == "success") {
                return location.href = "outwear.html"
           }
        })
        .catch((error) => console.log("error:", error));
        
    }catch (err) {
        console.log(err)
    }
}