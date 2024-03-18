var levelTraverse = function (root) {
    let res = [];
    // ::::关键是把 depth、res 作为参数传入
    traverse(root, 0, res);
    return res;
};

/**
 * @description 递归遍历,// ::::都作为参数传入，更新的是 res
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number[][]} res
 * */
function traverse(root, depth, res) {
    if (root == null) {
        return;
    }

    // 前序位置，看看是否已经存储 depth 层的节点了
    if (res.length <= depth) {
        // 第一次进入 depth 层
        res.push([]);
    }

    // 前序位置，在 depth 层添加 root 节点的值
    res[depth].push(root.val);
    traverse(root.left, depth + 1, res);
    traverse(root.right, depth + 1, res);
}
