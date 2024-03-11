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
var postorderTraversal = function (root) {

    if (root === null) return [];

    // ::::返回的结果
    const res = [];

    // ::::::::辅助栈
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        // ::::【逆序】添加节点值
        res.unshift(node.val);
        /*************************************************
         * ::::::::左节点先入栈，右节点后入栈, 保证右子树先遍历
         ************************************************/
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    return res;
};
