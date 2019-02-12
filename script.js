
var constants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var operations = ['~', '->', '|', '&', '!'];
var formula;

function findInArray(array, temp) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] == temp) {
            return true;
        }
    }
    return false;
}

function findSubFormulas(formula) {    //   ((P~Q)~(!W))
    var subFormulas = new Array(0);
    var numOfOpen = 0;
    var numOfClose = 0;
    var subFormula = '';
    for (var index = 0; index < formula.length; index++) {
        if (formula[index] == '(') {
            numOfOpen++;
            subFormula += formula[index];
            if (numOfOpen == numOfClose) {
                subFormula = '';
            } 
        }
        else if (formula[index] == ')') {
            numOfClose++;
            subFormula += formula[index];
            if (numOfOpen == numOfClose) {
                subFormulas.push(subFormula);
               // findSubFormular(subForula);
            }
        }
        else {
            subFormula += formula[index];
        }
    }
  /*  if (numOfOpen == 0) {
        return;
    }*/
    console.log('LOOK' + subFormulas);
}

function Start() {
    //var regexp = new RegExp();
    //regexp = /(\d[0-6])|\d/;
    var input = document.getElementById("f1");

    formula = input.elements[0].value;
    // var tact = parseInt(numbers.elements[2].value);
    console.log(formula);

    var numOfOpen = 0;
    var numOfClose = 0;
    var visited = new Array(0);
    var numOfSubFormulas = 0;

    //поиск подстрок!!!
    //проверка того, что формула начинается не со скобок!!!
    var subFormula = new Array(0);
    for (var index = 0; index < formula.length; index++) {
        if (formula[index] == '(') {
            console.log('FOUND open');
            numOfOpen++;
        } else if (formula[index] == ')') {
            numOfClose++;
            console.log('FOUND close');
        } else if (findInArray(constants, formula[index]) && !findInArray(visited, formula[index])) {
            console.log('FOUND CONSTANT');
            visited.push(formula[index]);
        } else if (findInArray(operations, formula[index])) {
            console.log('OPERATION ' + formula[index]);
        } else if (formula[index] == '-') {
            if (formula[index + 1] != '>') {
                alert('Введены некорректные данные!1');
                return;
            }
        } /*
        else {
            alert('Введены некорректные данные!2');
            return;
        }*/
    }

    for (var index = 0; index < visited.length; index++) {
        console.log(visited[index]);
    }

    if (numOfOpen != numOfClose) {
        alert('Введены некорректные данные!3');
        return;
    }
    numOfSubFormulas = numOfOpen + visited.length;

    console.log('ОТВЕТ: ' + numOfSubFormulas);

    findSubFormulas(formula);
}