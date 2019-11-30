/* 
    给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
        输入: "Let's take LeetCode contest"
        输出: "s'teL ekat edoCteeL tsetnoc" 
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let words = arr[i].split('').reverse().join('');
        res.push(words);
    }

    return res.join(' ');
};

var reverseWords = function(s) {
    return s.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('');
    }).join(' ');
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));