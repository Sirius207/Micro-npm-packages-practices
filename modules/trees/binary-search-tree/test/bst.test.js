/* global describe, it, beforeEach */

const BST = require('../bst');
const ans = require('assert');


function assertTreeValuesEqual(tree, values) {
  ans.deepStrictEqual(tree.getPreOrder(), values);
}

describe('Binary Search Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new BST();
  });

  describe('Orders', () => {
    it('should success return preOrder', () => {
      tree = new BST(1);
      const l = new BST(2);
      const ll = new BST(3);
      const lr = new BST(4);
      const r = new BST(5);
      const rl = new BST(6);
      const rr = new BST(7);
      tree.left = l;
      tree.right = r;
      l.left = ll;
      l.right = lr;
      r.left = rl;
      r.right = rr;
      assertTreeValuesEqual(tree, [1, 2, 3, 4, 5, 6, 7]);
    });
  });

  // TODO
  // describe('Insertion', () => {
  //   it('should insert success', () => {});
  // });

  // it('should remove success', () => {});

  // it('should find success', () => {});

  // it('should clear success', () => {});

});
