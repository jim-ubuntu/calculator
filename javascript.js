let isFirstOperation = false;
let isFirstNumOfSecondNum = false;
let operatorSelected = false;
let firstNumber = 0;
let secondNumber = 0;
let resultant = 0;
let newDisplay = "";

const display = document.getElementById("calc-display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((item) =>{
    item.addEventListener("click", () =>{
        operatorSelected = true;
    })
})

// numberButtons.forEach((item) => {})

numberButtons.forEach((item) =>{
    item.addEventListener("click", () =>{
        if (operatorSelected == true){
            display.textContent = display.textContent.substring(display.textContent.length, display.textContent.length -1);
            operatorSelected = false
        if (isFirstNumOfSecondNum == true){
            newDisplay = display.textContent.substring(display.textContent.length, display.textContent.length -1);
            display.textContent = newDisplay;
            return isFirstNumOfSecondNum = true;
            
        }
        }
    })
})

function addition(addend1, addend2){
    return resultant = (addend1 + addend2);
}

function subtraction(minuend, subtrahend){
    return resultant = (minuend - subtrahend);
}

function division(dividend, divisor){
    return resultant = (dividend / divisor);
}

function multiplication(factor1, factor2){
    return resultant = (factor1 * factor2);
}

function operate(number1, operator ,number2){
    if (operator == "+"){
        return addition(number1, number2);
        isFirstOperation = true;
    }
    else if (operator == "-"){
        isFirstOperation = true;
        return subtraction(number1, number2);
    }
    else if (operator == "*"){
        return multiplication(number1, number2);
        isFirstOperation = true;
    }
    else if (operator == "/"){
        return division(number1, number2);
        isFirstOperation = true;
    }
}

function getFirstNumber(){
    operatorAlreadySelected = true;
    return firstNumber = Number(display.textContent);
    
}

function getSecondNumber(){
    return secondNumber = Number(display.textContent);
     
}

function decimalPoint(){
    if (display.textContent.indexOf("\.") == -1){
        display.textContent += ".";
    }
    
}