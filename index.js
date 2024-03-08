let numbers = [17, 31, 77, 20, 63];

let userInputEle = document.getElementById("userInput");
let indexOfNumberEle = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let userInputnumber = parseInt(userInputEle.value);
    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === userInputnumber) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumberEle.textContent = itemIndex;
}