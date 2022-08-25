/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, buy = 0, sell = 1;

    while(sell < prices.length) {
        if(prices[buy] < prices[sell]) {
            profit += prices[sell] - prices[buy]
        }
        buy++;
        sell++;
    }

    return profit;
};
