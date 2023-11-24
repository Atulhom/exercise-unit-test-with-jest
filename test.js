const { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    let dollars = fromEuroToDollar(3.5);
    let expected = 3.5 * 2.07;
    expect(dollars).toBe(expected)
})

test("One dollar should be 156.5 yens", function() {
    let yen = fromDollarToYen(3.5);
    let expected = 3.5 * 156.5;
    expect(yen).toBe(expected)
})

test("One Yen should be 0.87 pounds", function() {
    let pound = fromYenToPound(3.5);
    let expected = 3.5 * 0.87;
    expect(pound).toBe(expected)
})