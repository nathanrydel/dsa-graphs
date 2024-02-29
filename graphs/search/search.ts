import { GNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: GNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {
  if (start === null) return [];

  result.push(start.value);

  for (const neighbor of start.adjacent) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      rDfs(neighbor, result, visited);
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  const stack = new Stack<GNodeStr>([start]);
  const visited = new Set<GNodeStr>([start]);
  const dfsStrs: string[] = [];

  while (!stack.isEmpty()) {
    const currNode = stack.pop();
    dfsStrs.push(currNode.value);
    for (const adj of currNode.adjacent) {
      if (!visited.has(adj)) {
        visited.add(adj);
        stack.push(adj);
      }
    }
  }

  return dfsStrs;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: GNodeStr): string[] {
  const toVisit = new Queue<GNodeStr>([start]);
  const seen = new Set<GNodeStr>([start]);
  const result: string[] = [];

  while (!toVisit.isEmpty()) {
    let currNode = toVisit.dequeue();
    result.push(currNode.value);
    for (let neighbor of currNode.adjacent) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        toVisit.enqueue(neighbor);
      }
    }
  }

  return result;
}


export { iDfs, rDfs, bfs };