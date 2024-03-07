/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * :::: 解法一：遍历一遍二叉树
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = 0;

    // ::::需要正确的维护深度，即前序遍历++ 后序遍历--
    let depth = 0;

    function traverse(root) {
        // ::::base case
        if (root === null) return res;
        // ::::前序位置
        depth++;

        // ::::如果到达叶子节点，更新res
        if (root.left === null && root.right === null) {
            res = Math.max(res, depth);
        }

        traverse(root.left);
        // :::::中序位置
        traverse(root.right);
        // ::::后序位置
        depth--;
    }

    traverse(root);

    return res;
};
