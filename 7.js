/**
 * :::: 解法二：分解问题的思路
 * @param {TreeNode} root
 * @return {number}
 * @url https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function (root) {
    // ::::base case
    if (root === null) return 0;

    // ::::前序位置

    // ::::分解问题, 分别求左右子树的最大深度
    const left = maxDepth(root.left);

    // ::::中序位置
    const right = maxDepth(root.right);

    // ::::后序位置，合并结果，为什么要在后序位置合并结果呢？
    // ::::因为要先解决子问题，即计算出左右子树的最大深度，才能推导出父类的最大深度

    // ::::合并结果
    return Math.max(left, right) + 1;

};
