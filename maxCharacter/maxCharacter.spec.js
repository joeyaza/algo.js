const maxCharacter = require('./maxCharacter');
const chai = require('Chai');
const expect = chai.expect

describe("MaxCharacter", () => {

	describe("when 'hello world' is input", () => {

		it("should return 'l'", () => {

			const test = maxCharacter("hello world");

			expect(test).to.equal("l");

		});

	});

	describe("when 'aaabbbcccdddeeeeeeee' is input", () => {

		it("should return 'e'", () => {

			const test = maxCharacter("aaabbbcccdddeeeeeeee");

			expect(test).to.equal("e");

		});

	});

});