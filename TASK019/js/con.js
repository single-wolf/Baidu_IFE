var inputNum = document.getElementById("inputNum");
var btn = document.getElementsByClassName("btn");
var ul = document.getElementsByTagName("ul")[0];


function createNode(value){
    var newNode = document.createElement("li");
    newNode.style.height = value*2 + 'px';
    newNode.onclick = function() {
        ul.removeChild(this);
    }
    return newNode; 
}

btn[0].onclick = function() {
    var value = inputNum.value;
    if (isNaN(parseInt(value)) || parseInt(value)<10 || parseInt(value)>100) {
        alert("输入不合法!请输入10-100范围的数字");
        return false;
    } else if (queueLength(ul) >= 60) {
        alert("队列满了");
        return false;
    }
    ul.insertBefore(createNode(value), ul.firstChild);
    value = null;
}

btn[1].onclick = function() {
    var value = inputNum.value;
    if (isNaN(parseInt(value)) || parseInt(value)<10 || parseInt(value)>100) {
        alert("输入不合法!请输入10-100范围的数字");
        return false;
    } else if (queueLength(ul) >= 60) {
        alert("队列满了");
        return false;
    }
    ul.appendChild(createNode(value));
    value = null;
}

btn[2].onclick = function() {
    if (ul.hasChildNodes()) {
        alert(parseInt(ul.firstChild.style.height)/2);
        ul.removeChild(ul.firstChild);
    } else {
        alert("队列为空");
        return false;
    }
}

btn[3].onclick = function() {
    if (ul.hasChildNodes()) {
        alert(parseInt(ul.lastChild.style.height)/2);
        ul.removeChild(ul.lastChild);
    } else {
        alert("队列为空");
        return false;
    }
}

btn[4].onclick = function() {
    var lis = ul.getElementsByTagName("li"),
        len = queueLength(ul),
        i = len,
        j = 0;
    var timer = setInterval(function() {
        if (i == 0) {
            clearInterval(timer);
        } else {
            if (j == len-1) {
                i--;
                j = 0;
            }else{
                console.log(lis[j+1].style.height+" "+lis[j].style.height);
                if (parseInt(lis[j+1].style.height) < parseInt(lis[j].style.height)) {
                    console.log("change");
                    var sub = lis[j+1].style.height;
                    lis[j+1].style.height = lis[j].style.height;
                    lis[j].style.height = sub;
                }
                j++;
            }
        }
    }, 50); 
}

function queueLength(queue) {
    return queue.querySelectorAll("li").length;
}