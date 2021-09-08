const PriorityQueue = require('./queuePriority')

class WeightedGraph {
  constructor() {
    this.ajacencyList = {}
  }

  addVertex(vertex) {
    this.ajacencyList[vertex] = this.ajacencyList[vertex] || []
  }

  addEdge(vertex1, vertex2, distance) {
    this.ajacencyList[vertex1].push({ node: vertex2, distance })
    this.ajacencyList[vertex2].push({ node: vertex1, distance })
  }

  dijkstrasShortestDistance(startNode, endNode) {
    const shortestDistance = {}
    const previous = {}
    const visited = []
    const queue = new PriorityQueue()

    // initialize shortest distances
    for (let _node in this.ajacencyList) {
      shortestDistance[_node] = Infinity
      previous[_node] = null
    }

    shortestDistance[startNode] = 0

    queue.enqueue(startNode, 0)

    const calculateDistance = (child, distance, parent) => {
      let d = distance

      while (previous[parent]) {
        const next = this.ajacencyList[previous[parent]].find((item) => {
          return item.node === parent
        })

        d += next.distance
        parent = previous[parent]
      }

      if (!previous.length) {
        return d
      }
    }

    while (queue.values.length > 0) {
      const _node = queue.dequeue()
      if (_node.value !== endNode) {
        for (let n in this.ajacencyList[_node.value]) {
          if (!visited.includes(this.ajacencyList[_node.value][n].node)) {
            const _n = this.ajacencyList[_node.value][n]
            const d = calculateDistance(_n.node, _n.distance, _node.value)

            if (d < shortestDistance[_n.node]) {
              shortestDistance[_n.node] = d
              previous[_n.node] = _node.value
              queue.enqueue(_n.node, d)
            }
          }
        }
      }
      visited.push(_node.value)
    }
    return previous
  }
}

const graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

graph.dijkstrasShortestDistance('A', 'E')
