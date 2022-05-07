const header = document.querySelector('header');

var mainMenuList = document.querySelectorAll('.mainmenu > li');
var subMenu = document.querySelectorAll('.submenu');
var subMenuHeight = 0;
var headerHeight = header.offsetHeight;


    for (var i = 0; i < mainMenuList.length; i++ ) {
        mainMenuList[i].addEventListener('mouseover', function() {
        subMenuHeight = this.querySelector('ul').offsetHeight;
        header.style.height = headerHeight + subMenuHeight + 'px';
        });

        mainMenuList[i].addEventListener('mouseout', function(){
            header.style.height = headerHeight +'px';
        });
    }

/* 변수명 subMenuHeight 에 subMenu 중에서 가장 높이가 큰 요소의 높이를 구해서 저장 */

/* 마우스가 올라가 그 요소의 자식요소(ul)의 높이를 변수명 subMenuHeight 저장하고 
        header의 높이를 headerHeight + subMenuHeight로 변경 */

