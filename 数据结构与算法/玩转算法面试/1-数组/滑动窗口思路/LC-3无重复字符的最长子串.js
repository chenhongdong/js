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
var lengthOfLongestSubstring = function (s) {
    let freq = new Array(256).fill(0);  // 频率
    let l = 0, r = -1;  // 滑动窗口为s[l...r]
    let len = 0;

    console.log(s.charCodeAt(r + 1))

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


var lengthOfLongestSubstring = function (s) {
    // 创建一个集合用来去除重复字符
    let set = new Set();
    // 滑动窗口l...r，max为找到不重复的最长子串长度
    let l = 0, r = -1, max = 0;

    while (l < s.length) {
        // 保证r+1不能越界s的长度，并且s[r+1]在集合中没有出现过的话
        // 就给加到集合中，r向右移动
        if (r + 1 < s.length && !set.has(s[r + 1])) {
            r++;
            set.add(s[r]);
        } else {
            // 出现了重复的字符，就让l右移，并且删掉重复的元素，缩小不重复字符的长度
            set.delete(s[l++]);
        }
        // r - l + 1是最大长度的滑动窗口范围
        max = Math.max(max, r - l + 1);
    }
    return max;
};