class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert() {}
  remove() {}

  // prints the values in the tree, from min to max
  printValues() {}
  printPreOrder() {}
  printPostOrder() {}
  delete_tree() {}
  // returns true if given value exists in the tree
  isInTree() {}

  // get count of values stored
  getNodeCount() {}

  // returns the height in nodes (single node's height is 1)
  getHeight() {}
  // returns the minimum value stored in the tree
  getMinNode() {}
  // returns the maximum value stored in the tree
  getMaxNode() {}
  isBinarySearchTree() {}
  // returns next-highest value in tree after given value, -1 if none
  getSuccessor() {}
}

module.exports = Node;
