var fullName = null;
var birthday = null;
var address = null;
var mail = null;
var id = 0;
const col = ["", "", "", ""];
const rows = [];

function addUser() {
    // input values
    fullName = document.querySelector(".user-info input:nth-of-type(1)").value;
    birthday = document.querySelector(".user-info input:nth-of-type(2)").value;
    address = document.querySelector(".user-info input:nth-of-type(3)").value;
    mail = document.querySelector(".user-info input:nth-of-type(4)").value;
    console.log("full name" + fullName)
    console.log("birthday" + birthday)
    console.log("address" + address)
    console.log("mail" + mail)
    console.log(id);

    // create new row
    var newRow = document.createElement("tr");
    id++;
    newRow.id = id;
  
    // add values to the row
    newRow.innerHTML = "<td class='row'>" + id + "</td>" +
                       "<td class='row'>" + fullName + "</td>" +
                       "<td class='row'>" + birthday + "</td>" +
                       "<td class='row'>" + address + "</td>" +
                       "<td class='row'>" + mail + "</td>";
  
    // add row to the table 
    document.querySelector(".table tbody").appendChild(newRow);
   
  }
  function editUser() {
    // ask user to select which row wanna edit
    var selectedRowId = document.querySelector(".inputt").value;
  
    // find the selected row in the table
    var selectedRow = document.querySelector(".table tbody tr:nth-of-type(" + selectedRowId + ")");
  
    // fill the row with the data from the selected the input field
    selectedRow.cells[1].textContent = document.querySelector(".user-info input:nth-of-type(1)").value;
    selectedRow.cells[2].textContent = document.querySelector(".user-info input:nth-of-type(2)").value;  
    selectedRow.cells[3].textContent = document.querySelector(".user-info input:nth-of-type(3)").value;
    selectedRow.cells[4].textContent = document.querySelector(".user-info input:nth-of-type(4)").value;
  }
  
  // add event listener to the button
  document.querySelector("#create-button").addEventListener("click", addUser);
  document.querySelector("#edit-button").addEventListener("click", editUser);
  
