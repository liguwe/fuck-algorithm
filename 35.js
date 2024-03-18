/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // ::::::::如果根节点为空，则返回空数组
    if (root === null) {
        return [];
    }
    // ::::::::返回的结果
    let res = [];
    // ::::::::辅助队列,初始化队列，首先加入根节点
    let q = [root];
    /*************************************************
     * ::::::::层次遍历框架：队列不为空时，循环
     ************************************************/
    while (q.length) {
        // ::::::::用于存储当前层的节点值
        let level = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            // ::::::::出队列
            const node = q.shift();
            level.push(node.val);
            // ::::::::遍历子节点，入队列,多叉树的子节点是一个数组
            for (let item of node.children) {
                q.push(item);
            }
        }
        res.push(level);
    }

    return res;
};
