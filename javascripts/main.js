const mainList1 = document.querySelector('.mainList1');
const mainList2 = document.querySelector('.mainList2');
const mainList3 = document.querySelector('.mainList3');
const mainList4 = document.querySelector('.mainList4');

const mainMenuList1 = document.querySelectorAll('.mainList1');
const mainMenuList2 = document.querySelectorAll('.mainList2');
const mainMenuList3 = document.querySelectorAll('.mainList3');
const mainMenuList4 = document.querySelectorAll('.mainList4');


const subMenu = document.querySelectorAll('.sub');
let subMenuHeight = 0;
const headerHeight = mainList1.offsetHeight;


    for (var i = 0; i < mainMenuList1.length; i++ ) {
        const submenu1 = document.getElementById('submenu1')
        mainMenuList1[i].addEventListener('mouseover', function() {
            
            subMenuHeight = submenu1.offsetHeight;  
            mainList1.style.height = headerHeight + subMenuHeight + 'px';
            
        });
        mainMenuList1[i].addEventListener('mouseout', function(){
            mainList1.style.height = headerHeight +'px';

            
        });
    }

    for (var i = 0; i < mainMenuList2.length; i++ ) {
        mainMenuList2[i].addEventListener('mouseover', function() {
            const submenu2 = document.getElementById('submenu2')
            subMenuHeight = submenu2.offsetHeight;  
            mainList2.style.height = headerHeight + subMenuHeight + 'px';
        });
        mainMenuList2[i].addEventListener('mouseout', function(){
            mainList2.style.height = headerHeight +'px';
        });
    }

    for (var i = 0; i < mainMenuList3.length; i++ ) {
        mainMenuList3[i].addEventListener('mouseover', function() {
            const submenu3 = document.getElementById('submenu3')
            subMenuHeight = submenu3.offsetHeight;  
            mainList3.style.height = headerHeight + subMenuHeight + 'px';
        });
        mainMenuList3[i].addEventListener('mouseout', function(){
            mainList3.style.height = headerHeight +'px';
        });
    }

    for (var i = 0; i < mainMenuList4.length; i++ ) {
        mainMenuList4[i].addEventListener('mouseover', function() {
            const submenu4 = document.getElementById('submenu4')
            subMenuHeight = submenu4.offsetHeight;  
            mainList4.style.height = headerHeight + subMenuHeight + 'px';
        });
        mainMenuList4[i].addEventListener('mouseout', function(){
            mainList4.style.height = headerHeight +'px';
        });
    };