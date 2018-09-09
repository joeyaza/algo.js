const reverseInt = require('./stringReversal');
const chai = require('Chai');
const expect = chai.expect

describe("StringReversal", () => {

	describe("when 'hello world' is input", () => {

		it("should return 'dlrow olleh'", () => {

			const test = reverseInt("hello world");

			expect(test).to.equal("dlrow olleh");

		});

	});

});