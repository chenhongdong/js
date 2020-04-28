/* 
给定一个没有重复数字的序列，返回其所有可能的全排列。
示例:
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

链接：https://leetcode-cn.com/problems/permutations
*/

// 递归+回溯

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 结果数组
let res = [];

function findPermute(nums, index, arr) {
    if (index === nums.length) {
        res.push([...arr]); // 要用到拷贝arr后的数组，不能直接用arr
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
            findPermute(nums, index + 1, arr);
            arr.pop();
        }
    }
    return;
}

var permute = function (nums) {
    if (nums.length === 0) {
        return res;
    }
    findPermute(nums, 0, []);
    return res;
};

console.log(permute( [['A','B'], ['a','b'], [1, 2]] ));


function fn(arr1, arr2) {
    let rtn = [];
    for (let i = 0, len = arr1.length; i < len; i++) {
        let s = arr1[i];
        for (let j = 0, l = arr2.length; j < l; j++) {
            rtn.push(s + arr2[j]);
        }
    }
    return rtn;
    
}
function print(arr) {
    return arr.reduce(function(arr1, arr2) {
        return fn(arr1, arr2);
    });
}
let arr = [['A', 'B'], ['a', 'b'], ['1', '2']];
console.log(print(arr));


Promise.resolve().then(()=>{

    return Promise.resolve(new Promise(res => res(123)))
    
    }).then( data => {
        console.log(data);
    })

