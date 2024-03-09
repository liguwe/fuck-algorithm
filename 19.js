/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    // ::::返回的结果
    let res = 0;
    // ::::递归的深度,初始化为0
    let depth = 0;

    function traverse(root) {
        // ::::::base case
        if (root === null) {
            return;
        }
        /*************************************************
         * ::::::前序位置
         ************************************************/
        depth++;
        res = Math.max(depth, res);
        for (item of root.children) {
            traverse(item);
        }
        /*************************************************
         * ::::::::后序位置
         ************************************************/
        depth--;
    }

    traverse(root);

    return res;
};
