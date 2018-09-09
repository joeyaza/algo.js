const maxProfit = require('./maxProfit');
const chai = require('Chai');
const expect = chai.expect

describe("MaxProfit", () => {

	describe("when [1, 2, 3, 4, 5] is input", () => {

		it("should return [1, 5]", () => {

			const test = maxProfit([1, 2, 3, 4, 5]);

			expect(test).to.deep.equal([1, 5]);

		});

	});

	describe("when [1, 3, 2, 5, 4] is input", () => {

		it("should return [1, 5]", () => {

			const test = maxProfit([1, 3, 2, 5, 4]);

			expect(test).to.deep.equal([1, 5]);

		});

	});

});