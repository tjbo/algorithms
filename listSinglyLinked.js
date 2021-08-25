class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  pop() {
    let currentNode = this.head

    if (!currentNode) {
      return
    }

    while (currentNode.next.next) {
      currentNode = currentNode.next
    }

    const removedNode = currentNode.next
    currentNode.next = null
    this.tail = currentNode
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    }

    if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode
    this.length++

    return this
  }

  shift() {
    const removedNode = this.head
    this.head = this.head.next
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
}

const list = new SinglyLinkedList()

list.push('one')
list.push('two')
list.push('three')
list.unshift('zero')
list.unshift('minus one')
list.unshift('minus two')

console.log(list)
