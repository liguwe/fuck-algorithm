/**
 * @description 最小硬币数
 * @url https://leetcode-cn.com/problems/coin-change/
 * */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    // ::::初始化 dp 数组
    // ::::dp[i] 代表需要找零金额为 i 时，需要最小的硬币数
    const dp = [];
    for (let i = 0; i <= amount; i++) {
        dp[i] = Infinity;
    }

    // ::::base case
    dp[0] = 0;

    // ::::根据状态个数，决定嵌套层数，
    // ::::这里的状态个数是金额数，所以是 amount
    for (let i = 0; i <= amount; i++) {
        // :::: 选择：去遍历所有的硬币，然后做选择
        for (let coin of coins) {
            // ::::选择的硬币金额为 coin, 而需要找零金额为 i ，所以 i - coin 代表剩余金额

            // ::::如果剩余金额小于0，说明这个硬币不能用
            if (i - coin < 0) continue;

            // 说明这个硬币可以用，所以需要找零金额为 i 时，需要最小的硬币数为 1 + dp[i - coin]
            // 所以最终需要取最小值，所以是 Math.min(dp[i], 1 + dp[i - coin])
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }


    // :::::返回结果
    return dp[amount] === Infinity ? -1 : dp[amount];
};
