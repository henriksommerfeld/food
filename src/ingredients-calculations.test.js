const {
  formattedQuantity,
  getQuantity,
  toFraction,
} = require('./ingredients-calculations');

describe('formattedQuantity', () => {
  it('pieces decimal should be fraction formatted', () => {
    const ingredient = {
      name: 'lemon',
      quantity: 0.5,
      unit: 'st',
    };
    const result = formattedQuantity(ingredient);
    expect(result).toEqual('½ lemon');
  });

  it('grams should not have decimals', () => {
    const ingredient = {
      name: 'butter',
      quantity: 140.333333,
      unit: 'g',
    };
    const result = formattedQuantity(ingredient);
    expect(result).toEqual('140 g butter');
  });

  it('ml should not have decimals and be krm', () => {
    const ingredient = {
      name: 'nutmeg',
      quantity: 1.71,
      unit: 'ml',
    };
    const result = formattedQuantity(ingredient);
    expect(result).toEqual('2 krm nutmeg');
  });

  it('empty name should render null', () => {
    const ingredient = {
      name: undefined,
      quantity: 1.71,
      unit: 'ml',
    };
    const result = formattedQuantity(ingredient);
    expect(result).toEqual(null);
  });
});

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
        quantity: 800,
        unit: 'g',
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

    it('dl => dl', () => {
      const ingredient = {
        name: 'olives',
        quantity: 0.5,
        unit: 'dl',
      };
      const expected = {
        name: 'olives',
        quantity: 0.5,
        unit: 'dl',
      };
      expect(getQuantity(ingredient, 4, 4)).toEqual(expected);
    });
  });
});

describe('toFraction', () => {
  it('1.33 = 1,3', () => {
    const ingredient = {
      quantity: 1.33,
      unit: 'msk',
    };
    expect(toFraction(ingredient)).toBe('1,3');
  });

  it('1.5 = 1 1/2', () => {
    const ingredient = {
      quantity: 1.5,
      unit: 'msk',
    };
    expect(toFraction(ingredient)).toBe('1 ½');
  });

  it('1.75 = 1 3/4', () => {
    const ingredient = {
      quantity: 1.75,
      unit: 'tsk',
    };
    expect(toFraction(ingredient)).toBe('1 ¾');
  });

  it('0.25 = 1/4', () => {
    const ingredient = {
      quantity: 0.21,
      unit: 'dl',
    };
    expect(toFraction(ingredient)).toBe('¼');
  });

  it('0.25 liter != 1/4', () => {
    const ingredient = {
      quantity: 0.21,
      unit: 'l',
    };
    expect(toFraction(ingredient)).toBe('0,2');
  });

  it('0.25 kilo != 1/4', () => {
    const ingredient = {
      quantity: 0.21,
      unit: 'kg',
    };
    expect(toFraction(ingredient)).toBe('0,2');
  });
});
