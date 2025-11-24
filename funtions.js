const display = document.getElementById("display");

var toCalcValue = "";

function appendToDisplay(calcValue, showValue) {
    toCalcValue += calcValue;  
    display.value += showValue;
}

function calculate() {
    try {
        display.value = eval(toCalcValue);
        toCalcValue = "";
    }   
    catch(error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
        toCalcValue = "";
    }
}

function clearDisplay() {
    display.value = "";
}