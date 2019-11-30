/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach(num => {   // O(n)
        if (map[num]) {
            map[num].freg += 1;
        } else {
            map[num] = new Freg(num, 1);
        }
    });

    function Freg(e, freg) {
        this.e = e;
        this.freg = freg;
    }

    let arr = [];
    for (let key in map) {
        arr.push(map[key]);
    }

    arr.sort((a, b) => b.freg - a.freg);

    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i].e);
    }
    
    return res;
};


// let nums = [1,1,1,2,2,3], k = 2;
// let nums = [1], k = 1;
// let nums = [5,2,5,3,5,3,1,1,3], k = 2;
// let nums = [5,3,1,1,1,3,73,1], k = 2;
// let nums = [11, 7, 10, 7, 11, 9, 8, 7, 9], k = 3;
console.log(topKFrequent(nums, k));