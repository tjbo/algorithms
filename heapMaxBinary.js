// heaps are just trees with special rules
// a max binary heap will have nodes that have larger
// numbers than the next branch of nodes
// for a min binary heap the children will be smaller
// no gurrantees about comparisons between sibling values
// a binary heap is always compact, as left children are
// always filled in first
// these types of heaps are often used for priority queue
// and graph traversal algorithims

const swap = require('./swap')

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  // add value to end of array
  // bubble vale up based on if is bigger than parent
  insert(val) {
    if (!val) {
      return null
    }

    this.values.push(val)

    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2)

      if (this.values[parentIndex] < val) {
        swap(this.values, parentIndex, index)
        return bubbleUp(parentIndex)
      }
    }

    return bubbleUp(this.values.length - 1)
  }
}

const heap = new MaxBinaryHeap()

heap.insert(55)
heap.insert(44)
heap.insert(108)
heap.insert(2)
