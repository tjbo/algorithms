// a stact as a singly linked list is more performant than an array implementation
// insertion O(1)
// removal O(1)
// searching O(N)
// access O(N)
// likely not using search or access in a stack, use a different data structure

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.length = 0
  }

  // add is like unshift as we want to add items to start of stack
  add(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }

    this.head = newNode
    this.length++
    return this.length
  }

  remove() {
    const removedNode = this.head
    this.head = this.head.next
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return removedNode
  }
}

const stack = new Stack()

stack.add(1)
stack.add(2)
stack.add(3)

stack.remove()
