const Graph = require('./Graph');
const chai = require('Chai');
const expect = chai.expect;
let graph;

describe("Graph", () => {

    beforeEach(() => {

        graph = new Graph();

        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");

        graph.addEdge("A", "B");
        graph.addEdge("D", "E");
        graph.addEdge("C", "E");
        graph.addEdge("A", "D");
        graph.addEdge("A", "C");
        graph.addEdge("E", "B");
        graph.addEdge("D", "B");

    });


    describe("when asked to add vertices and edges", () => {

        it("should return add vertices and edges", () => {

            const test = graph.showGraph();

            expect(test).to.deep.equal({ A: [ 'B', 'D', 'C' ],
                                         B: [],
                                         C: [ 'E' ],
                                         D: [ 'E', 'B' ],
                                         E: [ 'B' ] });

        });

    });

    describe("when asked perform a depth first search", () => {

        it("should return the traversal", () => {

            test = graph.depthFirstSearch();

            expect(test).to.deep.equal({ A: true, B: true, D: true, E: true, C: true });


        });

    });

    describe("when asked if the graph is cyclical", () => {

        it("should return false if not", () => {

            test = graph.detectCycle();

            expect(test).to.equal(false);

        });

        it("should return true if so", () => {

            graph = new Graph();

            graph.addVertex("A");
            graph.addVertex("B");
            graph.addVertex("C");
            graph.addVertex("D");

            graph.addEdge("A", "B");
            graph.addEdge("B", "C");
            graph.addEdge("C", "D");
            graph.addEdge("D", "A");

            test = graph.detectCycle();

            expect(test).to.equal(true);

        });

    });

});
