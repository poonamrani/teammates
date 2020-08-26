
const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput( operator, resBeforeCalc, calcNumber) {
    const calculationDescription = `${resBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription); //from vendor file
}

function writeToLog(
    operationIdentifier, 
    prevResultValue, 
    operationNumber, 
    newResult) {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResultValue,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}

function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }
    const enteredNumber = getUserNumberInput();
    initialresult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } 
    else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialresult, enteredNumber);
    writeToLog(calculationType, initialresult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function divide() {
    calculateResult('DIVIDE');
}

function multiply() {
    calculateResult('MULTIPLY');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
