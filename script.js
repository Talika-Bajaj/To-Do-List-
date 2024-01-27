//function to add a new task
function newTask () {
    let item = document.getElementById("item-list");
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.className = "list";
    item.appendChild(li);
    li.innerHTML = task;
}