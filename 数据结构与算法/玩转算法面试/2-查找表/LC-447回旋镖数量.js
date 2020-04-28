/* 
    给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
    找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

    示例:
        输入:
        [[0,0],[1,0],[2,0]]

        输出:
        2

        解释:
        两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
*/


/**
 * @param {number[][]} points
 * @return {number}
 */

// 时间复杂度： O(n^2)
// 空间复杂度： O(n)
var numberOfBoomerangs = function (points) {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let dis = distance(points[i], points[j]);   // 计算两点之间的距离
                console.log('距离',dis);
                if (map.has(dis)) {
                    map.set(dis, map.get(dis) + 1);
                } else {
                    map.set(dis, 1);
                }
                // 出现相同距离的次数只要超过2次就表示i到j和i到k的距离都相等
                // 这样的结果有2的阶乘个, 2!
                if (map.get(dis) >= 2) {
                    sum += 2 * (map.get(dis) - 1);
                }
            }
        }
        console.log('map', map);
        
    }
    return sum;
};

function distance(a, b) {
    // 两点间距离公式, (x0-x1)^2 + (y0-y1)^2 开根号
    // 这里不开根号是担心有小数的情况，造成在查找表中取值不精确
    // 两点间的距离相等，也表示距离的平方也是相等的
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
}

let points = [[0, 0], [1, 0], [2, 0]]
console.log(numberOfBoomerangs(points))