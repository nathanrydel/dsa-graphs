/** Graph Node class. */

class GNode<T> {
  value: T;
  adjacent: Set<GNode<T>>;

  constructor(val: T, adjacent = new Set<GNode<T>>()) {
    this.value = val;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class Graph<T> {
  nodes: Set<GNode<T>>;

  constructor() {
    this.nodes = new Set();
  }

  addFromVals(vals: T[]): GNode<T>[] {
    const newNodes = vals.map(val => new GNode<T>(val));
    for (const n of newNodes) {
      this.nodes.add(n);
    }
    return newNodes;
  }

  /** Add node to graph. */
  addNode(node: GNode<T>): void {
    this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: GNode<T>[]): void {
    // Add an array of nodes to our graph

    for (const node of nodeArray) {
      this.addNode(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: GNode<T>, v2: GNode<T>): void {
    // Connect two nodes
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** Add edges. */
  addEdges(edges: [GNode<T>, GNode<T>][]): void {
    for (const [v1, v2] of edges) this.addEdge(v1, v2);
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: GNode<T>, v2: GNode<T>): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** Remove node from graph. */
  removeNode(node: GNode<T>): void {
    for (const adj of this.nodes) {
      if (adj.adjacent.has(node)) adj.adjacent.delete(node);
    }
    node.adjacent.clear();
    this.nodes.delete(node);
  }
}

class GNodeStr extends GNode<string> {}

class GraphStr extends Graph<string> {}

class GNodeNum extends GNode<string> {}

class GraphNum extends Graph<string> {}

export { GNode, Graph, GNodeStr, GraphStr, GNodeNum, GraphNum };