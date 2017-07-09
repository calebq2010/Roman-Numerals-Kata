var expect = require('chai').expect;
var romanNumeral = require('../src/RomanNumeral');

describe('A basic test', function() {
    it('should pass when everything is okay', function() {
        expect(true).to.equal(true);
    });
});

describe('Describe roman numeral kata', function() {
    it('Should return I when inputNumber is 1', function() {
        expect(romanNumeral(1)).to.equal("I");
    });

    it('Should return II when inputNumber is 2', function() {
        expect(romanNumeral(2)).to.equal("II");
    });

    it('Should return III when inputNumber is 3', function() {
        expect(romanNumeral(3)).to.equal("III");
    });

    it('Should return IV when inputNumber is 4', function() {
        expect(romanNumeral(4)).to.equal("IV");
    });

    it('Should return V when inputNumber is 5', function() {
        expect(romanNumeral(5)).to.equal("V");
    });

    it('Should return X when inputNumber is 10', function() {
        expect(romanNumeral(10)).to.equal("X");
    });

    it('Should return L when inputNumber is 50', function() {
        expect(romanNumeral(50)).to.equal("L");
    });
});