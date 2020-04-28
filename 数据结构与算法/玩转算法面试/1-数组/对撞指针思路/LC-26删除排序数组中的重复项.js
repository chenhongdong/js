/* 
    给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

    不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

    示例 1:
        给定数组 nums = [1,1,2], 
        函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(obj, nums);
    return nums.length;
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates([15, 20, 19, 20, 15, 0, 22, 30, 30]);



// 优化一下,好像不对
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            // nums[k] = nums[i];
            k++
        }
    }
    console.log(nums, k);
    return k;
};

// removeDuplicates([1, 1, 2]);
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates([0, 15, 15, 19, 20, 20, 22, 30, 30]);
