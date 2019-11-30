// vue2.0 实现数据响应式变化 通过Object.defineProperty  缺点这个方法不支持 数组
// vue3.0 用proxy来实现

// vue的特点  如果是 对象 会使用Object.defineProperty
// 如果是数组的话，会把 数组 的方法重写

function render() {
    console.log('模拟视图渲染');
}

// let obj = {
//     name: 'js',
//     location: { x: 1, y: 10 }
// };

let obj = [1,2,3,4];

let methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
// 先获取到原来的原型上的方法
let arrayProto = Array.prototype;
// 创建一个自己的原型并且重写methods这些方法
let proto = Object.create(arrayProto);

methods.forEach(method => {
    // 重写拷贝出来的7个方法
    proto[method] = function() {
        // 重写这7个方法都会导致数据更新
        render();
        // 再调用原生的那7个方法
        arrayProto[method].call(this, ...arguments);
    };
});


function observer(obj) {    // 把所有的属性定义成set/get的方式
    if (Array.isArray(obj)) {
        // 重写原有的数组方法
        obj.__proto__ = proto;
        return;
    }
    if (typeof obj === 'object') {
        for (let key in obj) {
            defineReactive(obj, key, obj[key]);
        }
    }
}

function defineReactive(data, key, value) {
    // 如果value还是一个 对象 的话就需要再递归遍历一次
    observer(value);
    Object.defineProperty(data, key, {
        get() {
            return value;
        },
        set(newVal) {
            observer(newVal);   // 如果新改的值也是个 对象 就需要再次递归遍历
            if (newVal !== value) {
                render();
                value = newVal;
            }
        }
    })
}

observer(obj);
// obj.location = {
//     x: 100,
//     y: 1000
// };
// vue    如过给对象新增属性 是不会被监控的 可以通过$set
//        如果想给对象增加一个不存在的属性  还可以覆盖来写  obj.location = {...obj.location, a: 1}
function $set(data, key, value) {
    if (Array.isArray(data)) {
        return data.splice(key, 1, value);  // 当前用户调用了splice方法替换一条数据
    }
    defineReactive(data, key, value);
}

// $set(obj, 'a', 1);
// obj.a = 2;
// console.log(obj.a);

// 不支持数组的长度变化，也不支持数组的内容发生变化
// 必须通过上面的方法触发更新或者替换成一个新的数组
$set(obj, 0, 10);   
console.log('obj', obj);