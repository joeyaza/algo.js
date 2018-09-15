const binarySearch = require('./binarySearch');
const chai = require('Chai');
const expect = chai.expect

describe("BinarySearch", () => {

	describe("when [37, 29, 45, 8], 8 is input", () => {

		it("should return true", () => {

			const test = binarySearch([37, 29, 45, 8], 8);

			expect(test).to.equal(true);

		});

	});

	describe("when [37, 29, 45, 8], 10 is input", () => {

		it("should return false", () => {

			const test = binarySearch([37, 29, 45, 8], 10);

			expect(test).to.equal(false);

		});

	});

});