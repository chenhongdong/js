/* 
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用一次。
说明：
所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
	[1, 7],
	[1, 2, 5],
	[2, 6],
	[1, 1, 6]
]

链接：https://leetcode-cn.com/problems/combination-sum-ii
*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let res = [];
	if (candidates.length === 0) {
		return res;
	}
	let used = new Array(candidates.length).fill(false);
	candidates.sort((a,b) => a - b);
	findSum(candidates, target, 0, []);
	return res;

	function findSum(candidates, target, index, arr) {
		if (target < 0) {
			return;
		}
		if (target === 0) {
			res.push([...arr]);
			return;
		}

		for (let i = index; i < candidates.length; i++) {
			if (!used[i]) {
				if (i > 0 && candidates[i] === candidates[i-1] && !used[i-1]) {
					continue;
				}
				used[i] = true;
				arr.push(candidates[i]);
				findSum(candidates, target - candidates[i], i + 1, arr);
				arr.pop();
				used[i] = false;
			}
		}
		return;
	}
};

let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2([2,5,2,1,2], 5));