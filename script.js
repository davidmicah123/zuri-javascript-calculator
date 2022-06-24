let first_operand = prompt('Input the first operand');
let operator = prompt('input the operator');
let second_operand = prompt('Input the second operand');

if (operator === '+') {
    let addition = Number(first_operand) + Number(second_operand);
    alert(`The result of adding ${first_operand} and ${second_operand} is: ${addition}`);
}else if (operator === '-') {
    let subtraction = Number(first_operand) - Number(second_operand);
    alert(`The result of subtracting ${first_operand} from ${second_operand} is: ${subtraction}`);
}else if (operator === '/') {
    let division = Number(first_operand) / Number(second_operand);
    alert(`The result of deviding ${first_operand} by ${second_operand} is: ${division}`);
}else if (operator === '*') {
    let multiplication = Number(first_operand) * Number(second_operand);
    alert(`The result of multiplying ${first_operand} by ${second_operand} is: ${multiplication}`);
}else{
    alert('invalid operator');
}