'use strict'

function createTable (numRows, numCols) {
    let newTable = document.createElement('table');
    newTable.setAttribute("class", "table");

    drawCells(newTable, numRows, numCols); // Генерация ячеек

    document.body.appendChild(newTable);
}

function drawCells(newTable, numRows, numCols) {
    let controlArray = []; // Проверочный массив
    for (let i = 0; i < numRows; i++) {
        let tr = document.createElement('tr');
        newTable.appendChild(tr);

        for (let j = 0; j < numCols; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);

            let checkedValue = setValues(controlArray); // Генерация значения от 1 до 25 для каждой ячейки

            controlArray.push(checkedValue); // запись правильного значения в массив
            td.appendChild(document.createTextNode(checkedValue));
        }
    }
}

function setValues(controlArray) { // Генерация случайных чисел без повторения
    let checkingValue = Math.ceil(Math.random() * 25); // тестовой значение

    for (let k = 0; k < controlArray.length; k++) { // Проверка тестового значения по массиву
        if (checkingValue == controlArray[k]) {
            checkingValue = Math.ceil(Math.random() * 25);
            k = -1;
        }
    }

    return checkingValue; // Возврат правильного значения
}

window.onclick = () => {
    window.location.reload();
}

window.onload = () => {
    createTable(5, 5);
}