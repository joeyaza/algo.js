const MeanMedianMode = require('./MeanMedianMode');
const chai = require('Chai');
const expect = chai.expect

describe("MeanMedianMode", () => {

	describe("when [1, 2, 3, 4, 4, 5, 5] is input", () => {

		const meanMedianMode = new MeanMedianMode([1, 2, 3, 4, 4, 5, 5]);

		it("should return 3.43 for mean", () => {

			const mean = Number(meanMedianMode.mean());

			expect(mean).to.equal(3.43);

		});

		it("should return 4 for median", () => {

			const median = meanMedianMode.median();

			expect(median).to.equal(4);

		});


		it("should return [4, 5] for mode", () => {

			const mode = meanMedianMode.mode();

			expect(mode).to.deep.equal([4, 5]);

		});


	});

	describe("when [1, 1, 2, 2, 3, 3, 4, 4] is input", () => {

		const meanMedianMode = new MeanMedianMode([1, 1, 2, 2, 3, 3, 4, 4]);

		it("should return 2.5 for mean", () => {

			const mean = Number(meanMedianMode.mean())

			expect(mean).to.equal(2.5);

		});

		it("should return 4 for median", () => {

			const median = meanMedianMode.median();

			expect(median).to.equal(2.5);

		});

		it("should return [] for mode", () => {

			const mode = meanMedianMode.mode();

			expect(mode).to.deep.equal([]);

		});


	});

});