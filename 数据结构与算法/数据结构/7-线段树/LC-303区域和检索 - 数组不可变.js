/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.data = [];
    for (let i = 0; i < nums.length; i++) {
        this.data.push(nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let res = this.data.slice(i, j + 1);
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
};

// let nums = [-2, 0, 3, -5, 2, -1];
// let obj = new NumArray(nums);
// let param_1 = obj.sumRange(1, 3);



/**
 * @param {number[]} nums
 */
// sum[i]存储前i个元素的和, sum[0] = 0
// sum[i]存储nums[0...i-1]的和
let sum = [];

var NumArray2 = function (nums) {
    sum.length = nums.length + 1;
    sum[0] = 0;
    for (let i = 1; i < sum.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
    }
};

NumArray2.prototype.sumRange = function (i, j) {
    return sum[j + 1] - sum[i];
};

let nums = [-2, 0, 3, -5, 2, -1];
let obj = new NumArray2(nums);
let param_1 = obj.sumRange(0, 5);
console.log(param_1)