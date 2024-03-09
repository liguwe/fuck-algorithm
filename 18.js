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
var postorder = function(root) {
    const res = [];
    function traverse(root){
        if(root === null){
            return;
        }
        /*************************************************
         * ::::前序位置
         ************************************************/
        // ::::使用for...of循环遍历数组
        for(let item of root.children){
            traverse(item);
        }
        /*************************************************
         * ::::后序位置
         ************************************************/
        res.push(root.val);
    }
    traverse(root);
    return res;
};
