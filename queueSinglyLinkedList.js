// a queue is like a stack but is first in, first out
// FIFO = first in, first out
// insertion O(1)
// removal O(1)
// searching O(N)
// access O(N)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  dequeue() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
    this.length--
    return this.head
  }

  enqueue(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    } else {
      const prevTail = this.tail
      prevTail.next = newNode
    }

    this.tail = newNode
    return this.length++
  }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.dequeue()

debugger
