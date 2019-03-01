function weightConverter(x) {
    var kgs = x * 1000;
    return kgs
}

//Added QUnit Test
QUnit.test("Kilograms to Grams conversion", function (assert) {
    assert.equal(weightConverter(1), 1000, "1 kilogram converted to 1000 grams");
    assert.equal(weightConverter(2), 2000, "2 kilogram converted to 2000 grams");
    assert.equal(weightConverter(3), 3000, "3 kilogram converted to 3000 grams")
    assert.equal(weightConverter(4), 4000, "4 kilogram converted to 4000 grams");
    assert.equal(weightConverter(10), 10000, "10 kilogram converted to 10000 grams")
    assert.equal(weightConverter(12), 10000, "invalid output conversion")
}); 