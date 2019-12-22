/* 
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
说明：
所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1:
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]

链接：https://leetcode-cn.com/problems/combination-sum
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let res = [];
	if (candidates.length === 0) {
		return res;
	}
	findSum(candidates, target, 0, []);

	return res;


	function findSum(candidates, target, index, arr) {
		// 终止条件target<0
		if (target < 0) {
			return;
		}
		// 终止条件target为0，就表示找到了一个组合，添加到res里
		if (target === 0) {
			res.push([...arr]);
			return;
		}
		// let i = index，递归把当前的i作为index参数传入解决了重复求和为target
		for (let i = index; i < candidates.length; i++) {
			arr.push(candidates[i]);
			findSum(candidates, target - candidates[i], i, arr);
			arr.pop();
		}
		return;
	}
};

let candidates = [2,3,6,7], target = 7;
console.log(combinationSum([2,3,5], 8))