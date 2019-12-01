/* 
    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

    示例 1:
        输入: s = "anagram", t = "nagaram"
        输出: true
        示例 2:

        输入: s = "rat", t = "car"
        输出: false
*/


var isAnagram = function(s, t) {
    // 边界条件
    if (s === '' && t === '') return true;
    if (s.length !== t.length) return false;

    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1);

            if (map.get(t[i]) === 0) {
                map.delete(t[i]);
            }
        }
    }

    if (Array.from(map).length === 0) {
        return true;
    }
    return false;
};


let s = "anagram", t = "nagaram"
console.log(isAnagram(s, t))