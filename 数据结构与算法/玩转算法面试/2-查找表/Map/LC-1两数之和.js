/* 
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    示例:
        给定 nums = [2, 7, 11, 15], target = 9

        因为 nums[0] + nums[1] = 2 + 7 = 9
        所以返回 [0, 1]
*/

let nums = [7, 2, 15, 11], target = 9;


var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let last = target - nums[i];    // 16;  11; 7;  3

        if (map.has(last)) {
            let res = [map.get(last), i];
            return res;
        }

        map.set(nums[i], i);    // 2, 0;    7, 1;   11, 2;  15, 3
    }
};

console.log(twoSum(nums, target));