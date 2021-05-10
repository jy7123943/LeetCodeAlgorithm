/**
 * @param {number[]} nums
 * @return {number[]}
 */
var squareNum = function(num) {
    return Math.abs(num) ** 2;
};

var sortedSquares = function(nums) {
    const result = [];
    let start = 0;
    let end = nums.length - 1;
    let position = nums.length - 1;
    
    while (position >= 0) {
        if (squareNum(nums[start]) < squareNum(nums[end])) {
            result[position--] = squareNum(nums[end--]);
        } else {
            result[position--] = squareNum(nums[start++]);
        } 
    }
    
    return result;
};