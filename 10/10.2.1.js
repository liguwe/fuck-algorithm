var canPartition = function (nums) {
    let W = 0;
    for (let num of nums) W += num;
    // 和为奇数时，不可能划分成两个和相等的集合
    if (W % 2 !== 0) return false;
    let N = nums.length;
    W = W / 2;

    let dp = new Array(W + 1).fill(false);

    // base case
    dp[0] = true;

    for (let i = 0; i < N; i++) {
        // ::::: 从后往前遍历
        for (let w = W; w >= 0; w--) {
            if (w - nums[i] >= 0) {
                dp[w] = dp[w] || dp[w - nums[i]];
            }
        }
    }
    return dp[W];
};
