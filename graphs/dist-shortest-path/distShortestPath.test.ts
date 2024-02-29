import { describe, expect, it } from "vitest";
import { GraphStr } from "../common/graph";
import { distShortestPath } from "./distShortestPath";

describe("distanceOfShortestPath", function () {
  it("should return distance of shortest path from start to end nodes", function () {
    //            R
    //         /  |  \
    //        I - T - H
    //                |
    //                M   X

    const graph = new GraphStr();
    const [r, i, t, h, m, x] = graph.addFromVals(
        ["r", "i", "t", "h", "m", "x"]);
    graph.addEdges([[r, i], [i, t], [t, h], [r, t], [r, h], [h, m]]);
    expect(distShortestPath(r, r)).toBe(0);
    expect(distShortestPath(r, i)).toBe(1);
    expect(distShortestPath(r, t)).toBe(1);
    expect(distShortestPath(r, h)).toBe(1);
    expect(distShortestPath(r, m)).toBe(2);
    expect(distShortestPath(i, m)).toBe(3);
    expect(distShortestPath(r, x)).toBe(Infinity);
  });
});