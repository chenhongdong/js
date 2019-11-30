class UnionFind3 {
    private parent: number[];
    private sz: number[];       // sz[i]表示以i为根的元素的集合

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.parent.push(i);
            this.sz.push(1);
        }
    }
    getSize():number {
        return this.parent.length;
    }
    find(p: number):number {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
        }
        return p;
    }
    isConnected(p:number, q: number): boolean {
        return this.find(p) === this.find(q);
    }
    unionElements(p: number, q: number) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);

        if (pRoot === qRoot) return;

        // 将元素少的集合，合并到元素多的集合，维持树的高度不会太深
        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        } else {
            this.parent[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
}