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
    this.values = [888, 56, 39, 33, 18, 27, 12]
  }

  // bubble value up based on if is bigger than parent
  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)

    if (parentIndex < 0) {
      return
    }

    if (this.values[parentIndex] < this.values[index]) {
      swap(this.values, parentIndex, index)
      return this.bubbleUp(parentIndex)
    }
  }

  // sink value down if smaller than either of it's children
  sinkDown(index) {
    const length = this.values.length

    const leftIndex = Math.floor(2 * index + 1)
    const rightIndex = Math.floor(2 * index + 2)

    let leftVal = null
    let rightVal = null

    if (leftIndex < length) {
      leftVal = this.values[leftIndex]
    }

    if (rightIndex < length) {
      rightVal = this.values[rightIndex]
    }

    const childValue = Math.max(rightVal, leftVal)

    if (!childValue) {
      return
    }

    let swapIndex = leftIndex

    if (childValue === this.values[rightIndex]) {
      swapIndex = rightIndex
    }

    if (this.values[index] < this.values[swapIndex]) {
      swap(this.values, swapIndex, index)
      return this.sinkDown(swapIndex)
    }

    return index
  }

  insert(val) {
    console.log(val)
    if (!val) {
      return null
    }
    this.values.push(val)

    return this.bubbleUp(this.values.length - 1)
  }

  extractMax() {
    const max = this.values.shift()
    const newMax = this.values.pop()
    this.values.unshift(newMax)

    this.sinkDown(0)

    return max
  }
}

const heap = new MaxBinaryHeap()

heap.insert(55)
heap.insert(45)
heap.insert(108)
heap.insert(43)
heap.insert(2)
heap.insert(1777)

heap.extractMax()
heap.insert(999)

debugger
