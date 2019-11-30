/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.root = new Nodes();
};

function Nodes(value = 0) {
    this.value = value;
    this.next = new Map();
}

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let cur = this.root;
    for (let i = 0; i < key.length; i++) {
        let c = key.charAt(i);
        if (!cur.next.has(c)) {
            cur.next.set(c, new Nodes());
        }
        cur = cur.next.get(c);
    }
    cur.value = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let c = prefix.charAt(i);
        if (!cur.next.has(c)) {
            return 0;
        }
        cur = cur.next.get(c);
    }
    return sumRec(cur);
};

function sumRec(node) {
    let sum = node.value;
    node.next.forEach((val) => {
        sum += sumRec(val);
    });
    return sum;
}


var obj = new MapSum();
obj.insert("apple", 3);
let num = obj.sum('ap');
obj.insert("app", 2);




// 方法2
var MapSum2 = function() {
    this.obj = {};
};


MapSum2.prototype.insert = function(key, val) {
    this.obj[key] = val;
};

MapSum2.prototype.sum = function(prefix) {
    const keys = Object.keys(this.obj);
    let sum = 0;
    keys.forEach(key => {
        if (key.indexOf(prefix) === 0) {
            sum += this.obj[key];
        }
    });
    return sum;
};


let obj2 = new MapSum2();
obj2.insert("apple", 3);
let num2 = obj2.sum('ap');
obj2.insert("app", 2);
console.log(obj2.sum('ap'));