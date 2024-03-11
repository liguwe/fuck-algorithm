
// 使用栈来模拟递归的调用
const stack = [];

// 左侧节点入栈，一直到左侧节点为空
function pushLeftBranch(p) {
    while (p) {
        // ::::前序位置，进入一个节点时，就把它放入栈中
        stack.push(p);
        p = p.left;
    }
}

function traverse(root) {

    // ::::指向上一次遍历完的根节点
    let visited = new TreeNode(-1);

    // ::::开始遍历整个树
    pushLeftBranch(root);

    while (stack.length) {

        // 取出栈顶元素，但不出栈
        const p = stack[stack.length - 1];

        // p 的左侧节点已经全部入栈 或者 上次遍历完的根节点是 p 的左侧节点
        // 并且 p 的右侧节点还没有遍历
        if ((p.left === null || p.left === visited)
            && p.right !== visited) {
            // ::::中序位置
            pushLeftBranch(p.right);
        }

        // ::::p的右侧节点已经遍历完了
        if (p.right === null || p.right === visited) {
            // :::::后序位置
            visited = stack.pop();
        }

    }

}
