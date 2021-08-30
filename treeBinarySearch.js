// binary search tree
// every node has only 2 nodes
// the node the left is less than the node value
// the node to the right is more than the node value
// works like 'divide and conquer' when searching
// insertion = O(log n)
// search = O(log n)
// as tree doubles in size we only need one additional step for a search or insert

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
