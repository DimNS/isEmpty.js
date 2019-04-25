QUnit.test('isEmpty() return true', function (assert) {
    assert.ok(isEmpty(null), 'isEmpty(null) === true');
    assert.ok(isEmpty(undefined), 'isEmpty(undefined) === true');
    assert.ok(isEmpty(NaN), 'isEmpty(NaN) === true');
    assert.ok(isEmpty(""), 'isEmpty("") === true');
    assert.ok(isEmpty("    "), 'isEmpty("MANY-SPACES-HERE") === true');
    assert.ok(isEmpty({}), 'isEmpty({}) === true');
    assert.ok(isEmpty([]), 'isEmpty([]) === true');
});

QUnit.test('isEmpty() return false', function (assert) {
    assert.ok(!isEmpty("null"), 'isEmpty("null") === false');
    assert.ok(!isEmpty("undefined"), 'isEmpty("undefined") === false');
    assert.ok(!isEmpty(0), 'isEmpty(0) === false');
    assert.ok(!isEmpty(123), 'isEmpty(123) === false');
    assert.ok(!isEmpty("    string   "), 'isEmpty("MANY-SPACES-HEREstringMANY-SPACES-HERE") === false');
    assert.ok(!isEmpty({"1": "111", "2": "222"}), 'isEmpty({"1": "111", "2": "222"}) === false');
    assert.ok(!isEmpty(["111", "222"]), 'isEmpty(["111", "222"]) === false');
    assert.ok(!isEmpty(function() {}), 'isEmpty(function() {}) === false');
    assert.ok(!isEmpty(true), 'isEmpty(true) === false');
    assert.ok(!isEmpty(false), 'isEmpty(false) === false');
});