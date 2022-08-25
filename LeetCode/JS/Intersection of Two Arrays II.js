/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let length1 = nums1.length,
    length2 = nums2.length;
  if (nums1.length > nums2.length) return intersect(nums2, nums1);

  const nums1Map = new Map();
  const ans = [];
  for (let i = 0; i < length1; i++) {
    if (nums1Map.has(nums1[i])) {
      nums1Map.set(nums1[i], nums1Map.get(nums1[i]) + 1);
    } else {
      nums1Map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < length2; i++) {
    if (nums1Map.get(nums2[i]) > 0) {
      ans.push(nums2[i]);
      nums1Map.set(nums2[i], nums1Map.get(nums2[i]) - 1);
    }
  }
  return ans;

  // Using Object map
  /*const map = {};
    const result = [];
    for (const num of nums1) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }
    for (const num of nums2) {
        if (map[num]) {
            result.push(num);
            map[num]--;
        }
    }
    return result;*/
};

//Complexity O(nlogn)
//If arrays are sorted then O(n)
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let low = 0,
    high = 0;
  let result = [];

  while (nums1[low] !== undefined && nums2[high] !== undefined) {
    if (nums1[low] === nums2[high]) {
      result.push(nums1[low]);
      low++;
      high++;
    } else if (nums1[low] > nums2[high]) {
      high++;
    } else {
      low++;
    }
  }

  return result;
};

