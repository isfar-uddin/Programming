/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Complexity O(n * m);
var intersection = function(nums1, nums2) {
  let resultSet = new Set();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        resultSet.add(nums1[i]);
      }
    }
  }

  return [...resultSet];
};

//Complexity O(n + m)
var intersection = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersection(nums2, nums1);

  let resultMap = new Map();
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!resultMap.has(nums1[i])) resultMap.set(nums1[i], true);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (resultMap.has(nums2[i])) {
      resultMap.delete(nums2[i]);
      result.push(nums2[i]);
    }
  }

  return result;
};

//Complexity O(nlogn)
//If both arrays sorted then Complexity will be O(n)
var intersection = function(nums1, nums2) {
  let resultSet = new Set();
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let low = 0,
    high = 0;

  while (nums1[low] !== undefined && nums2[high] !== undefined) {
    if (nums1[low] === nums2[high]) {
      resultSet.add(nums1[low]);
      low++;
      high++;
    } else if (nums1[low] > nums2[high]) {
      high++;
    } else {
      low++;
    }
  }

  return [...resultSet];
};
