// 二、综合实战测试 60分：每题15分
// 1、写一个方法，找出字符串 “abcabcabcabcabcabda” 中”ab”出现的次数和位置；
/* let str = 'abcabcabcabcabcabda';
let arr = [];   // 出现位置的结果数组
let n = 0;
let count = 0;  // 出现的次数
while(str.indexOf('ab',n) !== -1 && n < str.length) {
    arr.push(str.indexOf('ab', n));
    n = str.indexOf('ab', n) + 2;
    count++;
}
console.log(count);
console.log(arr); */

// var x = 1; function fn(n){n = n+1}; y = fn(x);
// console.log(y);

// var n = "zhu feng pei xun".indexOf("feng",4)
// console.log(n);

// let ary = [12,14,13,35,16,28];
// ary.sort((a, b) => b - a);
// console.log(ary);

let time = '2017-10-20';
time = time.replace(/-/g, '/');
console.log(time);

// 获取 2~93 之间的随机整数(包含2也包含93)
// let num = Math.random() * 91 + 2;

// var arr = [1,2];
// var arr2 = arr.concat();	
// arr2.push( arr.splice(1,0) );
// console.log(arr);
// console.log(arr2);

// // 18、怎么获取一个数组中的最大值？
// var ary = [123,43,2425,345,234,464];
// let res = Math.max(...ary);
// console.log(res);


let arr = [1,2,3];
let arr2 = arr.slice();
let arr3 = [...arr];
console.log(arr2);
console.log(arr3);



// 2、补充代码实现最后的结果（常见面试题）
function queryURLParameter(url){
    //=>在这里实现你的代码
    let str = url.split('?')[1];
    return str.split('&').reduce((o, kv) => {
        const [key, value] = kv.split('=');
        if (!value) {
            return o;
        }
        o[key] = value;
        return o;
    }, {});
}
let str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
let result = queryURLParameter(str);
console.log(result);

/*
9
 {
10
   name:'zxt',
11
   age:28,
12
   sex:0,
13
   HASH:'teacher'
14
 }
15
*/
//  3、看需求文档，实现相关的JS代码

// 做一个抽奖程序，页面中有一个区域显示中奖人员的编号，在JS中写一段代码，
// 要求每隔1秒中随机创建一个四位的数字（每一位数字的取值范围0-9），
// 当10秒结束后，结束定时器，最后显示的四位数字即是中奖的号码
let timer = null;
let index = 1;
let res = '';

timer = setInterval(() => {
    
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(parseInt(Math.random() * 9));
    }
    res = arr.join('');
    console.log(res);
    index++;
    if (index === 10) {
        console.log('中奖号码是： ', res);
        clearInterval(timer);
        timer = null;
    }
}, 1000);

// 4、看需求实现相关的JS代码（常见面试题）

// 给#box下的li实现奇偶行变色
// 			鼠标滑过li背景高亮展示，鼠标离开回归原有颜色
// 			鼠标点击li弹出 ‘我是第N行’，例如：点击第一个li弹出 ‘我是第1行’...



1
{/* <ul id='box'>
2
    <li></li>   
3
    <li></li>   
4
    ...
5
</ul>
6
<script>
7
    //=>完成你的JS代码，实现相关需求
8
</script> */}


// 实现找到数组第n项到第m项(包括n和m)的内容，返回一个新的数组
let arr = [1, 3, 5, 7, 9, 11];
function find(arr, n, m) {
    return arr.slice(n, m+1);
}
let res = find(arr, 1, 1);
console.log(res);
