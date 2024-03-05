/**
 * @description 最长递增子序列
 * @url https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 定义dp数组
    const dp = [];
    // :::::初始化dp数组,
    // :::: dp[i] 代表以 nums[i] 结尾的最长递增子序列的长度，所以初始化为 1，即以自己结尾的最长递增子序列长度至少为 1
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
    }
    // :::::根据状态个数，决定嵌套层数
    // :::::这里的状态个数是数组长度，所以是 nums.length
    for (let i = 0; i < nums.length; i++) {
        // :::::选择：遍历所有的子问题
        for (let j = 0; j < i; j++) {
            // :::::nums[i] > nums[j] 说明 nums[i] 可以接在 nums[j] 后面，形成一个更长的递增子序列
            if (nums[i] > nums[j]) {
                // :::::状态转移方程
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // :::::返回结果
    return Math.max(...dp);
};
