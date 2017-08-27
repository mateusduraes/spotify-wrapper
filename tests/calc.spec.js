import {expect} from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('smoke tests', () => {

    it('should exists the method "sum"', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists the method "sub"', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    it('should exists the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

    it('should return 7 when `sum(2, 2, 3)`', () => {
      expect(sum(2, 2, 3)).to.be.equal(7);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });

    it('should return -9 when `sub(6, 10, 5)`', () => {
      expect(sub(6, 10, 5)).to.be.equal(-9);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

    it('should return 12 when `mult(2, 2, 3)`', () => {
      expect(mult(2, 2, 3)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `cannot divide by zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('cannot divide by zero');
    });
  });

});
