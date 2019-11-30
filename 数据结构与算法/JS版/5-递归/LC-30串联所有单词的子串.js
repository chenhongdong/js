/* 
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

示例 1：
  输入：
    s = "barfoothefoobarman",
    words = ["foo","bar"]
  输出：[0,9]
  解释：
  从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
  输出的顺序不重要, [9,0] 也是有效答案。
*/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	let result = [];
	let num = words.length;

	let range = (res, wArr) => {
		if (res.length === num) {
			result.push(res);
		} else {
			wArr.forEach((item, index) => {
				let arr = [].concat(wArr);
				arr.splice(index, 1);
				range(res.concat(item), arr);
			});
		}
	};

	range([], words);

	console.log(result);
	return result.map(item => {
		return s.indexOf(item.join(''));
	}).filter(item => item !== -1);
};

// let s = "wordgoodgoodgoodbestword",
// 	words = ["word","good","best","word"];

let s = "wordgoodgoodgoodbestword",
	words = ["word","good","best","good"];

console.log(findSubstring(s, words));