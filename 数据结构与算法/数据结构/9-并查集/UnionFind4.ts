class UnionFind4 {
    private parent: number[];
    private rank: number[];     // rank[i]表示以i为根的集合高度

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.parent.push(i);
            this.rank.push(1);
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    find(p: number): number {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                p = this.parent[p];
            }
            return p;
        }
    }

    isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    unionElements(p: number, q: number) {
        let pRoot: number = this.find(p),
            qRoot: number = this.find(q);

        if (pRoot === qRoot) return;

        // 比较两个节点所在树的高度，低的合并到高的上去
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        } else {    // 如果合并时两个根节点的高度相同，就把合并后的根节点的高度提高一层
            this.parent[qRoot] = pRoot;
            this.rank[pRoot] += 1;
        }
    }
}