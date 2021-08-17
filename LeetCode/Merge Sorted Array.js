/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let totalLength = m + n - 1;
    m = m - 1;
    n = n - 1;
    while(n >= 0) {
        if(m >= 0 && nums1[m] > nums2[n]) {
            nums1[totalLength--] = nums1[m--];
        } else {
            nums1[totalLength--] = nums2[n--];
        }
    }
};
