var inputNum = document.getElementById("inputNum");
var btn = document.getElementsByClassName("btn");
var ul = document.getElementsByTagName("ul")[0];

function createNode(value){
    var newNode = document.createElement("li");
    newNode.innerHTML = value;
    newNode.onclick = function() {
        ul.removeChild(this);
    }
    return newNode; 
}

btn[0].onclick = function() {
    var value = inputNum.value;
    if (isNaN(parseInt(value))) {
        alert("输入不合法");
        return false;
    }
    ul.insertBefore(createNode(value), ul.firstChild);
    value = null;
}

btn[1].onclick = function() {
    var value = inputNum.value;
    if (isNaN(parseInt(value))) {
        alert("输入不合法");
        return false;
    }
    ul.appendChild(createNode(value));
    value = null;
}

btn[2].onclick = function() {
    if (ul.hasChildNodes()) {
        alert(ul.firstChild.innerHTML);
        ul.removeChild(ul.firstChild);
    } else {
        alert("队列为空");
        return false;
    }
}

btn[3].onclick = function() {
    if (ul.hasChildNodes()) {
        alert(ul.lastChild.innerHTML);
        ul.removeChild(ul.lastChild);
    } else {
        alert("队列为空");
        return false;
    }
}
