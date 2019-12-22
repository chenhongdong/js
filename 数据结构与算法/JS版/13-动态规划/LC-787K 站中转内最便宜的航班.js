/* 
    有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。

    现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样的路线，则输出 -1。


    示例 1:
        输入: 
        n = 3, edges = [
            [0,1,100],
            [1,2,100],
            [0,2,500]
        ]
        src = 0, dst = 2, k = 1
        输出: 200
        解释: 
        城市航班图如下
        从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
*/

var findCheapestPrice = function (n, flights, src, dst, K) {
    let cheap = (src, dst, k) => {
        // 找到dst的前一站
        let prev = flights.filter(item => item[1] === dst);
        console.log(prev);
        let min = Math.min.apply(null, prev.map(item => {
            // 从dst往前找，找到了起始城市
            if (item[0] === src && k > -1) {
                return item[2];
            } else if (k === 0 && item[0] !== src) {
                return Number.MAX_SAFE_INTEGER;
            } else {
                return item[2] + cheap(src, item[0], k - 1);
            }
        }));
        return min;
    };

    return cheap(src, dst, K) || -1;
};

let n = 5, edges = [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], src = 2, dst = 1, k = 1;
let price = findCheapestPrice(n, edges, src, dst, k);
console.log(price);