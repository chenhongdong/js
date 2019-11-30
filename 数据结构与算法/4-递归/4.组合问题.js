/* 
    ·从集合{a,b,c,d,e,f,g}中取出2个元素，有多少种组合？
     7           7!
    ( ) =    ————————   = 21
     2        (7-2)!2!
*/
/* 
                        组合问题分析
                    从ABCD四个球中取出2个
                       A   B   C   D
            A | B C D       +       A B C D
    如果选择A,那么从BCD中再取1个     如果不选择A，那么从BCD中再取2个
*/
/* 
    递归条件（从集合S中取k个）
    - 初始条件
        ·k=0或者k===|S| 返回当前解
    - 递归
        ·选择一个元素x
        ·递归：包含这个元素x
        ·递归：不包含这个元素x
        ·收集上面两步的结果
*/
/* 
    组合问题抽象
    伪代码：
        function combination(S, k) {
            if (k=== 0 || S.length === k) {
                返回当前结果
            }
            let res = [];
            const [first, ...others] = S;
            res.concat(first 和 combination(S, k-1) 每项组合);
            res.concat( combination(others, k) );
            return res;
        }
*/

// S: 数组，需要求组合的集合
// k: 取出元素个数
function combination(S, k) {
    if (k === 0 || S.length === k) {
        return [S.slice(0, k)];
    }
    let res = [];
    const [first, ...others] = S;
    res = res.concat( combination(others, k-1).map(c => [first, ...c]) );
    res = res.concat( combination(others, k) );
    return res;
}

const S = ['A', 'B', 'C', 'D', 'E'];
console.log(combination(S, 2));