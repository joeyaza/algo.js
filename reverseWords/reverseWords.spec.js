const reverseWords = require('./reverseWords');
const chai = require('Chai');
const expect = chai.expect

describe("ReverseWords", () => {

	describe("when 'I love JavaScript!' is input", () => {

		it("should return 'I evol !tpircSavaJ'", () => {

			const test = reverseWords("I love JavaScript!");

			expect(test).to.equal("I evol !tpircSavaJ");

		});

	});

});