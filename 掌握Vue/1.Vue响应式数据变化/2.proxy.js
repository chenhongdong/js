// 使用proxy来实现数据的响应式变化
// 可以支持数组，而且也不用区分是对象还是数组

let obj = {
    name: 'js',
    list: [1,2,3],
    day: 1,
    pos: {x: 1, y: 2},
};

function render() {
    console.log('模拟视图更新');
}

let handler = {
    get(target, key) {
        // 如果取的值是 对象 就再对这个对象进行数据劫持
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handler);
        }
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        console.log('key', key);
        if (key === 'length') return true;
        render();
        return Reflect.set(target, key, value);
    },
};

let proxy = new Proxy(obj, handler);
// proxy.day = 3;
proxy.pos.x.loc = 110;

// proxy.list.push(5);
proxy.list[0] = 22;
console.log(proxy);
