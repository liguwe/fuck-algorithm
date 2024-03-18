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
// ::::层次遍历的思路
var minDepth = function (root) {
    //   ::::如果根节点为空，直接返回0
    if (root === null) return 0;
    // ::::默认深度为1
    let depth = 1;

    /*************************************************
     * ::::层次遍历框架
     ************************************************/
    let q = [root];

    while (q.length) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            // ::::注意：是 shift() 而不是 pop()
            const node = q.shift();
            // ::::如果到达叶子节点，返回深度
            if (node.left === null && node.right === null) {
                return depth;
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        // ::::深度加一
        depth++;
    }
};
