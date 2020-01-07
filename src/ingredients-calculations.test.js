const { getQuantity, toFraction } = require('./ingredients-calculations');

describe('getQuantity', () => {
  describe('pieces', () => {
    it('should not change quantity', () => {
      const ingredient = {
        name: 'egg(s)',
        quantity: 5,
        unit: 'st',
      };
      expect(getQuantity(ingredient, 4, 4)).toEqual(ingredient);
    });

    it('should change quantity', () => {
      const ingredient = {
        name: 'egg(s)',
        quantity: 5,
        unit: 'st',
      };
      const expected = {
        name: 'egg(s)',
        quantity: 10,
        unit: 'st',
      };
      expect(getQuantity(ingredient, 4, 8)).toEqual(expected);
    });

    it('should use 2 decimals', () => {
      const ingredient = {
        name: 'egg(s)',
        quantity: 10,
        unit: 'st',
      };
      const expected = {
        name: 'egg(s)',
        quantity: 3.33,
        unit: 'st',
      };
      expect(getQuantity(ingredient, 27, 9)).toEqual(expected);
    });
  });
});

describe('toFraction', () => {
  it('1.33 = 1 1/3', () => {
    expect(toFraction(1.33)).toBe('1 1/3');
  });

  it('1.5 = 1 1/2', () => {
    expect(toFraction(1.5)).toBe('1 1/2');
  });

  it('1.25 = 1 1/4', () => {
    expect(toFraction(1.25)).toBe('1 1/4');
  });

  it('0.25 = 1/4', () => {
    expect(toFraction(0.25)).toBe('1/4');
  });
});
