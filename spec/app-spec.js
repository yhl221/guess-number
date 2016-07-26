'use strict';
const CompareNumber = require('../src/compare-number.js');
describe('guess number game', ()=> {
    let randomNumber = '1234';
    let firstInput = '1234';
    it('compare firstNumber to random', ()=> {
        const resultFirst = CompareNumber.compareNumber(randomNumber, firstInput);
        const expectFirstReault = '4A0B';
        expect(resultFirst).toEqual(expectFirstReault);
    });
});