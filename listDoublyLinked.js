// doubly linked list
// insertion O(1)
// removal O(1)
// searching O(N) *technically O(N/2)
// access O(N)

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return
    }
    let midPoint = Math.floor(this.length / 2)
    let isSearchFromStart = !!(index <= midPoint)
    let nextNode = isSearchFromStart ? this.head : this.tail
    let currentIndex = isSearchFromStart ? 0 : this.length - 1

    if (isSearchFromStart) {
      while (currentIndex <= index) {
        nextNode = nextNode.next
        currentIndex++

        if (index === currentIndex) {
          return nextNode
        }
      }
    } else {
      while (currentIndex >= index) {
        nextNode = nextNode.prev
        currentIndex--
        if (index === currentIndex) {
          return nextNode
        }
      }
      return nextNode
    }
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
    const nextNode = prevNode.next

    newNode.next = nextNode
    newNode.prev = prevNode

    prevNode.next = newNode
    nextNode.prev = newNode

    return true
  }

  pop() {
    let removeNode = this.tail

    if (!removeNode) {
      return
    }

    this.tail = removeNode.prev
    this.tail.next = null

    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return removeNode
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
    }

    if (this.tail) {
      newNode.prev = this.tail
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
    const nextNode = prevNode.next.next
    prevNode.next = nextNode
    nextNode.prev = prevNode

    this.length--

    return true
  }

  set(val, index) {
    const currentNode = this.get(index)

    if (!currentNode) {
      return false
    }

    currentNode.val = val
    return true
  }

  shift() {
    const removedNode = this.head
    this.head = this.head.next
    this.head.prev = null
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
      newNode.next.prev = newNode
    }

    this.head = newNode
    this.length++
    return this
  }
}

const list = new DoublyLinkedList()

list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
list.push('seven')
list.push('eight')
list.push('nine')
list.push('ten')
list.push('eleven')
list.push('twelve')

const item = list.remove(3)

debugger
