const twoSum = require('./twoSum');
const chai = require('Chai');
const expect = chai.expect

describe("TwoSum", () => {

	describe("when [1, 2, 2, 3, 4], 4 is input", () => {

		it("should return true", () => {

			const test = twoSum([1, 2, 2, 3, 4], 4);

			expect(test).to.deep.equal([[2, 2], [3, 1]]);

		});

	});


});