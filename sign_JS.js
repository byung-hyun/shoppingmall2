// 회원 등록 시 목록에 추가
function add() {
    const table = document.getElementById("list");
        
    const Newline = table.insertRow();
    
    const Cell1 = Newline.insertCell(0);
    const Cell2 = Newline.insertCell(1);
    const Cell3 = Newline.insertCell(2);
      
    
    
    Cell1.innerText = document.getElementById("name").value;
    Cell2.innerText = document.getElementById("ID").value;
    Cell3.innerText = document.getElementById("password").value;
}

// 회원 목록에서 회원 검색
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("list");
    tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }