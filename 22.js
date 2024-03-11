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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ::::第一步：定义：输入一个二叉树，返回一个链表，它会打平
var flatten = function (root) {

    // ::::第二步：base case, 递归结束的条件
    if (root === null) {
        return;
    }
    // ::::第三步：递归调用左右子树

    // ::::左子树已经被拉平成一条链表
    flatten(root.left);
    // :::: 让左子树指向变量 left，为了后面操作左右子树的指向，方便操作单链表
    let left = root.left;

    // ::::右子树已经被拉平成一条链表
    flatten(root.right);
    // :::: 让右子树指向变量 right，为了后面操作左右子树的指向，方便操作单链表
    let right = root.right;

    /*************************************************
     * ::::处理单链表指向问题
     ************************************************/
    // ::::: ① 让左子树为空，右子树指向左子树
    root.left = null;
    root.right = left;

    // :::: ② 指针指向 p,一直前进，直到
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }

    // :::: ③ 让右子树指向变量 right
    p.right = right;

};
