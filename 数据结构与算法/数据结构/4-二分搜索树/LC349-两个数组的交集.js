/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set();
    nums1.forEach(num => set.add(num));
    let res = [];
    nums2.forEach(num => {
        if (set.has(num)) {
            res.push(num);
            set.delete(num);
        }
    });

    return res;
};

// let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
let nums1 = [1,2,2,1], nums2 = [2,2]

intersection(nums1, nums2);