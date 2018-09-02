const anagram = require('./anagram');
const chai = require('Chai');
const expect = chai.expect

describe("anagram", () => {

	describe("when 'rail safety' and 'fairy tales' is input", () => {

		it("should return true", () => {

			const test = anagram('rail safety', 'fairy tales');

			expect(test).to.equal(true);

		});

	});

	describe("when 'RAIL! SAFETY!' and 'fairy tales' is input", () => {

		it("should return true", () => {

			const test = anagram('RAIL! SAFETY!', 'fairy tales');

			expect(test).to.equal(true);

		});

	});

	describe("when 'Hi there' and 'Bye there' is input", () => {

		it("should return false", () => {

			const test = anagram('Hi there', 'Bye there');

			expect(test).to.equal(false);

		});

	});

});