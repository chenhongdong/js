/* 
    给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

    示例 1:

    输入: nums = [1,2,3,1], k = 3
    输出: true
    示例 2:

    输入: nums = [1,0,1,1], k = 1
    输出: true
    示例 3:

    输入: nums = [1,2,3,1,2,3], k = 2
    输出: false
*/



var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);
        console.log('set', set);
        // 保证set中有k个元素
        if (set.size === k + 1) {
            set.delete(nums[i - k]);
            console.log(set);
        }
    }
    return false;
};

let nums = [1,2,3,2,1,3,4], k = 2
console.log(containsNearbyDuplicate(nums, k));