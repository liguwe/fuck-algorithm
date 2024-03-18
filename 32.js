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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // 如果根节点为空，则返回空数组
    if (root === null) return [];
    // 返回的结果
    const res = [];
    // 辅助队列,初始化队列，首先加入根节点
    const q = [root];

    while (q.length) {
        const size = q.length;
        // 用于存储当前层的节点值
        const currentLevel = [];
        for (let i = 0; i < size; i++) {
            // :::::出队列
            const node = q.shift();
            currentLevel.push(node.val);
            // :::::左节点先入队列
            if (node.left) {
                q.push(node.left);
            }
            // :::::右节点后入队列
            if (node.right) {
                q.push(node.right);
            }
        }
        res.unshift(currentLevel);
    }

    return res;

};
