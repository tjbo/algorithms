// singly linked data structure
// useful when you need high-speed push, pop and rotate
// and don't mind O(n) indexing
// great for performance in unique situations

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

  insert(index, val) {
    if (index > this.length || index < 0) {
      return
    }

    if (index === this.length) {
      return !!this.push(val)
    } else if (index === 0) {
      return !!this.unshift(val)
    }

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    return true
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

  remove(index) {
    if (index > this.length || index < 0) {
      return false
    }

    if (index === 0) {
      return !!this.shift()
    }

    if (index === this.length) {
      return !!this.pop()
    }

    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next

    prevNode.next = removedNode.next

    this.length--

    return true
  }

  reverse() {
    let i = 0
    let current = this.head
    this.head = this.tail
    this.tail = current
    let prev = current
    current = current.next
    let next = current.next
    this.tail.next = null

    while (i < this.length - 1) {
      current.next = prev
      prev = current

      if (next) {
        current = next
        next = current.next
      }
      i++
    }
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
    } else {
      newNode.next = this.head
    }

    this.head = newNode
    this.length++
    return this
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return
    }

    let nextNode = this.head
    let currentIndex = 0

    while (currentIndex < index && nextNode.next) {
      nextNode = nextNode.next
      currentIndex++
    }
    return nextNode
  }

  set(val, index) {
    const currentNode = this.get(index)

    if (!currentNode) {
      return false
    }

    currentNode.val = val
    return true
  }
}

const list = new SinglyLinkedList()

list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
list.push('seven')
list.reverse()
