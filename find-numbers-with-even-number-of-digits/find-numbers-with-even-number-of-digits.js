/**
 * @param {number[]} nums
 * @return {number}
 */
var numLength = function(num) {
    let count = 0;
    
    while (num >= 1) {
        count++;
        num /= 10;
    }
    
    return count;
};

var findNumbers = function(nums) {
    return nums.reduce((count, currentNum) => (
        numLength(currentNum) % 2 === 0 ? count + 1 : count
    ), 0);
};