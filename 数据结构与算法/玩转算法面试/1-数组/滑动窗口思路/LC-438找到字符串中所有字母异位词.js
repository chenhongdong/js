/* 
    给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
    字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

    说明：
        字母异位词指字母相同，但排列不同的字符串。
        不考虑答案输出的顺序。
    示例 1:
        输入:
        s: "cbaebabacd" p: "abc"
        输出:
        [0, 6]
*/



/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 未解决
var findAnagrams = function(s, p) {
    let l = 0, r = -1;
    let res = [];
    while (l < s.length) {
        if (p.includes(s[r+1])) {
            r++;
            console.log('r', r);
        } else {
            console.log('l', s[l])
            l++;
        }
    }
};

let s = "cbaebabacd", p = "abc";
findAnagrams(s, p);

