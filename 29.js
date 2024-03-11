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

    // ::::::::辅助栈
    const stack = [];

    // ::::::::迭代
    while (root || stack.length) {

        // :::::左节点全部入栈,直到没有左节点
        while (root) {
            stack.push(root);
            root = root.left;
        }

        /*************************************************
         * ::::::::中序位置,只有在弹出栈顶元素的时候才会访问
         ************************************************/
        // :::::弹出栈顶元素
        root = stack.pop();
        res.push(root.val);

        // :::::右节点
        root = root.right;
    }
    return res;
};
