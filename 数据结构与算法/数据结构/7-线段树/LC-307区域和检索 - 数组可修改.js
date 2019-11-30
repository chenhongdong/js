const SegmentTree = require('./segTree');

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segTree = null;
    if (nums.length > 0) {
        let data = [];
        for (let i = 0; i < nums.length; i++) {
            data.push(nums[i]);
        }
        this.segTree = new SegmentTree(data);
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    if (this.segTree !== null) {
        this.segTree.set(i, val)
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (this.segTree !== null) {
        return this.segTree.query(i, j);
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// let nums = [1, 3, 5];
// let obj = new NumArray(nums);
// obj.update(1, 2);
// console.log(obj.sumRange(0, 2))



/**
 * @param {number[]} nums
 */
var NumArray2 = function(nums) {
    this.arr = nums;
};

NumArray2.prototype.update = function(i, val) {
    this.arr[i] = val;
};

NumArray2.prototype.sumRange = function(i, j) {
    let sum = 0;
    for (let m = i; m <= j; m++) {
        sum += this.arr[m];
    }
    return sum
};

let nums2 = [1, 3, 5];
let obj2 = new NumArray2(nums2);
obj2.update(1, 2);
console.log(obj2.sumRange(0, 2))