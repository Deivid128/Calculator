const display = document.getElementById("display");

var toCalcValue = "";

var haveResult = false;

function appendToDisplay(calcValue, showValue) {
    if (!haveResult) {
        toCalcValue += calcValue;  
        display.value += showValue;
    } else {
        display.value = toCalcValue;
        haveResult = false;
    }
}

function calculate() {
    try {
        display.value = eval(toCalcValue);
        toCalcValue = "";
        haveResult = true;
    }   
    catch(error) {
        toCalcValue = "";
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
        haveResult = false;
    }
}

function clearDisplay() {
    toCalcValue = "";
    display.value = "";
}