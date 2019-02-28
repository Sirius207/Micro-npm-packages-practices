class Heap {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {}
  // needed for insert
  sift_up() {}
  // returns the max item, without removing it
  get_max() {}
  // return number of elements stored
  get_size() {}
  // returns true if heap contains no elements
  is_empty() {}
  // returns the max item, removing it
  extract_max() {}
  // needed for extract_max
  sift_down() {}
  // removes item at index x
  remove(i) {}
  // create a heap from an array of elements, needed for heap_sort
  heapify() {}
  // take an unsorted array and turn it into a sorted array in-place using a max heap
  heap_sort() {}
}