
function popup1() {
    window.open("popup1.html", "개인동의약관", "top=100px,left=200px,width=800px,height=600px;");
}

function popup2() {
    window.open("popup2.html", "개인동의약관", "top=100px,left=200px,width=800px,height=600px;");
}


function checkSelectAll(checkbox)  {
    const selectall = document.querySelector('input[name="chkall"]');

    if(checkbox.checked === false)  {
    selectall.checked = false;
    }
  }
  
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('chk');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    })
  }
