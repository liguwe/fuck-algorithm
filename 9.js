/**
 * @url https://leetcode.cn/problems/path-sum/description/
 * */
/**
 * @description 路径总和,分解成左右子树的问题
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // ::::base case
    if (root === null) return false;

    // ::::前序位置

    // ::::如果到达叶子节点，判断是否满足条件
    // ::::都到达叶子节点了，说明没有左右子树了，这时候只需要判断当前节点的值是否等于 targetSum 即可
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }

    // ::::分解问题, 分别求左右子树中是否存在路径和为 targetSum - root.val
    const hasPathInleft = hasPathSum(root.left, targetSum - root.val);

    // ::::中序位置
    const hasPathInRight = hasPathSum(root.right, targetSum - root.val);

    // ::::后序位置
    // ::::？？？为什么要在后序位置合并结果呢？
    return hasPathInleft || hasPathInRight;


};
