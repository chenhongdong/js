/* 
    给定两个数组，编写一个函数来计算它们的交集。
    示例 1:
    输入: nums1 = [1,2,2,1], nums2 = [2,2]
    输出: [2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let record = new Set();
    let set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        record.add(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (record.has(nums2[i])) {
            set.add(nums2[i]);
        }
    }
    console.log(Array.from(set))
    console.log(set);
};
let nums1 = [1,2,2,1], nums2 = [2,2];
intersection(nums1, nums2)