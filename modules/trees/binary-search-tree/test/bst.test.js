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

  describe('Insertion', () => {
    it('should insert one node', () => {
      tree.insert(1);
      assertTreeValuesEqual(tree, [1]);
    });
    it('should insert two nodes', () => {
      tree.insert(2);
      tree.insert(1);
      assertTreeValuesEqual(tree, [2, 1]);
    });
    it('should insert multiple nodes', () => {
      tree.insert(2);
      tree.insert(1);
      tree.insert(5);
      tree.insert(4);
      tree.insert(3);
      assertTreeValuesEqual(tree, [2, 1, 5, 4, 3]);
    });
  });
  // TODO
  // it('should remove success', () => {});

  // it('should find success', () => {});

  // it('should clear success', () => {});
});
