const factorial = require('./factorial');
const chai = require('Chai');
const expect = chai.expect

describe("Factorial", () => {

	describe("when 1 is input", () => {

		it("should return 1", () => {

			const test = factorial(1);

			expect(test).to.equal(1);

		});

	});

	describe("when 4 is input", () => {

		it("should return 26", () => {

			const test = factorial(4);

			expect(test).to.equal(24);

		});

	});

});