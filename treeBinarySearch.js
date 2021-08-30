// binary search tree
// every node has only 2 nodes
// the node the left is less than the node value
// the node to the right is more than the node value
// works like 'divide and conquer' when searching
// insertion = O(log n)
// search = O(log n)
// as tree doubles in size we only need one additional step
// for a search or insert
// above big O is not guranteeed though, if you had
// a one sided tree you can have problems
const Queue = require('./queueSinglyLinkedList')

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  find(value) {
    function compare(value, next) {
      if (!next) {
        return false
      } else if (value === next.value) {
        return true
      } else if (value > next.value) {
        return compare(value, next.right)
      } else if (value < next.value) {
        return compare(value, next.left)
      }
    }
    return compare(value, this.root)
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      return (this.root = newNode)
    }

    function compare(value, next) {
      if (value > next.value) {
        if (!next.right) {
          return (next.right = newNode)
        }
        return compare(value, next.right)
      } else if (value < next.value) {
        if (!next.left) {
          return (next.left = newNode)
        }
        return compare(value, next.left)
      }
    }

    return compare(value, this.root)
  }

  searchBreadth() {
    const queue = new Queue()
    let values = []
    const root = this.root

    function search(node) {
      if (!node) {
        queue.enqueue(root)
      }

      if (node && node.left) {
        queue.enqueue(node.left)
      }

      if (node && node.right) {
        queue.enqueue(node.right)
      }

      while (queue.length) {
        const _node = queue.dequeue()
        values.push(_node.value.value)
        search(_node.value)
      }
    }

    search()
    return values
  }

  searchDepth(preOrder = true) {
    const values = []

    function traverse(node) {
      preOrder && values.push(node.value)

      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right)
      }
      !preOrder && values.push(node.value)
    }

    traverse(this.root)

    return values
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(14)
tree.insert(15)
tree.insert(16)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.insert(24)
tree.insert(11)
tree.insert(1)
tree.insert(2)

//                  10
//          6                   14
//   1          7           11      15
//      2           8                   16
//                                          24

const search1 = tree.searchBreadth()
console.log(search1)
// 10, 6, 14, 1, 7, 11, 15, 2, 8, 16, 24

const search2 = tree.searchDepth()
console.log(search2)
// 10, 6, 1, 2, 7, 8, 14, 11, 15, 16, 24

const search3 = tree.searchDepth(false)
console.log(search3)
// 2, 1, 8, 7, 6, 11, 24, 16, 15, 14, 10
