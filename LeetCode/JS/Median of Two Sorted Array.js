var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    let start = 0, end = nums1.length;
    let m = nums1.length;
    let n = nums2.length;

    while(start <= end) {
      let partition1 = Math.floor((start + end)/2);
      let partition2 = Math.floor((nums1.length + nums2.length + 1)/2 - partition1);

      let maxLeftNums1 = partition1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
      let maxLeftNums2 = partition2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];
      let minRightNums1 = partition1 === m ? Number.MAX_SAFE_INTEGER : nums1[partition1];
      let minRightNums2 = partition2 === n ? Number.MAX_SAFE_INTEGER : nums2[partition2];

      if(maxLeftNums1 <= minRightNums2 && minRightNums1 >= maxLeftNums2) {
          if( (m + n) % 2 === 0 ) {
              return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2))/2;
          } else {
              return Math.max(maxLeftNums1, maxLeftNums2);
          }
      } else if(maxLeftNums1 > minRightNums2) {
          end = partition1 - 1;
      } else {
          start = partition1 + 1;
      }
    }
};
