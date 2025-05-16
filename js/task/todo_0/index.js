btn = document.getElementById('done')
input = document.getElementById('subject')
ul = document.querySelector("ul")

function sizeOFInput(){
    return input.value.length;
}

function liGenrator() {
    li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ''
}
function addListAfterKeyPress(event) {
    if (sizeOFInput() > 0 && event.keyCode == 13) {
        liGenrator()
    }
}

function addListAfterButtonClick() {
    if (sizeOFInput() > 0) {
        liGenrator()
    }
}

btn.addEventListener("click",addListAfterButtonClick)
input.addEventListener("keydown",addListAfterKeyPress)