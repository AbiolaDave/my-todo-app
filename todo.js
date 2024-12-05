document.getElementById("updateButton").style.display = "none";
let taskArray = [];

let date = new Date();

let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDate();

console.log(month, year, day);
// let showTable;

function submitTask() {
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;
  let description = document.getElementById("description").value;

  let taskObj = { task, date, description };
  taskArray.push(taskObj);

  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";

  displayTable();
}

function displayTable() {
  let showTable = "";
  for (let i in taskArray) {
    showTable += `<tbody>
    <tr>
         <td>${i}</td>
         <td>${taskArray[i].task}</td>
         <td>${taskArray[i].date}</td>
         <td>${taskArray[i].description}</td>
         <td>
         <button onclick="update(${i})" class="btn btn-warning">Update</button>
         <button onclick="deleteTask(${i})" class="btn btn-danger">Delete</button>
         </td>
         </tr>
         </tbody>
         `;
  }

  document.getElementById("show").innerHTML = showTable;
}

function update(k) {
  if (window.confirm("Are you sure you want to update this")) {
    document.getElementById("updateButton").style.display = "block";
    document.getElementById("submitButton").style.display = "none";

    document.getElementById("task").value = taskArray[k].task;
    document.getElementById("date").value = taskArray[k].date;
    document.getElementById("description").value = taskArray[k].description;

    updateIndex = k;
  }
}

function updateTask() {
  taskArray[updateIndex].task = document.getElementById("task").value;
  taskArray[updateIndex].date = document.getElementById("date").value;
  taskArray[updateIndex].description =
    document.getElementById("description").value;

  document.getElementById("updateButton").style.display = "none";
  document.getElementById("submitButton").style.display = "block";

  displayTable(taskArray);

  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function deleteTask(index){
  taskArray.splice(index, 1)
  displayTable(taskArray)
}