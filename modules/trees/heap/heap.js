class Heap {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // needed for insert
  siftUp() {}

  insert(value, heapType = 'max') {}

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

  toArray() {}
}

module.exports = Heap;
