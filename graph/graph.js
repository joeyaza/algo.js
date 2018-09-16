class Graph {

	constructor () {

		this.adjList = {};

	}

	addVertex(vertex) {

		this.adjList[vertex] = [];

	}

	addEdge(vertexOne, vertexTwo) {

		this.adjList[vertexOne].push(vertexTwo);

	}

	depthFirstSearch() {

		const nodes = Object.keys(this.adjList),
			visited = {};

		for (let i = 0; i < nodes.length; i ++) {

			const node = nodes[i];
			this.depthFirstSearchUtil(node, visited)

		}	

		return visited;

	}

	depthFirstSearchUtil(vertex, visited) {

		if (!visited[vertex]) {

			visited[vertex] = true;

			const neighbours = this.adjList[vertex];

			for (let i = 0; i < neighbours.length; i ++) {

				const neighbour = neighbours[i];

				this.depthFirstSearchUtil(neighbour, visited)

			}

		}

	}

	detectCycle() {
  
		const graphNodes = Object.keys(this.adjList),
			visited = {},
			recStack = {};
  
  		for (let i = 0; i < graphNodes.length; i++) {

    		const node = graphNodes[i];

    		if (this.detectCycleUtil(node, visited , recStack)) return true;
  		}

  		return false;
	}

	detectCycleUtil(vertex, visited, recStack) {

  		if(!visited[vertex]) {
    		
    		visited[vertex] = true;
    		recStack[vertex] = true;
    		
    		const nodeNeighbors = this.adjList[vertex];
    		
    		for(let i = 0; i < nodeNeighbors.length; i++){
      		
	      		const currentNode = nodeNeighbors[i];

	     	    if(!visited[currentNode] && this.detectCycleUtil(currentNode,visited, recStack)){

	        		return true;
	        		
	      		} else if (recStack[currentNode]){
	        		
	        		return true;
	      		}
    		}

  		}

	    recStack[vertex] = false;

	    return false;

	}


	showGraph() {

		return this.adjList;

	}

}

module.exports = Graph;