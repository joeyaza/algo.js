const reverseArray = require('./reverseArray');
const chai = require('Chai');
const expect = chai.expect

describe("ReverseArray", () => {

	describe("when [1, 2, 3, 4] is input", () => {

		it("should return [4, 3, 2, 1]", () => {

			const test = reverseArray([1, 2, 3, 4]);

			expect(test).to.deep.equal([4, 3, 2, 1]);

		});

	});

});