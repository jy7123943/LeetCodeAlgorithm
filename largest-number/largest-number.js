/**
 * @param {number[]} nums
 * @return {string}
 */
var compareEachDigit = function(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  return Number(str2 + str1) - Number(str1 + str2);
};

var largestNumber = function(nums) {
  const bigInt = nums.sort((l, r) => compareEachDigit(l, r)).join('');

  return Number(bigInt) === 0 ? '0' : bigInt;
};
