const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var RQ = require('../src/rl-implementation');

describe('Round-Queue', () => {
    describe('When adding elements', () => {
        it('Should add an element to the end of a non-full queue', () => {
            const nonFullQueue = new RQ(3);
            const originalSize = nonFullQueue.size;
            const poppedElement = nonFullQueue.push(1);

            expect(poppedElement).to.be.undefined;

            nonFullQueue.last().should.be.equal(1);
            nonFullQueue.size.should.be.equal(originalSize + 1);
        });

        it('Should pop the first element and add the new element to the end of a full queue', () => {
            const fullQueue = new RQ(3);
            fullQueue.push(1);
            fullQueue.push(2);
            fullQueue.push(3);

            const originalSize = fullQueue.size;
            const poppedElement = fullQueue.push(4);

            poppedElement.should.be.equal(1);
            fullQueue.first().should.be.equal(2);
            fullQueue.last().should.be.equal(4);
            fullQueue.size.should.be.equal(originalSize);
        });
    });

    describe('When removing elements', () => {
        it('Should remove the first element of a non-empty queue', () => {
            const nonEmptyQueue = new RQ(3);
            nonEmptyQueue.push(1);
            nonEmptyQueue.push(2);

            const originalSize = nonEmptyQueue.size;
            const poppedElement = nonEmptyQueue.pop();

            nonEmptyQueue.first().should.be.equal(2);
            nonEmptyQueue.size.should.be.equal(originalSize - 1);
        });

        it('Should throw an error on an empty queue', () => {
            const emptyQueue = new RQ(3);

            expect(emptyQueue.pop).to.throw(Error);
        });
    });
});