/* 
    给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
    然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
    你需要计算完成所有任务所需要的最短时间。

    示例 1：
        输入: tasks = ["A","A","A","B","B","B"], n = 2
        输出: 8
        执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
*/


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // 表示最终队列执行的结果
    let q = '';
    // 对归类进行存储
    let Q = {};

    tasks.forEach(item => {
        if (Q[item]) {
            Q[item]++;
        } else {
            Q[item] = 1;
        }
    });

    while (1) {
        // 任务清单
        let keys = Object.keys(Q);
        if (!keys[0]) { // 所有任务都处理完了
            break;
        }
        // 声明一个队列，用来存储n+1的任务单元
        let tmp = [];
        for (let i = 0; i <= n; i++) {
            let max = 0,
                key,
                pos;

            keys.forEach((item, index) => {
                if (Q[item] > max) {
                    max = Q[item];
                    key = item;
                    pos = index;
                }
            });

            if (key) {
                tmp.push(key);
                keys.splice(pos, 1);    // 保证出现过的任务，下次就不再出现了
                Q[key]--;
                if (Q[key] < 1) {
                    delete Q[key];
                }
            } else {
                break;
            }
        }

        q += tmp.join('').padEnd(n + 1, '-');
    }
    // 边界处理
    q = q.replace(/-+$/g, '');

    return q.length;
};


let tasks = ["A", "A", "A", "B", "B", "B"], n = 2;
console.log(leastInterval(tasks, n));