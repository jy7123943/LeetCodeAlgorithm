/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Position = m - 1;
    let nums2Position = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
		if (nums2Position < 0) break;
        
        if (nums1[nums1Position] > nums2[nums2Position]) {
           nums1[i] = nums1[nums1Position--];
        } else {
           nums1[i] = nums2[nums2Position--];
        }
    }
};
