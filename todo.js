

// function addTodo() {
//     var array = [];
//     var GetInputValue = document.getElementById("input").value;
//     if (GetInputValue == " " || GetInputValue == "") { // if you want to check all space add a loop
//         alert("Please write some thing");
//     }
//     else {
//         array.push(GetInputValue);
//     }
//     if (array.length >= 1) {    
//         document.getElementById("heading").innerHTML = "Todo you entered are";
//     }
//     var todoList = document.getElementById("todo_list");
//     var data = "";
//     for (var i = 0; i < array.length; i++) {
//         data += '<li>' + array[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//         //data += "<li>" + array[i] + "</li>";
//         todoList.innerHTML += data;
//     }
//     data = "";
//     document.getElementById("input").value = ""

// }

// function removed() {
// document.getElementById("todo_list").innerHTML = "";
//     array = []
// }

// function addTodo() {
//     var array = [];
//     var GetInputValue = document.getElementById("input").value;
//     var deleteButton = document.createElement("input");
//     deleteButton.setAttribute("type", "button");
//     deleteButton.setAttribute("value", "Delete");
//     //deleteButton.setAttribute("id", "remove");
//     //node.appendChild(deleteButton);
//     deleteButton.addEventListener('click', function(e) {
//         deleteButton.parentNode.removeChild(data);
//     });
//     if (GetInputValue == " " || GetInputValue == "") {
//         alert("Please write some thing");
//     }
//     else {
//         var item = GetInputValue + deleteButton;
//         array.push(item);
//     }    
//     if (array.length >= 1) {    
//         document.getElementById("heading").innerHTML = "Todo you entered are";
//     }  
//         var todoList = document.getElementById("todo_list");
//         var data = "";
//         for (var i = 0; i < array.length; i++) {
//             data += '<li>' + array[i] + '</li>';
//             todoList.innerHTML += data;
//         }
// data = "";
// document.getElementById("input").value = ""

// }        

function addText(){
    var input = document.getElementById('input').value;
    if (input == " " || input == "") {
        alert("Please write some thing");
    }
    else{        
    var node=document.createElement("li");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("todo_list").appendChild(node);

    var removeTask = document.createElement('img');
    removeTask.setAttribute('src', 'cross.png');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "remove");
    node.appendChild(removeTask);


removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    });
    document.getElementById("input").value = ""
    }
    }
function removed() {
    document.getElementById("todo_list").innerHTML = "";
}

