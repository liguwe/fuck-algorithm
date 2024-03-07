/**
 * @url https://leetcode.cn/problems/path-sum/description/
 * */

// ::::解法一：递归的思路
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let hasSum = false;

    let sum = 0;

    function traverse(root) {
        // ::::base case
        if (root === null) return;

        // ::::前序位置
        sum += root.val;

        // ::::如果到达叶子节点，判断是否满足条件
        if (root.left === null && root.right === null) {
            if (sum === targetSum) {
                hasSum = true;
            }
        }

        traverse(root.left);
        // ::::中序位置
        traverse(root.right);
        // ::::后序位置

        sum -= root.val;
    }

    traverse(root);

    return hasSum;
};
