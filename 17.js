/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    function traverse(root){
        if(root === null){
            return;
        }
        // ::::::前序位置
        // ::::使用for...of循环遍历数组
        for(let item of root.children){
            // ::::如果放到 for 循环里面，其实这就是回溯算法
            // ::::但这里遍历不会包含根节点
            res.push(root.val);
            traverse(item);
        }
        // ::::::后序位置
    }
    traverse(root);
    return res;
};
