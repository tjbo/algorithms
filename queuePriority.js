// implemented as min binary heap
// lower numbers mean higher priority
const swap = require('./swap')

class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  // bubble value up based on if is less than parent
  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)

    if (parentIndex < 0) {
      return
    }

    if (this.values[parentIndex].priority > this.values[index].priority) {
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
      leftVal = this.values[leftIndex].priority
    }

    if (rightIndex < length) {
      rightVal = this.values[rightIndex].priority
    }

    const childValues = [rightVal, leftVal].filter((val) => !!val)

    const childValue = Math.min(...childValues)

    if (!childValue) {
      return
    }

    let swapIndex = leftIndex

    if (
      this.values[rightIndex] &&
      childValue === this.values[rightIndex].priority
    ) {
      swapIndex = rightIndex
    }

    if (!this.values[swapIndex]) {
      return
    }

    if (this.values[index].priority > this.values[swapIndex].priority) {
      swap(this.values, swapIndex, index)
      return this.sinkDown(swapIndex)
    }
  }

  dequeue() {
    if (!this.values.length) {
      return false
    }

    const min = this.values.shift()

    if (this.values.length > 0) {
      const newMin = this.values.pop()
      this.values.unshift(newMin)
      this.sinkDown(0)
    }
    return min
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)

    this.values.push(newNode)

    return this.bubbleUp(this.values.length - 1)
  }
}

const queue = new PriorityQueue()

queue.enqueue('test1', 5)
queue.enqueue('test2', 3)
queue.enqueue('test3', 2)
queue.enqueue('test4', 4)
queue.enqueue('test5', 1)

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
