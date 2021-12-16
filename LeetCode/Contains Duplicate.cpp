class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map <int, int> numsmap;
        
        for(int i = 0; i < nums.size(); i++) {
            if(numsmap.count(nums[i]) > 0) {
                return true;
            }
            numsmap[nums[i]] = true;
        }
        
        return false;
    }
};
