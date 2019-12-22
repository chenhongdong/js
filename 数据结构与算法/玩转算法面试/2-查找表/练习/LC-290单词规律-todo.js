/* 
    给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
    这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
    示例1:
        输入: pattern = "abba", str = "dog cat cat dog"
        输出: true
    示例 2:
        输入: pattern = "abba", str = "dog cat cat fish"
        输出: false
*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr = str.split(' ');
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(pattern[i], arr[i]);
    }
   
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            
        }
    }
};

var pattern = "abba", str = "dog cat cat dog";
// var pattern = "abba", str = "dog cat cat fish";
console.log(wordPattern(pattern, str));