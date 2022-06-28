let operation = []; // the operation is an array of numbers and operators
let result = 0;

const screen = document.querySelector('.screen');
const subscreen = document.querySelector('.subscreen');


//check if operators are true for the arg.some() method
///////////////////////////////////////////////////////

function checkMult(op) {
    return op === "*";
}

function checkDiv(op) {
    return op === "/";
}

function checkAdd(op) {
    return op === "+";
}

function checkSub(op) {
    return op === "-";
}


// multiply, divide, add and substract functions called by the function operate
///////////////////////////////////////////////////////////////////////////////

function multiply(arg) {
    while (arg.some(checkMult)) {
        for (let i=0; i < arg.length; i++) {
            if (arg[i] === "*") {
                result = parseFloat(arg[i-1]) * parseFloat(arg[i+1]);
                arg.splice(i-1, 3, result); // get rid of the operation in the array and add the result of the multiplication in the array
                console.log(arg);
            }
        }
    }
}

function divide(arg) {
    while (arg.some(checkDiv)) {
        for (let i=0; i < arg.length; i++) {
            if (arg[i] === "/") {
                result = parseFloat(arg[i-1]) / parseFloat(arg[i+1]);
                arg.splice(i-1, 3, result); // get rid of the operation in the array and add the result of the multiplication in the array
                console.log(arg);
            }
        }
    }
}

function add(arg) {
    while (arg.some(checkAdd)) { //while there are additions
        for (let i=0; i < arg.length; i++) { //scan the array
            if (arg[i] === "+") { //find the addition
                result = parseFloat(arg[i-1]) + parseFloat(arg[i+1]); // converts to a float and add
                arg.splice(i-1, 3, result); // get rid of the operation in the array and replace by the result of the operation
                console.log(arg);
            }
        }
    }
}

function substract(arg) {
    while (arg.some(checkSub)) { //while there are additions
        for (let i=0; i < arg.length; i++) { //scan the array
                    result = parseFloat(arg[i-1]) - parseFloat(arg[i+1]); // converts to float and add
                    arg.splice(i-1, 3, result); // get rid of the operation in the array and replace by the result of the operation
                    console.log(arg);
                }
            }
        }



// operate function, called by clicking the button "equals"

function operate(operation) {
    multiply(operation); // prioritize multiplications and divisions
    divide(operation);
    add(operation); // then, add and substract
    substract(operation);
    return operation; // return the total
}




const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operation.push(screen.textContent);
    operation.push("+")
    subscreen.textContent += "+";
    screen.textContent = "";
});

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => {
    operation.push(screen.textContent);
    operation.push("*")
    subscreen.textContent += "*";
    screen.textContent = "";
});

const division = document.querySelector('#divide');
division.addEventListener('click', () => {
    operation.push(screen.textContent);
    operation.push("/")
    subscreen.textContent += "/";
    screen.textContent = "";
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (operation.length === 0) { // check if the first number is a negative number
        screen.textContent = "-";
    }
    else {
        operation.push(screen.textContent);
        operation.push("-")
        subscreen.textContent += "-";
        screen.textContent = "";
    }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operation.push(screen.textContent);
    screen.textContent = operate(operation);    
});


/* display the number that is clicked on the screen */

const one = document.querySelector("#one");
one.addEventListener('click', ()  => {
    screen.textContent += "1";
    subscreen.textContent += "1";
});

const two = document.querySelector("#two");
two.addEventListener('click', ()  => {
    screen.textContent += "2";
    subscreen.textContent += "2";
});

const three = document.querySelector("#three");
three.addEventListener('click', ()  => {
    screen.textContent += "3";
    subscreen.textContent += "3";
});

const four = document.querySelector("#four");
four.addEventListener('click', ()  => {
    screen.textContent += "4";
    subscreen.textContent += "4";
});

const five = document.querySelector("#five");
five.addEventListener('click', ()  => {
    screen.textContent += "5";
    subscreen.textContent += "5";
});

const six = document.querySelector("#six");
six.addEventListener('click', ()  => {
    screen.textContent += "6";
    subscreen.textContent += "6";
});

const seven = document.querySelector("#seven");
seven.addEventListener('click', ()  => {
    screen.textContent += "7";
    subscreen.textContent += "7";
});

const eight = document.querySelector("#eight");
eight.addEventListener('click', ()  => {
    screen.textContent += "8";
    subscreen.textContent += "8";
});

const nine = document.querySelector("#nine");
nine.addEventListener('click', ()  => {
    screen.textContent += "9";
    subscreen.textContent += "9";
});

const zero = document.querySelector("#zero");
zero.addEventListener('click', ()  => {
    screen.textContent += "0";
    subscreen.textContent += "0";
});

const point = document.querySelector("#point");
point.addEventListener('click', ()  => {
    screen.textContent += ".";
    subscreen.textContent += ".";
});