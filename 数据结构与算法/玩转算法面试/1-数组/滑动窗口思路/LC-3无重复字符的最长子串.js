/* 
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:

    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    示例 2:

    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    示例 3:

    输入: "pwwkew"
    输出: 3
*/


// 滑动窗口思路
var lengthOfLongestSubstring = function(s) {
    let freq = new Array(256).fill(0);  // 频率
    let l = 0, r = -1;  // 滑动窗口为s[l...r]
    let len = 0;

    console.log(s.charCodeAt(r+1))

    while (l < s.length) {
        if (freq[s.charCodeAt(r + 1)] === 0 && r + 1 < s.length) {
            r++;
            freq[s.charCodeAt(r)]++;
        } else {
            freq[s.charCodeAt(l)]--;
            l++;
        }

        len = Math.max(len, r - l + 1);
    }

    return len;
};

console.log(lengthOfLongestSubstring("pwwkew"));