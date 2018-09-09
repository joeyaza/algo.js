const reverseInt = require('./vowels');
const chai = require('Chai');
const expect = chai.expect

describe("Vowels", () => {

	describe("when 'Hello World' is input", () => {

		it("should return 3", () => {

			const test = reverseInt("Hello World");

			expect(test).to.equal(3);

		});

	});

});