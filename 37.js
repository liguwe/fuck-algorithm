/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    // ::::::::行数
    const m = grid.length;
    if (m === 0) {
        return res;
    }
    // ::::::::列数
    const n = grid[0].length;
    // ::::::::遍历整个二维数组
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // ::::::::如果当前位置是岛屿
            if (grid[i][j] === '1') {
                // ::::::::岛屿数量加一
                res++;
                //:::: 然后使用 DFS 将岛屿淹了
                bfs(grid, i, j);
            }
        }
    }
    return res;
};

/**
 * @description ::::从 (i, j) 开始，将与之相邻的陆地都变成海水
 * */
var bfs = function (grid, i, j) {
    // ::::::::行数
    const m = grid.length;
    // ::::::::列数
    const n = grid[0].length;
    // ::::::::辅助队列,初始化队列，首先加入根节点
    const q = [[i, j]];

    // :::: 将当前位置的值置标识为 0，即将岛屿淹了
    grid[i][j] = '0';

    while (q.length) {
        let size = q.length;
        for (let k = 0; k < size; k++) {
            const [x, y] = q.shift();
            // ::::上边,如果上边是陆地，则入队列,并且将陆地变成海水
            if (y - 1 >= 0 && grid[x][y - 1] === '1') {
                q.push([x, y - 1]);
                grid[x][y - 1] = '0';
            }
            // 下边,如果下边是陆地，则入队列,并且将陆地变成海水
            if (y + 1 < n && grid[x][y + 1] === '1') {
                q.push([x, y + 1]);
                grid[x][y + 1] = '0';
            }
            // 左边,如果左边是陆地，则入队列,并且将陆地变成海水
            if (x - 1 >= 0 && grid[x - 1][y] === '1') {
                q.push([x - 1, y]);
                grid[x - 1][y] = '0';
            }
            // 右边,如果右边是陆地，则入队列,并且将陆地变成海水
            if (x + 1 < m && grid[x + 1][y] === '1') {
                q.push([x + 1, y]);
                grid[x + 1][y] = '0';
            }
        }
    }
}
