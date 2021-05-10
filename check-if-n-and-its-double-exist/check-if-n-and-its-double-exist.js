/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const memo = {};
    
    for (const num of arr) {
        if (memo[num]) {
            return true;
        }
        
        memo[num * 2] = true;
        memo[num / 2] = true;
    }
    
    return false;
};