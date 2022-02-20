/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const countBinaryOne = (num) => {
    if (num < 2) return num;

    let count = 0;
    let quotient = num;

    while (quotient >= 2) {
      const remainder = quotient % 2;
      quotient = Math.floor(quotient / 2);

      if (remainder === 1) count++;
      if (quotient === 1) count++;
    }

    return count;
  };

  return Array.from({ length: n + 1 }, (v, i) => countBinaryOne(i));
};
