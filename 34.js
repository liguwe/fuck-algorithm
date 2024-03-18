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
var maxLevelSum = function (root) {
    // ::::::::如果根节点为空，直接返回0
    if (root === null) {
        return 0;
    }
    // ::::::::层次
    let depth = 1;
    // ::::::::结果
    let res = 0;
    // ::::::::最大值,默认为最小值
    // let maxSum = -100000;
    let maxSum = -Infinity;
    let q = [root];
    while (q.length) {
        let size = q.length;
        let levelSum = 0;
        for (let i = 0; i < size; i++) {
            // ::::::::出队列,注意，这个是在 for 循环中的
            const node = q.shift();
            levelSum += node.val
            if (node.left !== null) {
                q.push(node.left)
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }
        if (levelSum > maxSum) {
            res = depth;
            maxSum = levelSum;
        }
        depth++;
    }
    return res;
};
