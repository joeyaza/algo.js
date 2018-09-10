const BinarySearchTree = require('./BinarySearchTree').BinarySearchTree;
const Node = require('./BinarySearchTree').Node;

const chai = require('Chai');
const expect = chai.expect

describe("BinarySearchTree", () => {

	let tree = new BinarySearchTree();

	describe("when asked if tree contains a number", () => {

		it("should return true if found", () => {

			tree.insert(2);

			const find = tree.contains(2);

			expect(find).to.equal(true);

		});

	});

	describe("when asked if tree can find a number", () => {

		it("should return the node of the number if found", () => {

			tree.insert(3);

			const find = tree.find(3);

			expect(find).to.be.instanceof(Node);
			expect(find.value).to.equal(3);

		});

	});

});


