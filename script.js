//accessing side-bar
const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".side-bar");
const themeMenu = document.querySelector(".theme-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
    themeMenu.classList.toggle("active");
});

//setting themes for the document
let colorOne = document.querySelector(".color-one");
colorOne.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, violet, #888, indigo)";
})

let colorTwo = document.querySelector(".color-two");
colorTwo.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, indigo, #888, dodgerblue)";
})

let colorThree = document.querySelector(".color-three");
colorThree.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, dodgerblue, #888, lightgreen)";
})

let colorFour = document.querySelector(".color-four");
colorFour.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, lightgreen, #888, yellowgreen)";
})

let colorFive = document.querySelector(".color-five");
colorFive.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, yellowgreen, #888, orange)";
})

let colorSix = document.querySelector(".color-six");
colorSix.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, orange, #888, indianred)";
})

let colorSeven = document.querySelector(".color-seven");
colorSeven.addEventListener("click",function () {
    document.body.style.background = "linear-gradient(0.25turn, indianred, #888, violet)";
})


//setting theme for to-do list
// let colorOne = document.querySelector(".color-one");
// colorOne.addEventListener("click",function () {
//     console.log("jbjkcbskjd");
//     document.getElementById("task").style.borderColor = "indigo";
//     document.getElementById("add-btn").style.borderColor = "indigo";
//     document.getElementById("add-btn").style.backgroundColor = "#8f25dd";
//     let odd = document.querySelectorAll('.list:nth-child(odd)');
//     console.log(odd);
//     for (let i = 0; i<odd.length; i++) {
//         odd[i].style.setProperty("background-color", "indigo", "important");
//     }
//     let oddCheck = document.querySelectorAll(".list:nth-child(odd) .check");
//     console.log(oddCheck);
//     for (let j = 0; j<oddCheck.length; j++) {
//         oddCheck[j].style.backgroundColor = "indigo";
//     }

//     let oddClose = document.querySelectorAll(".list:nth-child(odd) .close");
//     console.log(oddClose);
//     for (let j = 0; j<oddClose.length; j++) {
//         oddClose[j].style.backgroundColor = "indigo";
//     }
// });


//removing a task 
var close = document.getElementsByClassName("close");

close.onclick = function () {
    let parent = this.parentElement;
    console.log(parent);
    parent.style.display = "none";
}

//function to add a new task
function newTask() {
    let item = document.getElementById("item-list");

    let li = document.createElement("li");
    //accesing the task from input field
    let task = document.getElementById("task").value;
    li.className = "list";
    let p = document.createElement("p");
    p.className = "para";
    p.innerHTML = task;    //setting input field value in li tag
    li.appendChild(p);
    if (task === "") {
        document.querySelector(".pop-up").style.display = "block";
    } else {
        item.appendChild(li);   //adding li tag to ul tag
    }


    document.getElementById("task").value = "";

    //creating a button to check a task
    let check = document.createElement("button");
    check.className = "check";
    check.innerHTML = "&#10004;"
    li.appendChild(check);

    let complete  = document.querySelector(".complete");
    let completed  = document.querySelector(".completed");
    check.onclick = function () {
        let parent = this.parentElement;
        let fC = parent.firstElementChild;
        console.log(fC);
        let second = fC.nextElementSibling;
        console.log(second);
        second.remove();
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
        parent.remove();
    }
    
}

//closing a pop-up
let cross = document.querySelector(".cross");
cross.onclick = function () {
    document.querySelector(".pop-up").style.display = "none";
}

let ok = document.querySelector(".ok");
ok.onclick = function () {
    document.querySelector(".pop-up").style.display = "none";
}

