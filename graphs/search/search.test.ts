import { describe, expect, it } from "vitest";
import { GraphStr } from "../common/graph";
import { bfs, iDfs, rDfs } from "./search";

describe("DFS", function () {
  it("returns array of nodes using rDfs", function () {
    //    d -- b -- a -- c
    //     \------------/

    const graph = new GraphStr();
    const [a, b, c, d] = graph.addFromVals(["a", "b", "c", "d"]);
    graph.addEdges([[d, b], [b, a], [a, c], [c, d]]);
    const rez = rDfs(a).join("-");
    expect([ "a-c-b-d", "a-b-d-c", "a-c-d-b" ]).toContain(rez);
  });

  it("returns array of nodes using iDfs", function () {
    //    d -- b -- a -- c
    //     \------------/

    const graph = new GraphStr();
    const [a, b, c, d] = graph.addFromVals(["a", "b", "c", "d"]);
    graph.addEdges([[d, b], [b, a], [a, c], [c, d]]);
    const rez = iDfs(a).join("-");
    expect([ "a-c-b-d", "a-b-d-c", "a-c-d-b" ]).toContain(rez);
  });
});

describe("BFS", function () {
  it("returns array of nodes using bfs", function () {
    //    d -- b -- a -- c
    //     \------------/

    const graph = new GraphStr();
    const [a, b, c, d] = graph.addFromVals(["a", "b", "c", "d"]);
    graph.addEdges([[d, b], [b, a], [a, c], [c, d]]);
    const rez = bfs(a).join("-");
    expect([ "a-b-c-d", "a-c-b-d" ]).toContain(rez);
  });
});
