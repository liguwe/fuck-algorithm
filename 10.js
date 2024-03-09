/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 翻转二叉树,遍历一遍二叉树的解决方案
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// ::::::解法一：通过遍历一遍二叉树得到结果
var invertTree = function(root) {

    function traverse(root) {
        // ::::base case
        if(root === null){
            return;
        }

        // ::::交换左右子树
        // ::::问：为什么在前序位置处理逻辑呢？
        const temp = root.left;
        root.left= root.right;
        root.right = temp;

        // ::::前序位置
        traverse(root.left);
        // :::: 中序位置
        traverse(root.right);
        // ::::后序位置

    }

    traverse(root);

    // ::::原地修改
    return root;
};
