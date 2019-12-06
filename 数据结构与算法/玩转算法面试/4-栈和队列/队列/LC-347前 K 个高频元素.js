/* 
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]

链接：https://leetcode-cn.com/problems/top-k-frequent-elements
*/


let nums = [1, 1, 1, 2, 2, 3], k = 2;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
    优先队列的思路
    维护一个含有k个元素的优先队列。如果遍历到的元素比队列中的最小频率元素的频率高，
    则取出队列中最小频率的元素，将新元素入队。
    最终，队列中剩下的，就是前k个出现频率最高的元素。

    时间复杂度： O(nlogk)
*/
function Pair(ele, freq) {
    this.ele = ele;
    this.freq = freq;
}

var topKFrequent = function (nums, k) {
    // 统计每个元素出现的频率
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]].freq += 1;
        } else {
            map[nums[i]] = new Pair(nums[i], 1);
        }
    }

    // 扫描freq，维护当前出现频率最高的k个元素
    // 在优先队列中，按照频率排序，所以数据对是(频率,元素)的形式
    console.log(map)
    let pq = [];
    for (let key in map) {
        let { freq, ele } = map[key];

        if (pq.length === k) {
            console.log(freq, 'pq',pq);
            // 这里实现还有问题
            if (freq > pq[0].freq) {    
                pq.shift();
                pq.push(new Pair(ele, freq));
            }
        } else {
            pq.push(new Pair(ele, freq));
        }

    }
    let res = [];
    while (pq.length) {
        res.push(pq.shift().ele);
    }
    return res;
};

console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6));