const S_size = document.querySelector('.S-size');
const M_size = document.querySelector('.M-size');
const L_size = document.querySelector('.L-size');

const CEO_S = document.getElementById('S_container');
const CEO_M = document.getElementById('M_container');
const CEO_L = document.getElementById('L_container');


const titleName_S = "S_container";
const titleName_M = "M_container";
const titleName_L = "L_container";

const Base_Color = "white";
const Other_Color = "darkgrey";

function S_Size_Click() {
    try{
        const S_color = S_size.style.backgroundColor
        
        if(S_color === Base_Color) {
            return S_size.style.backgroundColor = Other_Color, 
                   CEO_S.classList.toggle(titleName_S) 
        
        }
        return S_size.style.backgroundColor = Base_Color,
                CEO_S.classList.toggle(titleName_S)
        }
    catch(err) {
        console.log(err)
    }
}

function M_Size_Click() {
    try{
        const M_color = M_size.style.backgroundColor

        if(M_color === Base_Color) {
            return M_size.style.backgroundColor = Other_Color,
                   CEO_M.classList.toggle(titleName_M)
             
        }
        return  M_size.style.backgroundColor = Base_Color,
                CEO_M.classList.toggle(titleName_M)
    }
    catch(err) {
        console.log(err)
    }
}

function L_Size_Click() {
    try{
        const L_color = L_size.style.backgroundColor

        if(L_color === Base_Color) {
            return L_size.style.backgroundColor = Other_Color,
                   CEO_L.classList.toggle(titleName_L)
        }
        return  L_size.style.backgroundColor = Base_Color,
                CEO_L.classList.toggle(titleName_L)
    }
    catch(err) {
        console.log(err)
    }
}

function count(type) {
    try{
        const count_S = document.getElementById('count_S');
        const count_M = document.getElementById('count_M');
        const count_L = document.getElementById('count_L');

        let number_S = count_S.innerText
        let number_M = count_M.innerText
        let number_L = count_L.innerText

        const price_id = document.getElementById('price');
        const quantity = document.getElementById('quantity');

        
        if(type === 'plus_S') {
            number_S = parseInt(number_S)+1;    
        }

        if(type === 'minus_S') {
            if(number_S === '1') {
                return  alert('더 이상 내릴 수 없습니다.') 
            }
            number_S = parseInt(number_S)-1;
        }

        if(type === 'cansle_S') {
            S_size.style.backgroundColor = Base_Color,
            CEO_S.classList.toggle(titleName_S),
            number_S = 0;
        }

        if(type === 'plus_M') {
            number_M = parseInt(number_M)+1;
        }

        if(type === 'minus_M') {
            if(number_M === '1') {
                return  alert('더 이상 내릴 수 없습니다.') 
            }
            number_M = parseInt(number_M)-1;
        }

        if(type === 'cansle_M') {
            M_size.style.backgroundColor = Base_Color,
            CEO_M.classList.toggle(titleName_M),
            number_M = 0;
        }
        
        if(type === 'plus_L') {
            number_L = parseInt(number_L)+1;
        }

        if(type === 'minus_L') {
            if(number_L === '1') {
                return  alert('더 이상 내릴 수 없습니다.') 
            }
            number_L = parseInt(number_L)-1;
        }

        if(type === 'cansle_L') {
            L_size.style.backgroundColor = Base_Color,
            CEO_L.classList.toggle(titleName_L),
            number_L = 0;
        }

        count_S.innerText = number_S
        count_M.innerText = number_M
        count_L.innerText = number_L
  
        const sum = Number(number_S)+ Number(number_M) + Number(number_L)
        const total = (sum*15000).toLocaleString('ko-KR');
        price_id.innerText = "KRW " + total
        quantity.innerText = "(" + sum+"개"+")" 
    }
    catch(err) {
        console.log(err);
    }
};

// window.onload = function detail_data() {
//     try{
//         fetch('http://localhost:3000/production/production/1')
//         .then(res => res.json())
//         .then(res=> {
//             console.log(res)
//             if(res.message == 'success') {
                
//                 const img_1 = document.getElementById('T-1_img');
//                 const prices = document.getElementById('T-price');
//                 const T_name = document.getElementById('T-name');
                
//                 const img = res.result.img_url
//                 const name = res.result.name
//                 const price = res.result.price
            
//                 T_name.innerText = name
//                 prices.innerText = "KRW "+ price
//                 img_1.src = img
//             }
//         })
//         return

//     }catch(err) {
//         console.log(err);
//     }
// };