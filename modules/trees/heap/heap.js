class Heap {
  constructor(value, heapType = 'max') {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // needed for insert
  siftUp() {}

  insert(value) {}

  // returns the max item, without removing it
  getMax() {}
  // return number of elements stored
  getSize() {}
  // returns true if heap contains no elements
  isEmpty() {}

  // needed for extract_max
  siftDown() {}
  // returns the max item, removing it
  extractMax() {}

  // removes item at index x
  remove(i) {}

  // create a heap from an array of elements, needed for heap_sort
  heapify() {

  }

  // take an unsorted array and turn it into a sorted array in-place using a max heap
  heapSort() {}

  toArray() {
    const elements = [];
    const queue = [];
    queue.push(this);
    while (queue.length !== 0) {
      const current = queue.shift();
      elements.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return elements;
  }
}

module.exports = Heap;
