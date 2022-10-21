function Review() {
    try{
        const first_text = document.getElementById('review_text')
        const text = document.querySelector('textarea');
        const user_id = window.sessionStorage.getItem("user_id");
        const data = {
            user_id : user_id,
            text: text.value,
        }
    
        fetch('http://localhost:3000/review/review', {
            method: "POST",
            headers: { "content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.message = "success") {
                const review_bar = document.getElementsByClassName("Review")[0];
                const box = document.createElement("div")
                const comment = document.createElement("div")
                const nickname = document.createElement("div")
                const span = document.createElement("span")
                const review_text = document.createElement("div")
                const textarea =  document.createElement("textarea")
                const botton = document.createElement("div")
                const input1 = document.createElement("input")
                const input2 = document.createElement("input")
                const input3 = document.createElement("input")
                
                comment.classList.add('bb')
                box.classList.add('box')
                nickname.classList.add('user_nickname')
                span.classList.add('time')
                review_text.classList.add('Review_text')
                textarea.classList.add('texttarea')
                botton.classList.add("cc")
                input1.classList.add("button_edit1")
                input2.classList.add("button_edit2")
                input3.classList.add("button_edit3")

                comment.id = res.review_id
                input1.id = res.review_id
                input2.id = res.review_id
                

                textarea.setAttribute('disabled', 'disabled')

                input1.setAttribute('onclick', 'update_div(this.id)')
                input1.setAttribute('type','button')

                input2.setAttribute('type','button')
                input2.setAttribute('onclick', 'delete_review(this.id)')

                input3.setAttribute('type','button')
        
                input1.setAttribute('value','수정하기')
                input2.setAttribute('value','삭제')
                input3.setAttribute('value','댓글달기')
        
                const a = review_bar.appendChild(comment)
                const b = a.appendChild(box)
                b.appendChild(nickname)
                b.appendChild(span)
                const c =  a.appendChild(review_text)
                c.appendChild(textarea)
        
                const d = a.appendChild(botton)
                d.appendChild(input1)
                d.appendChild(input2)
                d.appendChild(input3)
                
                window.localStorage.setItem("review_id", res.review_id)
                nickname.innerText = res.nickname
                span.innerText = res.createdat
                textarea.innerHTML = text.value
                first_text.value = ''
            }
        })
    } catch(err) {
        console.log(err)
    };
};

function update_review(index) {
    try{
        
        const btn = document.getElementById(eval(index))
        const frist_text = btn.getElementsByClassName('texttarea')[0]
        const text = btn.getElementsByClassName('update')[0]
        const user_id = window.sessionStorage.getItem("user_id");
        const review_id = window.localStorage.getItem("review_id");
        const span = btn.getElementsByClassName('time')[0]

        const data = {
            user_id : user_id,
            text: text.value,
            review_id : review_id
        }
        fetch('http://localhost:3000/review/review-patch', { 
            method:'PATCH',
            headers: { "content-Type":"application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res =>  {
            if(res.message = "success") {
                frist_text.innerHTML = text.value
                span.innerText = res.updaedat
                const update_box = btn.getElementsByClassName("delete")[0]
                const parent = document.getElementById(eval(index))
                update_box.remove(parent)

            }
        });
    }catch(e) {
        console.log(e);
    };
};

function update_div(index) {
    try{
        const a = index

        const btn = document.getElementById(eval(a))


        btn.addEventListener('click',function(e){

            const btn_id = e.target.id
            const btn_index = document.getElementById(eval(btn_id)) 
            const node = e.target.parentElement.parentElement
            const index = node.id

            const btn_string = toString(btn_index)
       
            function create_div(){
                const update_box = document.createElement("div");
                update_box.id = 'update_box'
                update_box.classList.add("delete")

                const update_text = document.createElement("textarea");
                update_text.id = 'update_text'
    
                const update_reviewbox = document.createElement("div");
                update_reviewbox.id = 'update_reviewbox'
    
                const update_button1 = document.createElement("input");
                const update_button2 = document.createElement("input");
                update_button1.id = index
                update_button2.id = index

                update_text.classList.add('update')
                
                update_button1.setAttribute('onclick', 'update_review(this.id)')
                update_button1.setAttribute('type','button')
                update_button2.setAttribute('type','button')
    
                update_button1.setAttribute('value','수정하기')
                update_button2.setAttribute('value','닫기')
    
                update_button2.setAttribute('onclick', 'delete_text(this.id)')
    
                const parent = document.getElementById(eval(index))
                const a = parent.appendChild(update_box)
                a.appendChild(update_text)
                const b = a.appendChild(update_reviewbox)
                
                b.appendChild(update_button1)
                b.appendChild(update_button2)
            }
            if(typeof(btn_string) === typeof(index) ) {
                create_div(),
                btn.removeEventListener('click',arguments.callee)
            }
        });
    }catch(e) {
        console.log(e)
    };
};

function delete_text(index) {
    try{
        const btn_index = index
        const btn = document.getElementById(eval(btn_index))
        const update_box = btn.getElementsByClassName("delete")[0]
        const parent = document.getElementById(eval(index))

        update_box.remove(parent)
    }catch(e) {
        console.log(e)
    };
};

function delete_review(index) {
    try{
        const btn_index = index
        const btn = document.getElementById(eval(btn_index))
        const parent = document.getElementsByClassName("Review")[0];
        
        btn.remove(parent)
        const text = btn.getElementsByClassName('texttarea')[0]
        const user_nick = btn.getElementsByClassName('user_nickname')[0]
        const user_id = window.sessionStorage.getItem("user_id");
        const data = {
            text: text.value,
            user_nickname: user_nick.innerText,
            user_id : user_id
        }

        fetch('http://localhost:3000/review/review-delete', {
            method:"DELETE",
            headers: { "content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => {
            if(!res.ok) {
                console.log('응답이 올바르지 않습니다.')
            }
        });
    }catch(e) {
        console.log(e)
    };
};