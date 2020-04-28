/* 
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

链接：https://leetcode-cn.com/problems/merge-intervals
*/


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    let res = new Array(intervals.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = [];
    }
    // 以左端点为参照，进行升序处理
    intervals.sort((a, b) => a[0] - b[0]);
    res[0] = intervals[0];
    let pre = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= intervals[pre][1]) {
            res[pre][1] = Math.max(res[pre][1], intervals[i][1]);
        } else {
            pre = i;
            res[pre] = intervals[i];
        }
    }
    return res.filter(v => v.length > 0);
};




var merge = function(intervals) {
    let res = [];
    if (intervals.length === 0) {
        return res;
    }
    // 从小到大排序
    intervals.sort((a, b) => a[0] - b[0]);

    res.push(intervals[0]);
    let pre = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[pre][1] >= intervals[i][0]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        } else {
            pre = i;
            res.push(intervals[i]);
        }
    }

    return res;
};


let arr = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]));