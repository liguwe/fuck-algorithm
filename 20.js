/**
 * @description 根据输入的数字 n，返回所有小于这个数 n 的 二进制数
 * */

function generateBinaray(n) {
    // ::::结果集
    const res = [];
    // ::::路径
    const path = [];
    function backtrack(n) {
        // ::::到达叶子结点了
        if (n === 0) {
            console.log(path);
            // ::::::这里需要深拷贝一下，否则会出现引用问题,因为path是引用类型
            res.push(JSON.parse(JSON.stringify(path)));
            return;
        }

        // ::::回溯算法的遍历框架
        // ::::二进制，所以这里是 0 和 1， 即 i<2 即可
        for (let i = 0; i < 2; i++) {

            // ::::选择
            // ::::前序遍历，进入节点
            path.push(i);

            // :::::递归
            backtrack(n - 1);

            // ::::撤销选择
            // ::::后续遍历，离开节点
            path.pop();
        }
    }
    backtrack(n);

    console.log(res);
    return res;
}

generateBinaray(3);

generateBinaray(10);
