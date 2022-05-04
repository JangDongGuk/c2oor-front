const header = document.querySelector('header');
const nav    = document.querySelector('nav');
/* nav 에 마우스를 올리면 header 높이가  270으로 나가면 
header의 높이를 50으로 변경 */

// nav.addEventListener('mouseover', function(){
//     header.style.height = '270px';
// });

// nav.addEventListener('mouseout', function(){
//     header.style.height ='50px';
// });

const mainMenuList = document.querySelectorAll('.mainmenu > li');
const subMenu = document.querySelectorAll('.submenu');
const subMenuHeight = 0;
const headerHeight = header.offsetHeight;
/* 변수명 subMenuHeight 에 subMenu 중에서 가장 높이가 큰 요소의 높이를 구해서 저장 */

    for (const i = 0; i < mainMenuList.length; i++) {
        mainMenuList[i].addEventListener('mouseover', function() {
        /* 마우스가 올라가 그 요소의 자식요소(ul)의 높이를 변수명 subMenuHeight 저장하고 
        header의 높이를 headerHeight + subMenuHeight로 변경 */
        subMenuHeight = this.querySelector('ul').offsetHeight;
        header.style.height = headerHeight + subMenuHeight + 'px';
        });

        mainMenuList[i].addEventListener('mouseout', function(){
            header.style.height = headerHeight +'px';
        });
    }
    

