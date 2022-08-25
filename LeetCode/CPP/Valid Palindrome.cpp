class Solution {
public:
    bool isPalindrome(string s) {
        int strLen = s.length();
        string str;
        
        for(int i = 0; i < strLen; i++) {
            if(isalpha(s[i]) || isdigit(s[i])) {
                str += tolower(s[i]);        
            }
        }
        
        int j = 0, k = str.length() - 1;
        while(j <= k) {
            if(str[j] != str[k]) return false;
            j++;
            k--;
        }
        
        return true;
    }
};
