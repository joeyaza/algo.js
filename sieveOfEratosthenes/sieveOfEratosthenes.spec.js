const sieveOfEratosthenes = require('./sieveOfEratosthenes');
const chai = require('Chai');
const expect = chai.expect

describe("SieveOfEratosthenes", () => {

	describe("when 10 is input", () => {

		it("should return 0, 1, 2, 3, 5, 7", () => {

			const test = sieveOfEratosthenes(10);

			expect(test).to.deep.equal([0, 1, 2, 3, 5, 7]);

		});

	});

});