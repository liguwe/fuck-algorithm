/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// ::::① 定义，返回第rowIndex行的数组，并且相信它
var getRow = function (rowIndex) {

    // ::::第一个元素是1
    let row = [1];

    // ::::② base case
    if (rowIndex === 0) {
        return row;
    }

    // ::::::③ 递归调用，新得到上一行的数组
    const preRow = getRow(rowIndex - 1);
    for (let i = 0; i < rowIndex - 1; i++) {
        const value = preRow[i] + preRow[i + 1];
        row.push(value)
    }

    // :::: 最后一个元素是1
    row.push(1);

    return row;

};
