// 1. a graph is a data structure that consists of nodes and connections between
// those nodes
// 2. graphs are used alot in maps (way finding), reccomendation engines and
// social networks (people you might know)
// 3. vertex is a fancy name for a node, edge is the connection between nodes
// 4. undirected graphs have 2-way connections and no direction or polarity to
// the edges, directed graphs have polarity on the edges, there is a direction
// to the edge
// 6. weighted graphs have edges that have values, unweighted have no values to
// the edges
// 7. can store information about edges in an adjacency matrix or adjacency list
// 8. Big O, ajacency matrix vs list
// -------------------------------------------------------
// operation        |   list                matrix
// -------------------------------------------------------
// add vertex       |   O(1)            |   O(|V^2|)    |
// add edge         |   O(1)            |   O(1)        |
// remove vertex    |   O(|V| + |E|)    |   O(|V^2|)    |
// remove edge      |   O(|E|)          |   O(1)        |
// query            |   O(|V| + |E|)    |   O(1)        |
// storage          |   O(|V| + |E|)    |   O(|V^2|)    |
// -------------------------------------------------------
// |E| = number of edges, |V| = number of vertices
// -------------------------------------------------------
// 9. adjacency list can take up less space (in sparse graphs)
// 10. adjacency list is faster to iterate over all edges
// 11. adjacency list is slower to look up specific edge

class Graph {
  constructor() {
    this.ajacencyList = {}
  }

  addVertex(vertex) {
    this.ajacencyList[vertex] = this.ajacencyList[vertex] || []
  }

  addEdge(vertex1, vertex2) {
    this.ajacencyList[vertex1].push(vertex2)
    this.ajacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    const remove = (v1, v2) => {
      this.ajacencyList[v1] = this.ajacencyList[v2].filter((value) => {
        return value !== v2
      })
    }
    remove(vertex1, vertex2)
    remove(vertex2, vertex1)
  }

  removeVertex(vertex) {
    for (let node in this.ajacencyList) {
      this.removeEdge(vertex, node)
    }

    delete this.ajacencyList[vertex]
  }
}

const graph = new Graph()

graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Montreal')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Montreal', 'Dallas')

graph.removeVertex('Tokyo')

debugger
