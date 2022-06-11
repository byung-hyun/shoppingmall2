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

// 회원 삭제 (클릭해서 삭제하는게 아니라 밑에서 부터 삭제라 하자가 있음)
function deleteRow(rownum) {
    const table = document.getElementById('list');
    const newRow = table.deleteRow(rownum);
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

// 회원 정보 수정
let table = document.getElementById('list');

let editingTd;

table.onclick = function(event) {

  
    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {
        finishTdEdit(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
        finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return; 

        makeTdEditable(target);
    }
                
};

function makeTdEditable(td) {
    editingTd = {
    elem: td,
    data: td.innerHTML
    };

    td.classList.add('edit-td'); 

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">완료</button><button class="edit-cancel">취소</button></div>'
        );
}

function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data;
    }
    td.classList.remove('edit-td');
    editingTd = null;
}