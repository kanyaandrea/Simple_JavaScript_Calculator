
//function clearScreen()
window.onload = function(){ 
   document.getElementById("clearscreen").onclick = function(){
    document.getElementById("screen").value = '';
    }
}

function displayOnScreen(value){
    document.getElementById("screen").value += value
}


function getResult(value){ 
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    }


function getPercentage(value){
    var num = document.getElementById("screen").value;
    var percentage = num /100
    document.getElementById("screen").value = percentage
}


function invert(value){
    var num = document.getElementById("screen").value
    if (num === 0) {
        document.getElementById("screen").value = num
    }
    else if (num > 0 || num < 0) {
        document.getElementById("screen").value = num * (-1);
    }
}