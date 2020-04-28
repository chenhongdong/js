/* 
给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
注意:
可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

示例 1:
    输入: [ [1,2], [2,3], [3,4], [1,3] ]
    输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:
    输入: [ [1,2], [1,2], [1,2] ]
    输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。

链接：https://leetcode-cn.com/problems/non-overlapping-intervals
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

// 1. 动态规划(最长上升子序列)
// 时间复杂度: O(n^2)
var eraseOverlapIntervals = function(intervals) {
    // 边界情况，数组为空返回0
    if (intervals.length === 0) return 0;
    // 给二维数组排序，由小到大
    intervals.sort((a, b) => a[0] - b[0]);
    let len = intervals.length;
    // memo[i]表示使用intervals[0...i]的区间能构成的最长不重叠区间序列
    let memo = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        // 求出memo[i]相对应的值
        for (let j = 0; j < i; j++) {
            // 后面数组里的第一项值 要大于等于 前面数组里的最后一项值
            // 就可以连接上，不重叠区域
            if (intervals[i][0] >= intervals[j][1]) {
                memo[i] = Math.max(memo[i], 1 + memo[j]);
            }
        }
    }
    let num = 1;
    for (let i = 0; i < len; i++) {
        num = Math.max(num, memo[i]);
    }
    return len - num;   // 这是来实现的， 
};


// 2. 贪心算法
// 时间复杂度O(n)
var eraseOverlapIntervals = function(intervals) {
    // 处理边界
    if (intervals.length === 0) {
        return 0;
    }
    // 将二维数组由小到大排序，
    intervals.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    // 能保留的最大区间值
    let num = 1;
    let pre = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= intervals[pre][1]) {
            num++;
            pre = i;
        }
    }

    return intervals.length - num;
};

let arr = [ [3,4], [1,2], [2,3], [1,3] ];
// 排序后arr[ [1,2], [1,3], [2,3], [3,4]]
console.log(eraseOverlapIntervals(arr));