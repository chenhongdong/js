/* 
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
返回 s 所有可能的分割方案。
示例:
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

链接：https://leetcode-cn.com/problems/palindrome-partitioning
*/



/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	let res = [];
	solution(s, []);
	return res;


	function solution(s, tmp) {
		if (s === '' || s.length === 0) {
			res.push([...tmp]);
			return;
		}

		for (let i = 1; i <= s.length; i++) {
			if (isPalidrome(s.substring(0, i))) {
				tmp.push(s.substring(0, i));
				console.log('新的s是： ', s.substring(i, s.length))
				solution(s.substring(i, s.length), tmp);
				tmp.pop();
			}
		}
		return;
	}
	// 判断回文
	function isPalidrome(str) {
		let i = 0,
			j = str.length - 1;
		console.log('回文串： ', str)
		console.log('i', str.charAt(i));
		console.log('j', str.charAt(j));
		while (i < j) {
			if (str.charAt(i) !== str.charAt(j)) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	}
};

console.log(partition('aab'));