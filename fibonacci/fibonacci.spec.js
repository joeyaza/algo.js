const fibonacci = require('./fibonacci');
const chai = require('Chai');
const expect = chai.expect

describe("Fibonacci", () => {

	describe("when 1 is input", () => {

		it("should return 1", () => {

			const test = fibonacci(1);

			expect(test).to.equal(1);

		});

	});

	describe("when 2 is input", () => {

		it("should return 1", () => {

			const test = fibonacci(2);

			expect(test).to.equal(1);

		});

	});

	describe("when 3 is input", () => {

		it("should return 2", () => {

			const test = fibonacci(3);

			expect(test).to.equal(2);

		});

	});

	describe("when 6 is input", () => {

		it("should return 8", () => {

			const test = fibonacci(6);

			expect(test).to.equal(8);

		});

	});

	describe("when 10 is input", () => {

		it("should return 55", () => {

			const test = fibonacci(10);

			expect(test).to.equal(55);

		});

	});

});
