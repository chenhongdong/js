/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    console.time('1');
    let map = new Map();
    let res = [];
    nums1.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    });
    nums2.forEach(num => {
        if (map.has(num)) {
            res.push(num);
            map.set(num, map.get(num) - 1);
            if (map.get(num) === 0) {
                map.delete(num);
            }
        }
    });
    console.timeEnd('1')
    return res;
};

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
// let nums1 = [1,2,2,1], nums2 = [2,2];
intersect(nums1, nums2);


var intersect2 = function(nums1, nums2) {
    console.time('2');
    let res = [],
        obj = {};

    for (let i = 0; i < nums1.length; i++) {
        if (!obj[nums1[i]]) {
            obj[nums1[i]] = 1;
        } else {
            obj[nums1[i]]++;
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (obj[nums2[j]]) {
            obj[nums2[j]]--;
            res.push(nums2[j]);
        }
    };
    console.timeEnd('2');
    return res;
};

intersect2(nums1, nums2);