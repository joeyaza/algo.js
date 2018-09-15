const ransomNote = require('./ransomNote');
const chai = require('Chai');
const expect = chai.expect

describe("RansomNote", () => {

	const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

	describe("when 'sit ad est sint' is input", () => {

		it("should return true", () => {

			const test = ransomNote("sit ad est sint", magazine);

			expect(test).to.equal(true);

		});

	});

	describe("when 'sit ad est love' is input", () => {

		it("should return false", () => {

			const test = ransomNote("sit ad est love", magazine);

			expect(test).to.equal(false);

		});

	});

	describe("when 'sit ad est sint in in' is input", () => {

		it("should return true", () => {

			const test = ransomNote("sit ad est sint in in", magazine);

			expect(test).to.equal(true);

		});

	});

	describe("when 'sit ad est sint in in in in in' is input", () => {

		it("should return false", () => {

			const test = ransomNote("sit ad est sint in in in in in", magazine);

			expect(test).to.equal(false);

		});

	});

});