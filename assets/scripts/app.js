
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

function add() {
    const enteredNumber = getUserNumberInput();
    initialresult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialresult, enteredNumber);
    writeToLog('ADD', initialresult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    initialresult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialresult, enteredNumber);
    writeToLog('SUBTRACT', initialresult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    initialresult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialresult, enteredNumber);
    writeToLog('DIVIDE', initialresult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    initialresult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialresult, enteredNumber);
    writeToLog('MULTIPLY', initialresult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
