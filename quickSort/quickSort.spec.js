const quickSort = require('./quickSort');
const chai = require('Chai');
const expect = chai.expect

describe("quickSort", () => {

	describe("when [37, 29, 45, 8] is input", () => {

		it("should return [8, 29, 37, 45]", () => {

			const test = quickSort([37, 29, 45, 8]);

			expect(test).to.deep.equal([8, 29, 37, 45]);

		});

	});

});