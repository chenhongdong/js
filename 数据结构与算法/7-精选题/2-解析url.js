function parse(str) {
    return str.split('&').reduce((o, kv) => {
        const [key, value] = kv.split('=');
        if (!value) {
            return o;
        }
        o[key] = value;
        // deepSet(o, key.split(/[\[\]]/g).filter(x => x), value);
        return o;
    }, {});
}

function deepSet(o, path, value) {
    let i = 0;
    // console.log('path', path);
    for (; i < path.length - 1; i++) {
        if (o[path[i]] === undefined) {
            if (path[i + 1].match(/^\d+$/)) {
                o[path[i]] = []
            } else {
                o[path[i]] = {};
            }
        }
        o = o[path[i]];

    }
    o[path[i]] = decodeURIComponent(value);
}


console.log(parse('a=1&b=2&c=3'));
console.log(parse('a&b&c'));
console.log(parse('a[name]=fox&a[company]=tencent&a[job]=fe'));
console.log(parse('color=Deep%20Blue'));
console.log(parse('a[0]=name&a[1]=age'));
