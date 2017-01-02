var addInput = document.querySelector("input");
var delList = document.querySelectorAll(".del");
var lists = document.querySelectorAll("li");
var addSpan = "<span class='del'><i class='fa fa-trash' aria-hidden='true'></i></span> ";

//Set Display none for the list
function displayNone() {
    //this.parentNode.style.display = "none";
    document.querySelector("#todoList").removeChild(this.parentNode);
}

//Strike through the list
function strikeThrough() {
    this.classList.toggle("classStrikeThrough");
}

addInput.addEventListener("keypress", function(e) {
    if(e.keyCode == 13) {
        
        //Add child element li to it's parent element ui
        var createToDo = document.createElement("li");
        createToDo.innerHTML = addSpan + addInput.value;
        document.querySelector("ul").appendChild(createToDo);
        
        //Add event listerer for newly added element in ui
        createToDo.childNodes[0].onclick = displayNone;
        
        //Add event listerer for line through when clicked
        createToDo.onclick = strikeThrough;
        addInput.value = "";
    }
});


//Add Event listener when trash bin is clicked
for(var i = 0; i < delList.length; i++) {
    delList[i].addEventListener("click", displayNone);
};

//Add Event listener when todo list clicked
for(var i = 0; i <lists.length; i++) {
    lists[i].addEventListener("click", strikeThrough);
}