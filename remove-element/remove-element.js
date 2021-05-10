/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    
    while (startIndex <= endIndex) {
        if (nums[startIndex] === val) {
            nums[startIndex] = nums[endIndex];
            endIndex--;
        } else {
            startIndex++;
        }
        
    }
    
    return startIndex;
};
