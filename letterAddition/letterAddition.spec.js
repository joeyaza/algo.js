const letterAddition = require('./letterAddition');
const chai = require('Chai');
const expect = chai.expect

describe("LetterAddition", () => {

	describe("when 'aabbbccdddd' is input", () => {

		it("should return 'a2b3c2d4'", () => {

			const test = letterAddition("aabbbccdddd");

			expect(test).to.equal("a2b3c2d4");

		});

	});

	describe("when 'aaabbbcccdddeeeeeeee' is input", () => {

		it("should return 'a3b3c3d3e8'", () => {

			const test = letterAddition("aaabbbcccdddeeeeeeee");

			expect(test).to.equal("a3b3c3d3e8");

		});

	});

});