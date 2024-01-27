
var check = document.getElementsByClassName("check");
var i;
for (i = 0; i < check.length; i++) {
    check[i].onclick = function () {
        // let parent = this.parentElement;
        console.log("dlkcksvnkjdndnvou");
        // parent.style.display = "none";
    }
}


//function to add a new task
function newTask() {
    let item = document.getElementById("item-list");

    //accesing the task from input field
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.className = "list";
    li.innerHTML = task;    //setting input field value in li tag

    //creating a button to check a task
    let check = document.createElement("button");
    check.className = "check";
    check.innerHTML = "&#10004;"
    // let txt = document.createTextNode("&#10004;");
    // button.appendChild(txt);
    li.appendChild(check);

    for (let i = 0; i < check.length; i++) {
        check[i].onclick = function () {
            // let parent = this.parentElement;
            console.log("kvndkjfvndjnjfvnu");
            // parent.style.display = "none";
        }
    }

    //creating a button to check a task
    let close = document.createElement("button");
    close.className = "close";
    close.innerHTML = "&#10006;"
    // let txt = document.createTextNode("&#10004;");
    // button.appendChild(txt);
    li.appendChild(close);

    item.appendChild(li);   //adding li tag to ul tag

    document.getElementById("task").value = "";
}