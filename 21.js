/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 判断两个二叉树是否相同
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// ::::第一步：定义：输入两棵树p、q，返回一个布尔值，表示两棵树是否相同
var isSameTree = function(p, q) {


    // ::::第二步：base case, 递归结束的条件

    //:::: ① 条件一：两个节点都为空，返回true，说明两个节点相同
    if(p === null && q === null){
        return true;
    }
    // :::: ② 条件二：两个节点中有一个为空，一个不为空，返回false，说明两个节点不相同
    if(p === null || q === null){
        return false;
    }
    // :::: ③ 条件三：两个节点都不为空，但是值不相等，返回false，说明两个节点不相同
    if(p.val !== q.val){
        return false;
    }

    // ::::::第三步：递归调用左右子树
    const isLeftSame = isSameTree(p.left, q.left);
    const isRightSame = isSameTree(p.right, q.right);

    return isLeftSame && isRightSame;

};
