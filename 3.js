/**
 * @description 分割等和子集, 0/1背包的变种
 * @url https://leetcode-cn.com/problems/partition-equal-subset-sum/
 * @param {number} N
 * @param {number} W
 * @param {number[]} wt
 * */
function fn(N, W, wt) {
    // :::: 初始化dp数组 及其 base case
    const dp = [];
    for (let i = 0; i <= N; i++) {
        dp[i] = [];
        for (let w = 0; w <= W; w++) {
            // ::::重量为0时，表示能够装入
            if (w === 0) {
                dp[i][w] = true;
            }
            // ::::可选择的物品为0时，表示不能装入
            else if (i === 0) {
                dp[i][w] = false;
            }
            // ::::其余情况，初始化为false
            else {
                dp[i][w] = false;
            }
        }
    }
    // ::::根据状态个数，决定嵌套层数，
    // ::::使用动态规划框架模板代码遍历
    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= W; w++) {
            // ::::剩余容量已经小于 0 了，只能取决于上一个物品的状态，是否装满了
            if (w - wt[i - 1] < 0) {
                dp[i][w] = dp[i - 1][w];
            } else {
                // ::::选择
                dp[i][w] =
                    // ::::不装入
                    dp[i - 1][w] ||
                    // ::::装入
                    dp[i - 1][w - wt[i - 1]];
            }
        }
    }
    return dp[N][W];
}


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    // ::::如果总和为奇数，直接返回false
    if (sum % 2 !== 0) return false;
    // ::::背包容量
    const W = sum / 2;
    // ::::物品数量
    const N = nums.length;
    return fn(N, W, nums);
};

