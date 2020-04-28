


/**
 * Leetcode 46
 * @param {number[]} nums
 * @return {number[][]}
 */
/* let res = [];
let used = null;

var permute = function(nums) {
    used = Array(nums.length).fill(false);
    let arr = [];
    generatePerms(nums, 0, arr);
    return res;
};
let arr = permute([1]);
console.log(arr);
// p中保存了一个有index个元素的排列
// 向这个排列的末尾添加index+1个元素，获得一个有index+1个元素的排列
function generatePerms(nums, index, p) {
    if (index === nums.length) {
        res.push(p.slice());
        return res;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            // 将nums[i]添加到p中
            p.push(nums[i]);
            used[i] = true;
            generatePerms(nums, index + 1, p);
            p.pop();
            used[i] = false;
        }
    }
} */

// 方法2 dfs
/* var permute = function(nums) {
    let res = [];
    dfs(nums, 0, res);
    return res;
};

function dfs(nums, index, res) {
    if (index === nums.length) {
        res.push([...nums]);
    }

    for (let i = index; i < nums.length; i++) {
        swap(nums, index, i);
        dfs(nums, index + 1, res);
        swap(nums, index, i);
    }
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let arr = permute([1, 2]);
console.log(arr); */


let permute = function (nums) {
    let res = [];
    function permutes(nums, index, list) {
        if (index === nums.length) {
            res.push(list);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (list.indexOf(nums[i]) === -1) {
                list.push(nums[i]);
                permutes(nums, index + 1, [...list]);
                list.pop();
            }
        }
    }
    permutes(nums, 0, []);
    return res;
}

// function permutes(nums, index, list) {
//     if (index === nums.length) {
//         res.push(list);  
//         return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (list.indexOf(nums[i]) === -1) {
//             list.push(nums[i]);
//             permutes(nums, index + 1, [...list]);
//             list.pop();
//         }
//     }
// }

const arr = permute([1]);
console.log(arr);