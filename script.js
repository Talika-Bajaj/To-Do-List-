
var close = document.getElementsByClassName("close");

close.onclick = function () {
    let parent = this.parentElement;
    console.log(parent);
    parent.style.display = "none";
}

//function to add a new task
function newTask() {
    let item = document.getElementById("item-list");

    //accesing the task from input field
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.className = "list";
    li.innerHTML = task;    //setting input field value in li tag

    item.appendChild(li);   //adding li tag to ul tag

    document.getElementById("task").value = "";

    //creating a button to check a task
    let check = document.createElement("button");
    check.className = "check";
    check.innerHTML = "&#10004;"
    // let txt = document.createTextNode("&#10004;");
    // button.appendChild(txt);
    li.appendChild(check);

    let complete  = document.querySelector(".complete");
    let completed  = document.querySelector(".completed");
    check.onclick = function () {
        let parent = this.parentElement;
        // console.log(parent);
        // parent.style.display = "none";
        let fC = parent.firstElementChild;
        console.log(fC);
        fC.remove();
        // fC.style.display = "none";
        complete.style.display = "block";
        completed.appendChild(parent);
        parent.style.textDecoration = "line-through";
    }
   

    //creating a button to check a task
    let close = document.createElement("button");
    close.className = "close";
    close.innerHTML = "&#10006;"
    // let txt = document.createTextNode("&#10004;");
    // button.appendChild(txt);
    li.appendChild(close);

    close.onclick = function () {
        let parent = this.parentElement;
        console.log(parent);
        parent.style.display = "none";
    }

    
}