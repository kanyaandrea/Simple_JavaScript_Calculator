
var keypadElements = document.getElementsByClassName('keypad');
var screen = document.querySelectorAll('p')[0];
var clear = document.getElementById('clearscreen');


function getResult(value) {
    return function() {
        try {
            screen.innerHTML = eval(screen.innerHTML);
            }
        catch (SyntaxError){
            alert("Operation is invalid")
        }    
    } 
} 

function clearScreen(){ 
    clear.onclick = function(){
        screen.innerHTML = '';
    }
}

function displayOnScreen(value){
    return function(){
        screen.innerHTML += keypadElements[value].innerHTML;
    }   
}


function getPercentage(value){
    return function(){
    if (value === 0){
        screen.innerHTML
    }
else {
    var num = screen.innerHTML;
    var percentage = num /100
    screen.innerHTML = percentage
    }
}
}

function getInvert(value){
    return function(){
        if (value === 0){
            screen.innerHTML
        }
        else {
            var num = screen.innerHTML
            var invert = num*(-1)
            screen.innerHTML = invert
    }    
}
}
function calculatorFunctions() {
	for(var value = 0; value < keypadElements.length; value++){
        if(keypadElements[value].innerHTML === 'C'){
		    keypadElements[value].addEventListener("click", clearScreen());
		}
		else if (keypadElements[value].innerHTML === '=') {
			keypadElements[value].addEventListener("click", getResult(value));
        }
        else if (keypadElements[value].innerHTML === '%') {
			keypadElements[value].addEventListener("click", getPercentage(value));
        }
        else if (keypadElements[value].innerHTML === '+/-') {
			keypadElements[value].addEventListener("click", getInvert(value));
        }
        else {
			keypadElements[value].addEventListener("click", displayOnScreen(value));
		}
	}
}

calculatorFunctions();

