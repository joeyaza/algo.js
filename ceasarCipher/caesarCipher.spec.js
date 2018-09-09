const caesarCipher = require('./caesarCipher');
const chai = require('Chai');
const expect = chai.expect

describe("caesarCipher", () => {

	describe("when 'abc', 1 is input", () => {

		it("should return 'bcd'", () => {

			const test = caesarCipher("abc", 1);

			expect(test).to.equal("bcd");

		});

	});

	describe("when 'I love JavaScript!', 100 is input", () => {

		it("should return 'E hkra FwrwOynelp!'", () => {

			const test = caesarCipher("I love JavaScript!", 100);

			expect(test).to.equal("E hkra FwrwOynelp!");

		});

	});

	// describe("when 'I love JavaScript!', -100 is input", () => {

	// 	it("should return 'M pszi NezeWgvmtx!'", () => {

	// 		const test = caesarCipher("I love JavaScript!", -100);

	// 		expect(test).to.equal("M pszi NezeWgvmtx!");

	// 	});

	// });

});