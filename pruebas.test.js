// Import the function sum from the app.js file
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("Un euro deberia ser 1.07 dollars", ()=>{
    //si 1 euro son 1.17, entonces 3.5 euro deberian ser 4.095
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(expected);

})

test("Un dolar deberia ser 155.69 yenes", ()=>{
    //si 1 dolar son 155.69, entonces 3.5 dolares deberian ser 544.915
    const expected = 3.5 * 155.69;

    expect(fromDollarToYen(3.5)).toBe(expected);

})

test("Un yen deberia ser 0.0048 libras", ()=>{
    //si 1 euro son 0.0048 libras, entonces 1500 yenes deberian ser 7.2
    const expected = 1500 * 0.0048;

    expect(fromYenToPound(1500)).toBe(expected);

})