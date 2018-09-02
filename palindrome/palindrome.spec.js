const palindrome = require('./palindrome');
const chai = require('Chai');
const expect = chai.expect

describe("Palindrome", () => {

	describe("when 'aba' is input", () => {

		it("should return true", () => {

			const test = palindrome("aba");

			expect(test).to.equal(true);

		});

	});

	describe("when 'greetings' is input", () => {

		it("should return false", () => {

			const test = palindrome("greetings");

			expect(test).to.equal(false);

		});

	});

});