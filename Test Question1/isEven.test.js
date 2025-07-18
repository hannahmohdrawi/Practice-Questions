const { isEven } = require('./isEven');


test("tests if 4 is even", () => {
    expect(isEven(4)).toBe(true);
})

test("tests if 7 is even", () => {
    expect(isEven(7)).toBe(false);
})

test("tests if 0 is even", () => {
    expect(isEven(0)).toBe(true);
})

test("tests if -2 is even", () => {
    expect(isEven(-2)).toBe(true);
})

test("tests if 1.5 is even", () => {
    expect(isEven(1.5)).toBe(false);
})