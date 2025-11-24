const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;  
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

function clearDisplay() {
    display.value = "";
}