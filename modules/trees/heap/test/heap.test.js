/* global describe, it, beforeEach */

const Heap = require('../heap');
const ans = require('assert');


function assertHeapValuesEqual(heap, values) {
  ans.deepStrictEqual(heap.toArray(), values);
}

describe('Max Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  describe('Orders', () => {
    it('should success return preOrder', () => {
      heap = new Heap(7);
      const l = new Heap(6);
      const ll = new Heap(4);
      const lr = new Heap(3);
      const r = new Heap(5);
      const rl = new Heap(2);
      const rr = new Heap(1);
      heap.left = l;
      heap.right = r;
      l.left = ll;
      l.right = lr;
      r.left = rl;
      r.right = rr;
      assertHeapValuesEqual(heap, [7, 6, 5, 4, 3, 2, 1]);
    });
  });

  // describe('Insertion', () => {
  //   it('should insert one node', () => {
  //     heap.insert(1);
  //     assertHeapValuesEqual(heap, [1]);
  //   });
  // });
});