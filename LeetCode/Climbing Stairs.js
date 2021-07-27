/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i <= n; i++) {
        for(let at = 1; at <= 2; at++) {
            if(i >= at) {
             dp[i] += dp[i - at];
            }
        }
    }

    return dp[n];
};


// Other's solution using fibonacci
var climbStairs = function(n) {
    if(n <= 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;

    let one_step_before = 2;
    let two_steps_before = 1;
    let all_ways = 0;

    for(let i=2; i<n; i++){
    	all_ways = one_step_before + two_steps_before;
    	two_steps_before = one_step_before;
        one_step_before = all_ways;
    }
    return all_ways;
};
