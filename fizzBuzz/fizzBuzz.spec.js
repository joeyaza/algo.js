const fizzBuzz = require('./fizzBuzz');
const chai = require('Chai');
const expect = chai.expect

describe("FizzBuzz", () => {

	describe("when 15 is input", () => {

		it("should return fizz for second character", () => {

			const test = fizzBuzz(15);

			expect(test[1]).to.equal("fizz");

		});

		it("should return buzz for third character", () => {

			const test = fizzBuzz(15);

			expect(test[2]).to.equal("buzz");

		});

		it("should return fizzbuzz for third character", () => {

			const test = fizzBuzz(15);

			expect(test[4]).to.equal("fizzbuzz");

		});

	});

});