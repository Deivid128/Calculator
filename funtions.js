const display = document.getElementById("display");

var toCalcValue = "";

var haveResult = false;

function appendToDisplay(calcValue, showValue) {
    if (!haveResult) {
        toCalcValue += calcValue;  
        display.value += showValue;
        console.log(toCalcValue);
    } else {
        toCalcValue += calcValue;  
        console.log(toCalcValue);
        display.value = toCalcValue;
        haveResult = false;
    }
}

function calculate() {
    try {
        console.log(toCalcValue);
        display.value = eval(toCalcValue);
        toCalcValue = "";
        haveResult = true;
    }   
    catch(error) {
        console.log(toCalcValue);
        toCalcValue = "";
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
        haveResult = false;
    }
}

function clearDisplay() {
    console.log(toCalcValue);
    toCalcValue = "";
    display.value = "";
}