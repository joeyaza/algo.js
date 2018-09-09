const arrayChunking = require('./arrayChunking');
const chai = require('Chai');
const expect = chai.expect

describe("ArrayChunking", () => {

	describe("when '[1, 2, 3, 4], 2' is input", () => {

		it("should return [[1, 2], [3, 4]]", () => {

			const test = arrayChunking([1, 2, 3, 4], 2);

			expect(test).to.deep.equal([[1, 2], [3, 4]]);

		});

	});

});