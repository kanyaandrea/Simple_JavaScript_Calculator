
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
if (value === 0){
        document.getElementById("screen").value
    }
    else {
    var num = document.getElementById("screen").value;
    var percentage = num /100
    document.getElementById("screen").value = percentage
    }
}


function invert(value){
    if (value === 0){
        document.getElementById("screen").value
    }
    else {
    var num = document.getElementById("screen").value
    var invert = num*(-1)
        document.getElementById("screen").value = invert
    }
}