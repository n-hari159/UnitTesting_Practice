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