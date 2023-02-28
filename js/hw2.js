const operand1 = Number(prompt("Введіть перше число"));
const operand2 = Number(prompt("Введіть друге число"));

function sum(operand1, operand2) {
    return operand1 + operand2
}
console.log('Сума: ' + operand1 + '+' + operand2 + ' = ' + sum(operand1, operand2) );

function sub(operand1, operand2) {
    return operand1 - operand2
}
console.log('Різниця: ' + operand1 + '-' + operand2 + ' = ' + sub(operand1, operand2));

function mult(operand1, operand2) {
    return operand1 * operand2
}
console.log('Добуток: ' + operand1 + '*' + operand2 + ' = ' + mult(operand1, operand2));

function div(operand1, operand2) {
    return operand1 / operand2
}
console.log('Частка: ' + operand1 + '/' + operand2 + ' = ' + div(operand1, operand2));  