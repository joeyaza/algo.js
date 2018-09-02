const reverseInt = require('./reverseInt');
const chai = require('Chai');
const expect = chai.expect

describe("ReverseInt", () => {

	describe("when 15 is input", () => {

		it("should return 51", () => {

			const test = reverseInt(15);

			expect(test).to.equal(51);

		});

	});

	describe("when 981 is input", () => {

		it("should return 189", () => {

			const test = reverseInt(981);

			expect(test).to.equal(189);

		});

	});

	describe("when 500 is input", () => {

		it("should return 5", () => {

			const test = reverseInt(500);

			expect(test).to.equal(5);

		});

	});


	describe("when -15 is input", () => {

		it("should return -51", () => {

			const test = reverseInt(-15);

			expect(test).to.equal(-51);

		});

	});

	describe("when -90 is input", () => {

		it("should return -9", () => {

			const test = reverseInt(-90);

			expect(test).to.equal(-9);

		});

	});

});