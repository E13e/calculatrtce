const display = document.getElementById("display");

function adjustFontSize() {
    const length = display.value.length;
    if (length >= 9) {
        display.style.fontSize = "3.9rem";
    } else if (length == 8) {
        display.style.fontSize = "4.4rem";
    } else if (length == 7) {
        display.style.fontSize = "4.8rem";
    } else {
        display.style.fontSize = "5rem";
    }
}

function appendToDisplay(input) {
    if (display.value.length < 9) {
        display.value += input;
        adjustFontSize();
    }
}

function clearDisplay() {
    display.value = "";
    adjustFontSize();
}

function plusMinus() {
    if (display.value.length <= 9) {
        display.value = (display.value.charAt(0) === '-') ? display.value.substring(1) : '-' + display.value;
        adjustFontSize();
    }
}

function modulo() {
    if (display.value.length <= 9) {
        display.value = display.value * 0.01;
        adjustFontSize();
    }
}

function calculate() {
    try {
        const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/,/g, '.');
        let result = eval(expression);

        if (result.toString().length > 8) {
            result = result.toExponential(4);
        }

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
    adjustFontSize();
}