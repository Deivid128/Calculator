const display = document.getElementById("display");

var toCalcValue = "";

function appendToDisplay(calcValue, showValue) {
    toCalcValue += calcValue;  
    display.value += showValue;
    console.log(toCalcValue);
    
}

function calculate() {
    try {
        console.log(toCalcValue);
        
        display.value = eval(toCalcValue);
        toCalcValue = "";
    }   
    catch(error) {
        toCalcValue = "";
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

function clearDisplay() {
    toCalcValue = "";
    display.value = "";
}