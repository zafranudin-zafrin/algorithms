import {UnionFindLazy} from './union-find-lazy';

describe('Lazy Union Spec', () => {
    let unionFind: UnionFindLazy = new UnionFindLazy(1e2);

    it('can union 1 and 5', () => {
        unionFind.union(1, 5);
        expect(unionFind.arr[1]).toStrictEqual(5);
    })

    it('can union 5 and 7', () => {
        unionFind.union(5, 7);
        expect(unionFind.arr[1]).toStrictEqual(5);
        expect(unionFind.arr[5]).toStrictEqual(7);
    })

    it('can union 7 and 90', () => {
        unionFind.union(7, 90);
        expect(unionFind.arr[1]).toStrictEqual(5);
        expect(unionFind.arr[5]).toStrictEqual(7);
        expect(unionFind.arr[7]).toStrictEqual(90);
    })

    it('can check 1 and 5 is connected', () => {
        expect(unionFind.connected(1, 5)).toBeTruthy();
    })

    it('can check 1 and 7 is connected', () => {
        expect(unionFind.connected(1, 7)).toBeTruthy();
    })

    it('can check 1 and 90 is connected', () => {
        expect(unionFind.connected(1, 90)).toBeTruthy();
    })

    it('can check 1 and 2 is not connected', () => {
        expect(unionFind.connected(1, 2)).toBeFalsy();
    })

})
