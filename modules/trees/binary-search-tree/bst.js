class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
    } else {
      const newNode = new Node(value);
      let current = this;
      while (current) {
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            break;
          }
        } else if (value >= current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  _removeOnlyOneLeaf(value) {
    if (!this.left && !this.right) {
      this.value = null;
    } else if (this.left && !this.right) {
      this.value = this.left.value;
      this.left = null;
    } else if (!this.left && this.right) {
      this.value = this.right.value;
      this.right = null;
    }
  }

  _removeTwoLeaf(value) {

  }

  // remove(value) {
  //   if (!this.value) {
  //     return this;
  //   }
  //   if (this.value < value) {
  //     this.right.remove(value);
  //   } else if (this.value > value) {
  //     this.left.remove(value);
  //   } else if (this.left && this.right) {
  //     this._removeTwoLeaf(value);
  //   } else {
  //     this._removeOnlyOneLeaf(value);
  //   }
  // }

  // returns null if given value does not exist in the tree
  find() {}

  // remove all nodes from the tree
  clear() {}

  /*
   * Orders
   */
  getPreOrder() {
    const elements = [];
    function traverse(node) {
      if (node) {
        elements.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
      return elements;
    }
    traverse(this);
    return elements;
  }

  getInOrder() {}
  getPostOrder() {}
  getLevelOrder() {}
  // prints the values in the tree, from min to max
  getSortValues() {}

  // get count of values stored
  size() {}
  // returns the height in nodes (single node's height is 1)
  height() {}
  // returns the minimum value stored in the tree
  getMinNode() {
    return (this.left) ? this.left.getMinNode() : this;
  }
  // returns the maximum value stored in the tree
  getMaxNode() {
    return (this.right) ? this.right.getMaxNode() : this;
  }

  isBinarySearchTree() {}
  // returns next-highest value in tree after given value, -1 if none
  getSuccessor() {}

  // calls function f on each node's data
  each() {}
}

module.exports = Node;
