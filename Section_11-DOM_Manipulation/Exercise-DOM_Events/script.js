var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    addDeleteButton(li);
}

function addCheckBox(li) {
    var checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    // checkBox.setAttribute('onchange', 'crossOff(this)');
    li.prepend(checkBox);
    
    crossOff(checkBox, li);
}

function addDeleteButton(li){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    deleteItem(btn);
    addCheckBox(li);
}

function addListFeatures(li) {
    var li = document.createElement("li");
    addCheckBox(li);
    addDeleteButton(li);
}

function deleteItem(button) {
    button.addEventListener("click", function() {
        var check = confirm("Are you sure you want to delete?");
        if (check === true) {
            button.parentNode.remove();
        }    
    })
}

function crossOff(checkBoxElem, li) {
    checkBoxElem.addEventListener("click", function() {
        if (checkBoxElem.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });

}

// function crossOff(li) {
//     li.addEventListener("click", function() {
//         li.classList.toggle("done");
//     });
// }


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

itemList.forEach(addDeleteButton);