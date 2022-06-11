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