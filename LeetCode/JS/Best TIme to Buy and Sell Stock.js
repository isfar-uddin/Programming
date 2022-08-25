/**
 * @param {number[]} prices
 * @return {number}
 */
//My Solution
/*
var maxProfit = function(prices) {
    let max = 0;
    let dp = new Array(prices.length + 1).fill(0);
    for(let i = prices.length - 1; i >= 1; i--) {
        dp[i - 1] = Math.max(prices[i] - prices[i - 1], prices[i] - prices[i - 1] + dp[i]);
        if(max < dp[i - 1]) max = dp[i - 1];
    }

    return max;
};
*/

//Efficient solution
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0, sell = 1;
    while(sell < prices.length) {
        let profit = prices[sell] - prices[buy];
        if(max < profit) max = profit;
        if(profit < 0) buy = sell;
        sell++;
    }

    return max;
};
