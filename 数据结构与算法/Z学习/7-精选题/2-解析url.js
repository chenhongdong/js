// function parse(str) {
//     return str.split('&').reduce((o, kv) => {
//         const [key, value] = kv.split('=');
//         if (!value) {
//             return o;
//         }
//         o[key] = value;
//         // deepSet(o, key.split(/[\[\]]/g).filter(x => x), value);
//         return o;
//     }, {});
// }

// function deepSet(o, path, value) {
//     let i = 0;
//     // console.log('path', path);
//     for (; i < path.length - 1; i++) {
//         if (o[path[i]] === undefined) {
//             if (path[i + 1].match(/^\d+$/)) {
//                 o[path[i]] = []
//             } else {
//                 o[path[i]] = {};
//             }
//         }
//         o = o[path[i]];

//     }
//     o[path[i]] = decodeURIComponent(value);
// }


// console.log(parse('a=1&b=2&c=3'));
// console.log(parse('a&b&c'));
// console.log(parse('a[name]=fox&a[company]=tencent&a[job]=fe'));
// console.log(parse('color=Deep%20Blue'));
// console.log(parse('a[0]=name&a[1]=age'));


// 处理1和2
function parse(str) {
    return str.split('&').reduce((obj, pair) => {
        const [key, value] = pair.split('=');
        if (!value) {
            return obj;
        }
        // obj[key] = value;
        deepObj(obj, key.split(/[\[\]]/g).filter(v => v), value);
        return obj;
    }, {});
}

function deepObj(obj, keys, value) {
    let i = 0;
    for (; i < keys.length - 1; i++) {
        let key = keys[i];
        if (!obj[key]) {
            if (keys[i + 1].match(/^\d+$/)) {
                obj[key] = [];
            } else {
                obj[key] = {}
            }
        }
        obj = obj[key];
    }
    obj[keys[i]] = decodeURIComponent(value);
}
console.log(parse(''))
// 1.最普通的解析
// console.log(parse('q=nba&src=home&fr=so'));
// 2.没有value的时候
// console.log(parse('q=nba&src=home&fr=so&fe'));
// 3.有对象的写法
console.log(parse('q=nba&fe[pro]=news&fe[pid]=result'))
// 4.有数组
// console.log(parse('q=nba&box[0]=one&box[1]=two'));
// 5.解码百分比编码
// console.log(parse('q=you%2Bme&name=jay%20chou'))






// function parse(str) {
//     return str.split('&').reduce((obj, pair) => {
//         const [key, value] = pair.split('=');
//         if (!value) {
//             return obj;
//         }
//         deepSet(obj, key.split(/[\[\]]/g).filter(v => v), value);
//         return obj;
//     }, {});
// }
// function deepSet(obj, keys, value) {
//     let i = 0;
//     for (i; i < keys.length - 1; i++) {
//         let key = keys[i];
//         if (!obj[key]) {
//             if (keys[i + 1].match(/^\d+$/)) {
//                 obj[key] = [];
//             } else {
//                 obj[key] = {};
//             }
//         }
//         obj = obj[key];
//     }
//     obj[keys[i]] = decodeURIComponent(value);
// }

// // 3.key包含对象嵌套
// console.log(parse('a[name]=king&a[age]=100&b=happy'))

// // 4.数组格式
// console.log(parse('a[0]=haha&a[1]=wow'))

// // 5.被encode转义的字符
// console.log(parse('a=you%2Bme&name=jay%20chou'));