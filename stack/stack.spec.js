const Stack = require('./Stack');
const chai = require('Chai');
const expect = chai.expect

describe("Stack", () => {

	const stack = new Stack();

	describe("when asked to push a value onto the stack", () => {

		it("should push value and return size of stack", () => {

			stack.push(2);
			stack.push(10);

			expect(stack.size).to.equal(2);


		});

	});

	describe("when asked to pop a value from the stack", () => {

		it("should pop the last value and return it", () => {

			const pop = stack.pop();

			expect(pop).to.equal(10);

		});

	});

});