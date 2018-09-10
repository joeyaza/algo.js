const intToWordNumber = require('./intToWordNumber');
const chai = require('Chai');
const expect = chai.expect

describe("IntToWordNumber", () => {

    describe("when 50 is input", () => {

        it("should return 'fifty'", () => {

            const test = intToWordNumber(50);

            expect(test).to.equal("fifty");

        });

    });

    describe("when 63 is input", () => {

        it("should return 'sixty three'", () => {

            const test = intToWordNumber(63);

            expect(test).to.equal("sixty three");

        });

    });

    describe("when 17 is input", () => {

        it("should return 'seventeen'", () => {

            const test = intToWordNumber(17);

            expect(test).to.equal("seventeen");

        });

    });

});
