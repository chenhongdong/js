class Arr {
    // #data;   #表示私有属性，新语法，不支持，要转义
    // #size;
    constructor(capacity = 0) {
        this.data = new Array(capacity);
        this.size = 0;
    }
    // 获取数组中的元素个数
    getSize() {
        return this.size;
    }
    // 获取数组的容量
    getCapacity() {
        return this.data.length;
    }
    // 返回数组是否为空
    isEmpty() {
        return this.size === 0;
    }
    // 向数组的最后添加元素
    addLast(e) {
        // this.data[this.size] = e;
        // this.size++;
        
        // 复用add方法
        this.add(this.size, e);
    }
    // 
    addFirst(e) {
        this.add(0, e);
    }
    // 向指定位置添加元素
    add(index, e) {
        if (index < 0 && index > this.size) {
            throw new Error('添加失败，index >= 0 && index < size');
        }

        // if (this.size === this.data.length)
        //     this._resize(2 * this.data.length);

        for (let i = this.size - 1; i >= index; i--) {
            // 每一个元素都向后挪了一个位置，直到挪到了index的位置
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    }
    // 获取index索引位置的元素
    get(index) {
        if (index > 0 && index <= this.size) {
            return this.data[index];
        }
    }
    // 修改index索引位置的元素
    set(index, e) {
        if (index > 0 && index <= this.size) {
            this.data[index] = e;
        }
    }
    // 查找数组中是否有元素e
    contains(e) {
        for (let i =0; i < this.size; i++) {
            if (this.data[i] === e)
                return true;
        }
        return false;
    }
    // 查找数组中e在数组中对应的索引位置，没有就是-1
    find(e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e)
                return i;
        }
        return -1;
    }
    // 从数组中删除index位置的元素，返回删除的元素
    remove(index) {
        if (index < 0 && index >= this.size) {
            throw new Error('删除失败，index >= 0 && index < size');
        }
        
        let res = this.data[index];

        for (let i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.size--;
        this.data.length--;     // js数组需要让length--

        this.data[this.size] = null;    // 写上是为了防止内存泄漏，不写也没什么问题
        return res;
    }
    // 删除数组中的最后一位
    removeLast() {
        this.remove(this.data.length - 1);
    }
    // 删除数组中的第一位
    removeFirst() {
        this.remove(0);
    }
    // 删除数组中存在的元素
    removeEle(e) {
        let index = this.find(e);
        if (index !== -1)
            this.remove(index);
    }
    _resize(newCapacity) {
        let newData = [];
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
}

// const a = new Arr();
// for (let i = 0; i < 5; i++) {
//     a.addLast(i);
// }

// a.add(1, 100);

// a.addFirst(-1);
// console.log(a);

// console.log('查找位置',a.find(3));

// a.remove(2);
// console.log(a);

// a.removeFirst();
// console.log(a);

// a.removeLast();
// console.log(a);

// a.removeEle(2);
// console.log(a);