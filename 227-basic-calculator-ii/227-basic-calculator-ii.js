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

  const firstNum = numbers.shift();

  return numbers.reduce((stack, n, i) => {
    switch (operators[i]) {
      case '+':
        stack.push(n);
        break;
      case '-':
        stack.push(-n);
        break;
      case '*':
        stack.push(stack.pop() * n);
        break;
      case '/':
        const divided = stack.pop() / n;
        stack.push(divided < 0 ? Math.ceil(divided) : Math.floor(divided));
        break;
    }
    return stack;
  }, [firstNum]).reduce((result, n) => result += n, 0);
};
