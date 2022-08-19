let firstValue=0;
    let secondValue=0;
    let operation;

    const calulatorScreen = document.getElementById("calsi")
    const number1 = document.getElementById("num1")
    const number2 = document.getElementById("num2")
    const number3 = document.getElementById("num3")
    const number4 = document.getElementById("num4")
    const number5 = document.getElementById("num5")
    const number6 = document.getElementById("num6")
    const number7 = document.getElementById("num7")
    const number8 = document.getElementById("num8")
    const number9 = document.getElementById("num9")
    const number0 = document.getElementById("num0")
    const add = document.getElementById("+")
    const subtract = document.getElementById("-")
    const multiplication = document.getElementById("*")
    const divide = document.getElementById("/")
    const clear = document.getElementById("Clear")
    const equalTo = document.getElementById("=")

    number1.addEventListener("click", () => {
        calulatorScreen.value += number1.innerText;
    });
    number2.addEventListener("click", () => {
        calulatorScreen.value += number2.innerText;
    });
    number3.addEventListener("click", () => {
        calulatorScreen.value += number3.innerText;
    });
    number4.addEventListener("click", () => {
        calulatorScreen.value += number4.innerText;
    });
    number5.addEventListener("click", () => {
        calulatorScreen.value += number5.innerText;
    });
    number6.addEventListener("click", () => {
        calulatorScreen.value += number6.innerText;
    });
    number7.addEventListener("click", () => {
        calulatorScreen.value += number7.innerText;
    });
    number8.addEventListener("click", () => {
        calulatorScreen.value += number8.innerText;
    });
    number9.addEventListener("click", () => {
        calulatorScreen.value += number9.innerText;
    });
    number0.addEventListener("click", () => {
        calulatorScreen.value += number0.innerText;
    });
    add.addEventListener("click", () => {

        firstValue =parseInt(calulatorScreen.value);
        operation = "Adding"
        calulatorScreen.value = "";
    });
    subtract.addEventListener("click", () => {
        firstValue = parseInt(calulatorScreen.value);
        operation = "Subtracting"
        calulatorScreen.value = "";
    });
    multiplication.addEventListener("click", () => {
        firstValue = parseInt(calulatorScreen.value);
        operation = "Multiplication"
        calulatorScreen.value = "";
    });
    divide.addEventListener("click", () => {
        firstValue = parseInt(calulatorScreen.value);
        operation = "Division"
        calulatorScreen.value = "";
    });
    clear.addEventListener("click", () => {
        firstValue=0;
        secondValue=0;
        calulatorScreen.value = "";
    });
    equalTo.addEventListener("click", () => {
        secondValue = parseInt(calulatorScreen.value);
        calulatorScreen.value = "";

        if (operation == "Adding") {
            calulatorScreen.value = firstValue + secondValue;
        }
        else if (operation == "Subtracting") {
            calulatorScreen.value = firstValue - secondValue;
        }
        else if (operation == "Multiplication") {
            calulatorScreen.value = firstValue * secondValue;
        }
        else if (operation == "Division") {
            calulatorScreen.value = firstValue / secondValue;
        }
    });
