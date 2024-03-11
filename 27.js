/**
 * @description 二叉树遍历递归解法
 * */

// 使用栈来模拟递归的调用
const stack = [];

function traverse(root) {

    if (root === null) {
        return;
    }

    // ::::::前序位置
    stack.push(root);
    traverse(root.left);

    // ::::::中序位置
    traverse(root.right);

    // ::::::后序位置
    stack.pop();

    return stack;
}
