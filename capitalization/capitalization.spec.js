const capitalization = require('./capitalization');
const chai = require('Chai');
const expect = chai.expect

describe("Capitalization", () => {

	describe("when 'hello world' is input", () => {

		it("should return 'Hello World'", () => {

			const test = capitalization("hello world");

			expect(test).to.equal("Hello World");

		});

	});

});