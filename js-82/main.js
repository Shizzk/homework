function nameLog(name) {
    return `Hello ${name}`;
}
console.log(nameLog("Альберт"))


const num = [1, 23, 5, 465, 77, 0, 3, 80]

function numLog(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            console.log(num[i])
        }
    }
}
console.log(numLog(num))

function calc(firstNumber, secondNumber, operator) {
    if (operator == 'plus') {
        let res = firstNumber + secondNumber;
        console.log(res)
    }
    else if (operator == 'minus') {
        let res = firstNumber - secondNumber;
        console.log(res)
    }
    else if (operator == 'share') {
        let res = firstNumber / secondNumber;
        console.log(res)
    }
    else if (operator == 'multiply') {
        let res = firstNumber * secondNumber;
        console.log(res)
    }
}

console.log(calc(6, 3, 'share'))
