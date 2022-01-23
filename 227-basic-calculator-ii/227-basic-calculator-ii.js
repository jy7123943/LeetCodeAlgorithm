/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const operateNumber = (stack, operator, currentNumber) => {
    const lastNumber = stack.pop();

    if (lastNumber === undefined) {
      stack.push(currentNumber);
      return;
    }
    switch (operator) {
      case '+':
        stack.push(lastNumber);
        stack.push(currentNumber);
        break;
      case '-':
        stack.push(lastNumber);
        stack.push(-currentNumber);
        break;
      case '*':
        stack.push(lastNumber * currentNumber);
        break;
      case '/':
        const num = lastNumber / currentNumber;
        stack.push(num < 0 ? -Math.floor(-num) : Math.floor(num));
        break;
    }
  };
  const OPERATORS = { '+': '+', '-': '-', '*': '*', '/': '/' };
  let currentNumber = 0;
  let operator = '+';

  const list = s.split('').reduce((stack, cv, i) => {
    if (cv === '') return stack;

    if (OPERATORS[cv]) {
      operateNumber(stack, operator, currentNumber);

      currentNumber = 0;
      operator = OPERATORS[cv];

      return stack;
    }

    currentNumber = Number(currentNumber + cv);
    return stack;
  }, []);

  operateNumber(list, operator, currentNumber);

  return list.reduce((acc, num) => acc += num, 0);
};