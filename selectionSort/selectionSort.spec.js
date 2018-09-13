const selectionSort = require('./selectionSort');
const chai = require('Chai');
const expect = chai.expect

describe("SelectionSort", () => {

    describe("when [1,8,5,3,8] is input", () => {

        it("should return [1, 3, 5, 8, 8]", () => {

            const test = selectionSort([1,8,5,3,8]);

            expect(test).to.deep.equal([1, 3, 5, 8, 8]);

        });

    });

});
