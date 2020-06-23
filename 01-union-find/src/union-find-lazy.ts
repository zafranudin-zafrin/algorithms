export class UnionFindLazy {
    private readonly _arr: number[];

    constructor(length: number) {
        this._arr = new Array(length);
        for (let i = 0; i < length; i++) {
            this.arr[i] = i;
        }
    }

    get arr() {
        return this._arr;
    }

    root(i: number): number {
        while (i !== this._arr[i]) i = this._arr[i];
        return i;
    }

    connected(p: number, q: number): boolean {
        return this.root(p) === this.root(q);
    }

    union(p: number, q: number): void {
        const i = this._arr[p];
        const j = this._arr[q];
        this._arr[i] = j;
    }
}
