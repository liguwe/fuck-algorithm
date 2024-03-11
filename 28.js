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

    // ::::如果根节点为空，直接返回空数组
    if (root === null) return [];

    // ::::::返回的结果
    let res = [];

    // ::::::::辅助栈,默认放入根节点
    const stack = [root];

    // ::::::::迭代
    while (stack.length) {

        // :::::弹出栈顶元素
        const node = stack.pop();

        // ::::前序位置
        res.push(node.val);

        /*************************************************
         * :::::右节点先入栈，左节点后入栈,保证左子树先遍历
         ************************************************/
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left){
            stack.push(node.left);
        }
    }

    return res;
};
