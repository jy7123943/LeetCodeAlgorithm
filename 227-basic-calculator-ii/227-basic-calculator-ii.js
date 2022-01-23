/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const OPERATOR_REG_EXP = /\+|\-|\*|\//;
  const NUMBER_REG_EXP = /[0-9|\s]*/;

  const numbers = s.split(OPERATOR_REG_EXP).map(Number);
  const operators = s.split(NUMBER_REG_EXP).filter(Boolean);

  if (operators.length === 0) return Number(numbers[0]);

  const stack = [numbers.shift()];

  numbers.forEach((num, i) => {
    switch (operators[i]) {
      case '+':
        stack.push(num);
        break;
      case '-':
        stack.push(-num);
        break;
      case '*':
        stack.push(stack.pop() * num);
        break;
      case '/':
        const divided = stack.pop() / num;
        stack.push(divided < 0 ? -Math.floor(-divided) : Math.floor(divided));
        break;
    }
  });

  return stack.reduce((result, n) => result += n, 0);
};
