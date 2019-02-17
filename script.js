var constants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '0'];
var operations = ['~', '-' , '>', '|', '&', '!'];
var formula;

function findInArray(array, temp) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] == temp) {
            return true;
        }
    }
    return false;
}


function getSubFormula(memory, subFormulas) {
    var open = 0;
    var close = 0;
    var subFormula = new Array();

    for (var index = memory; index < formula.length; index++) {
        subFormula.push(formula[index]);
        if (formula[index] == '(') {
            open++;
        }

        if (formula[index] == ')') {
            close++;
        }

        if (open == close) {
            subFormulas.push(subFormula);
            return;
        }
    }
}

function check(subFormulas) {
    var numOfOpen = 0;
    var numOfClose = 0;
    for (var index = 0; index < formula.length; index++) {
        if (formula[index] == '(') {
            getSubFormula(index, subFormulas);
        }  else if (findInArray(constants, formula[index]) && !findInArray(subFormulas, formula[index]) && !findInArray(operations, formula[index])) {
            subFormulas.push(formula[index]);        
    }
}
}

function start() {
    var input = document.getElementById("f1");

    formula = input.elements[0].value;
    var subFormulas = new Array();

    check(subFormulas);
    for (index1 = 0; index1 < subFormulas.length; index1++){
        var str = '';
        for (index2 = 0; index2 < subFormulas[index1].length; index2++){
            str += subFormulas[index1][index2];            
        }
        console.log(str);
    }
    console.log('ОТВЕТ: ' + subFormulas.length);
}

//((P~Q)~((!W)&(!P)))