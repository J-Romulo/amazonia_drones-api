interface Point {
    [key: string]: number | undefined;
}
  
export interface Graph {
    [key: string]: Point;
}
  
export class Dijkstra {
    private graph: Graph;
  
    constructor(graph: Graph) {
      this.graph = graph;
    }
  
    public findShortestPath(start: string, end: string): { path: string[]; distance: number } {
      const distances: { [key: string]: number } = {};
      const previous: { [key: string]: string | null } = {};
      const priorityQueue = new Set<string>();
  
      // Set initial distances to Infinity and previous nodes to null
      for (const vertex in this.graph) {
        if (vertex === start) {
          distances[vertex] = 0;
        } else {
          distances[vertex] = Infinity;
        }
        previous[vertex] = null;
        priorityQueue.add(vertex);
      }
  
      while (priorityQueue.size > 0) {
        let closestVertex: string | null = null;
  
        // Find the closest vertex (with the smallest distance)
        for (const vertex of priorityQueue) {
          if (closestVertex === null || distances[vertex] < distances[closestVertex]) {
            closestVertex = vertex;
          }
        }
  
        if (closestVertex === end) {
          break; // Reached the destination, exit the loop
        }
  
        priorityQueue.delete(closestVertex!);
  
        const neighbors = this.graph[closestVertex!];
  
        // Update distances to the neighboring vertices
        for (const neighbor in neighbors) {
          const distance = distances[closestVertex!] + (neighbors[neighbor] as number);
  
          if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            previous[neighbor] = closestVertex;
          }
        }
      }
  
      // Build the shortest path from start to end
      const path: string[] = [];
      let current = end;
  
      while (current !== null) {
        path.unshift(current);
        current = previous[current]!;
      }
 
      const distance = distances[end];

      return { path, distance };
    }
}