/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = new Array(26).fill(0);   // freq就是一个哈希表   O(1)的查找操作
    const codeA = 97;

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - codeA;
        freq[index]++;
    }
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - codeA;
        if (freq[index] === 1) {
            return i;
        }
    }

    return -1;
};

let s = "loveleetcode";
let str = firstUniqChar(s);




var firstUniqChar2 = function(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

let s2 = "leetcode";
let str2 = firstUniqChar2(s2);
console.log('str', str2);