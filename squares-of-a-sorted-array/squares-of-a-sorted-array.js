/**
 * @param {number[]} nums
 * @return {number[]}
 */
var squareNum = function(num) {
    return Math.abs(num) * Math.abs(num);
};

var sortedSquares = function(nums) {
    return nums.map(squareNum).sort((l, r) => l - r)
};