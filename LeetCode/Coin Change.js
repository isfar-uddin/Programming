/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Other's solution
/*var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);

    dp[0] = 0;

    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
*/

//My Solution
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coins.length; at++) {
        for(let i = coins[at- 1]; i <= amount; i++) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i] ? Math.min(dp[i], dp[i - coins[at - 1]] + 1) : dp[i - coins[at - 1]] + 1;
            }
        }
    }

    return dp[amount] - 1;
};
