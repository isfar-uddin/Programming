let testCase1 = [4,6,2,8, 7, 3, 1];
let testCase2 = [3,5,8]
let coins = testCase2;
let amount = 10;

//Check whether make the amount or not
let isPossible;
let coinsLength = coins.length;

//Coin change recursive way (can use one coin only once)
//Without memorization
let recursiveCoinChange = function() {

    return function coinChange(at, amount) {

        if(at < 0 ) return amount === 0;
        if(amount < 0) return 0;

        if(coinChange(at - 1, amount - coins[at]) || coinChange(at - 1, amount)) {
            return 1;
        }

        return 0;
    }
}

isPossible = recursiveCoinChange();

console.log('No memorization: ',isPossible(coins.length - 1, amount));

//Coin change recursive way (can use one coin only once)
//With memorization
let recursiveCoinChangeMemorization = function() {
    let dp = new Array(100).fill(0).map(() => new Array(10000).fill(-1));

    return function coinChange(at, amount) {
        if(amount < 0) return 0;
        if(at < 0) return amount === 0;
        if(dp[at][amount] !== -1) return dp[at][amount];

        if(coinChange(at - 1, amount - coins[at]) || coinChange(at - 1, amount)) {
            return dp[at][amount] = 1;
        }

        return dp[at][amount] = 0;
    }
}

isPossible = recursiveCoinChangeMemorization();
console.log('Memorization: ', isPossible(coins.length - 1, amount));

//Iterative way
// With memorization
let iterativeCoinChangeMemorization = function() {
    let dp = new Array(coinsLength + 1).fill(0).map(() => new Array(amount + 1).fill(0));
    dp[0][0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = 0; i <= amount; i++) {
            if(dp[at - 1][i] || (i >= coins[at - 1] && dp[at - 1][i - coins[at - 1]])) {
                dp[at][i] = 1;
            }
        }
    }

    return dp[coinsLength][amount];
}

isPossible = iterativeCoinChangeMemorization();
console.log('Iterative Memorization: ', isPossible);

//Space optimization O(2*amount)
//Memorization
let iterativeCoinChangeMemorizationSpaceOptimization = function() {
    let dp = new Array(2).fill(0).map(() => new Array(amount + 1).fill(0));
    dp[0][0] = 1;
    let u = 0, v = 1;

    for(let at = 1; at <= coinsLength; at++) {
        for(let i = 0; i <= amount; i++) {
            if(dp[u][i] || (i >= coins[at - 1] && dp[u][i - coins[at - 1]])) {
                dp[v][i] = 1;
            }
        }

        u = 1 - u;
        v = 1 - v;
    }

    return dp[u][amount];
}

isPossible = iterativeCoinChangeMemorizationSpaceOptimization();
console.log('Iterative Memorization optimization: ', isPossible);

//Space optimization O(amount)
//Memorization
let iterativeCoinChangeMemorizationMostSpaceOptimization = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = amount; i >= coins[at - 1]; i--) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = 1;
            }
        }
    }

    return dp[amount];
}

isPossible = iterativeCoinChangeMemorizationMostSpaceOptimization();
console.log('Iterative Memorization most space optimization: ', isPossible);

//Space optimization O(amount)
//Memorization
//Coin count (if same amount is made by two then latest one will be counted)
let iterativeCoinChangeCoinCount = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = amount; i >= coins[at - 1]; i--) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i - coins[at - 1]] + 1;
            }
        }
    }

    return dp[amount] - 1; // as we take dp[0] = 1 so that we need to substract that value
}

let numberOfCoin = iterativeCoinChangeCoinCount();
console.log('Iterative Memorization and number of coin: ', numberOfCoin);

//Space optimization O(amount)
//Memorization
//Coin count (if same amount is made by two then latest one will be counted)
let iterativeCoinChangeMinCoinCount = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = amount; i >= coins[at - 1]; i--) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i] ? Math.min(dp[i], dp[i - coins[at - 1]] + 1) : dp[i - coins[at - 1]] + 1;
            }
        }
    }

    return dp[amount] ? dp[amount] - 1 : 0; // as we take dp[0] = 1 so that we need to substract that value
}

let minNumberOfCoin = iterativeCoinChangeMinCoinCount();
console.log('Iterative Memorization and minimum number of coin: ', minNumberOfCoin);

//Space optimization O(amount)
//Memorization
//Coin count (if same amount is made by two then latest one will be counted)
let iterativeCoinChangeWayCount = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = amount; i >= coins[at - 1]; i--) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i] + dp[i - coins[at- 1]];
            }
        }
    }

    return dp[amount]; // as we take dp[0] = 1 so that we need to substract that value
}

let wayCount = iterativeCoinChangeWayCount();
console.log('Iterative Memorization and number of way: ', wayCount);

//Space optimization O(amount)
//Memorization
//number of way count (if same amount is made by two then latest one will be counted)
let iterativeCoinChangeWayCountUsingSameCoin = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = coins[at - 1]; i <= amount; i++) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i] + dp[i - coins[at- 1]];
            }
        }
    }

    return dp[amount];
}

let wayCountUsingSameCoin = iterativeCoinChangeWayCountUsingSameCoin();
console.log('Iterative Memorization and number of way using same coin multiple time: ', wayCountUsingSameCoin);

//Space optimization O(amount)
//Memorization
//Coin count (if same amount is made by two then latest one will be counted)
let iterativeCoinChangeMinCoinCountUsingSameCoin = function() {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let at = 1; at <= coinsLength; at++) {
        for(let i = coins[at - 1]; i <= amount; i++) {
            if(dp[i - coins[at- 1]]) {
                dp[i] = dp[i] ? Math.min(dp[i], dp[i - coins[at - 1]] + 1) : dp[i - coins[at - 1]] + 1;
            }
        }
    }

    return dp[amount] ? dp[amount] - 1 : 0; // as we take dp[0] = 1 so that we need to substract that value
}

let minNumberOfCoinUsingSameCoin = iterativeCoinChangeMinCoinCountUsingSameCoin();
console.log('Iterative Memorization and minimum number of coin using same coin: ', minNumberOfCoinUsingSameCoin);

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
