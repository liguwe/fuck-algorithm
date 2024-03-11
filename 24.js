/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // ::::base case
    let res = [];
    if (numRows < 1) {
        return res;
    }

    // ::::base case： 第一行
    let firstRow = [1];
    res.push(firstRow);

    // ::::// 开始一层一层生成，装入 res
    for (let i = 2; i <= numRows; i++) {
        let preRow = res[res.length - 1];
        res.push(generateNext(preRow));
    }

    return res;
};

/**
 * @description 生成下一行的数组
 * @param {Array} row 上一行的数组
 * */
var generateNext = function (row) {
    // ::::注意，是 [1] 不是 【0】，搞了半天
    const res = [1];
    for (let i = 0; i < row.length - 1; i++) {
        res.push(row[i] + row[i + 1]);
    }
    // ::::注意，是 [1] 不是 【0】，搞了半天
    res.push(1);
    return res;
}
