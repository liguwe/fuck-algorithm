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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [];

    // ::::base case
    if (root === null) {
        return res;
    }
    res.push(root.val);

    // ::::::前序位置
    res.push(...preorderTraversal(root.left));
    // ::::::::中序位置
    res.push(...preorderTraversal(root.right));
    // ::::::::后序位置

    return res;
};
