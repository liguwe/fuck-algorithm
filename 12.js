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
 * @return {number}
 */
var minDepth = function(root) {
    // ::::初始值
    let res = Infinity;
    // ::::深度
    let depth = 0;

    // ::::少了这段代码，所以报错

    // 如果根节点为 null，则直接返回 0
    if (root === null) return 0;

    function traverse(root) {

        // ::::base case

        // ::::问，返回什么？什么也不返回
        if(root === null) return;

        // ::::错误，之前的写法
        // if(root === null) return res;

        // ::::前序位置
        depth++;

        // ::::如果到达叶子节点，更新res
        if(root.left === null && root.right === null) {
            res = Math.min(res, depth);
        }

        traverse(root.left);
        // ::::中序位置
        traverse(root.right);

        // ::::后序位置
        depth--;
    }

    traverse(root);

    // return res;
    // 如果树不为空但没有叶子节点（只有一个根节点），则最小深度为 1
    return res === Infinity ? 1 : res;
};
