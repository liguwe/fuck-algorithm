/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// ::::分解问题的思路
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // ::::base case 这是递归的基本情况，也是递归结束的标志
    // 基本情况：如果当前节点为空，直接返回null
    if (root === null) {
        return null;
    }

    // ::::前序位置
    // :::: 对于非空节点，我们递归地调用invertTree函数来翻转当前节点的左子树和右子树。
    // :::: 这里的关键在于，我们先保存左子树翻转的结果，再翻转右子树，然后将两者交换。
    //  :::: 即使用 left 和 right 来个变量来保存左右子树的翻转结果
    // :::: 这样做是因为在递归调用过程中，原来的左右子树已经被修改，所以需要先保存它们的结果
    // 分解问题：递归地翻转左子树和右子树
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    // ::::后序位置
    // 将翻转后的左子树和右子树交换
    root.left = right;
    root.right = left;

    // 返回翻转后的根节点
    return root;
};
