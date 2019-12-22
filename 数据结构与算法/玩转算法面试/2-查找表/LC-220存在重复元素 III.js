/* 
给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
*/

// 时间复杂度： O(nlogn)
// 空间复杂度： O(k)
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        let ceil = ceiling(set, nums[i] - t);
        console.log('ceil', ceil);
        if (set.has(ceil)) {
            if (ceil <= nums[i] + t) {  // ceil(v-t) <= v+t
                return true;
            }
        }
        
        set.add(nums[i]);
        // 保证set里只有k个元素
        if (set.size === k + 1) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};

let nums = [1,2,3,1], k = 3, t = 0
console.log(containsNearbyAlmostDuplicate(nums, k, t));


// 寻找比n大的最小的那个数
function ceiling(source, n) {
    let res = Array.from(source).filter(item => item >= n);
    return Math.min(...res)
}