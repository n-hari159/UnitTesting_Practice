const lib = require('../lib');

// describe is a function in jasmine/test where we can group all our related tests in single function. we replace test with it here.
describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return a zero if input is zero', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Hari');
        expect(result).toMatch(/Hari/); // using regular expressions to make it balanced(not to be too specific)
    });
});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        // too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        // proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        // ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'AUD', 'USD']));
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({ id: 1, price: 10 });
        expect(result).toMatchObject({ id: 1, price: 10 });
        // expect(result).toHaveProperty('id', '1');   // Key value pair
    });
});

describe('registerUser', () => {
  it('should throw if user name is falsy', () => {
    // Null,undefined,NaN,'',0,false
    const args = [null,undefined,NaN,'',0,false];
    args.forEach(a => {
        expect(() => { lib.registerUser(a) }).toThrow();
    });
  });

  it('should return a user object if valid user name is passed', () => {
    const result = lib.registerUser('Hari');
    expect(result).toMatchObject({ username: 'Hari' });
    expect(result.id).toBeGreaterThan(0);
  });
});
