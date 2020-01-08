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

  describe('weight', () => {
    it('should use kilos', () => {
      const ingredient = {
        name: 'flower',
        quantity: 5,
        unit: 'hg',
      };
      const expected = {
        name: 'flower',
        quantity: 1.5,
        unit: 'kg',
      };
      expect(getQuantity(ingredient, 4, 12)).toEqual(expected);
    });

    it('should use hekto', () => {
      const ingredient = {
        name: 'flower',
        quantity: 1,
        unit: 'kg',
      };
      const expected = {
        name: 'flower',
        quantity: 8,
        unit: 'hg',
      };
      expect(getQuantity(ingredient, 10, 8)).toEqual(expected);
    });
  });

  describe('volume', () => {
    it('msk => tsk', () => {
      const ingredient = {
        name: 'water',
        quantity: 1,
        unit: 'msk',
      };
      const expected = {
        name: 'water',
        quantity: 2,
        unit: 'tsk',
      };
      expect(getQuantity(ingredient, 3, 2)).toEqual(expected);
    });

    it('msk => dl', () => {
      const ingredient = {
        name: 'water',
        quantity: 2,
        unit: 'msk',
      };
      const expected = {
        name: 'water',
        quantity: 1.2,
        unit: 'dl',
      };
      expect(getQuantity(ingredient, 2, 8)).toEqual(expected);
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
