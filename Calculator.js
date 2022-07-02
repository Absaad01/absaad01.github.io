
const firstNum = parseInt(prompt(' Enter First Number'))
const secondNum = parseInt(prompt(' Enter Second Number'))
const operator = parseInt(prompt(' Choose Operator(+,-,*,/)'))

let result = 0
if (operator == '+') {
    result = firstNum + secondNum
    alert(result);
}
else if (operator == '-') {
    result = firstNum - secondNum
    alert(result);
}
else if (operator == '*') {
    result = firstNum * secondNum
    alert(result);
}

else{
    result = firstNum/secondNum
    alert(result)
}

document.write(firstNum + operator + secondNum + "" + "=" + "" + result)
console.log(firstNum + operator + secondNum + "" + "=" + "" + result)
