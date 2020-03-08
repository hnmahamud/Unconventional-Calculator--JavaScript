const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserInput() {
    return +userInput.value;
}

//Generate and write calculation log and description
function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
    const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult, calDescription); //From vendor file
}

function writeToLog(
    operation,
    preResult,
    number,
    result
) {
    const logEntry = {
        operation: operation,
        preResult: preResult,
        number: number,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACTION' &&
        calculationType !== 'MULTIPLICATION' &&
        calculationType !== 'DIVISION' ||
        !enteredNumber) {
        alert('Something went wrong!');
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    }
    else if (calculationType === 'SUBTRACTION') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLICATION') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    else if (calculationType === 'DIVISION') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function sub() {
    calculateResult('SUBTRACTION');
}

function mul() {
    calculateResult('MULTIPLICATION');
}

function div() {
    calculateResult('DIVISION');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);
