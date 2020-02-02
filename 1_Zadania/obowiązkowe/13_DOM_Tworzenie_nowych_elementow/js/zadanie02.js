
function createRow() {
    var orderId = document.querySelector("#orderId").value;
    var item = document.querySelector("#item").value;
    var quantity = document.querySelector("#quantity").value;

    var row = document.createElement('tr'); 
    var col = document.createElement('td'); 
    var col2 = document.createElement('td'); 
    var col3 = document.createElement('td'); 
    row.appendChild(col); 
    row.appendChild(col2); 
    row.appendChild(col3); 
    col.innerHTML = orderId; 
    col2.innerHTML = item; 
    col3.innerHTML = quantity; 
    var table = document.getElementById("orders"); 
    table.appendChild(row); 
  }

document.querySelector("#addBtn").addEventListener("click", function() {
    createRow();
});