const reverseString = require('./reverseString');
const chai = require('Chai');
const expect = chai.expect

describe("ReverseString", () => {

	describe("when 'abcd' is input", () => {

		it("should return 'dcba'", () => {

			const test = reverseString("abcd");

			expect(test).to.equal("dcba");

		});

	});

	describe("when 'abcd' is input", () => {

		it("should return 'dcba  '", () => {

			const test = reverseString("  abcd");

			expect(test).to.equal("dcba  ");

		});

	});

});