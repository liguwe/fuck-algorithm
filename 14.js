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
var inorderTraversal = function(root) {
    // ::::返回的结果
    const res = [];

    function traverse(root){
        // ::::base case, 递归结束的条件
        if(root === null) {
            return;
        }
        // ::::前序位置

        traverse(root.left);
        // :::::中序位置
        res.push(root.val);
        traverse(root.right);
        // :::::后序位置
    }
    traverse(root);
    return res;
};
