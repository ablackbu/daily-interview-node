class Graph {

  constructor(verts) {
      this.verts = verts
      this.edges = new Array(verts).fill([])
  }

  addEdge(u, v, time) {
      //This is bi directional
      this.edges[u].push({ node: v, time })
      this.edges[v].push({ node: u, time })
  }

  addEdges(edgeArr) {
      edgeArr.forEach((edge) => {
          const [u, v, time] = edge
          this.addEdge(u, v, time)
      })
  }

  getAllPaths(source, dest) {
      const visited = new Array(this.verts).fill(false)
      const paths = []
      this.check(source, dest, visited, paths)
      console.log(paths)     
  }


  check(source, dest, visited, paths) {
      if(source == dest) {
          return 
      }


      visited[source] = true

      this.edges[source].forEach((connection) => {
          const { node, time } = connection

          if(visited[node]) {
              return
          }

          //TODO handle weigths
          paths.push(connection)
          this.check(node, dest, visited, paths)
      })
  }
}


/**
* @param {number} n
* @param {number[][]} roads
* @return {number}
*/
var countPaths = function(n, roads) {
  const source = 0
  const dest = n-1
  const intGraph = new Graph(n)
  intGraph.addEdges(roads)
  intGraph.getAllPaths(source, dest)
  //Need to filter out the shorter ones
  
};