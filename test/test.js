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

QUnit.test('notEmpty() return false', function (assert) {
    assert.ok(!notEmpty(null), 'notEmpty(null) === false');
    assert.ok(!notEmpty(undefined), 'notEmpty(undefined) === false');
    assert.ok(!notEmpty(NaN), 'notEmpty(NaN) === false');
    assert.ok(!notEmpty(""), 'notEmpty("") === false');
    assert.ok(!notEmpty("    "), 'notEmpty("MANY-SPACES-HERE") === false');
    assert.ok(!notEmpty({}), 'notEmpty({}) === false');
    assert.ok(!notEmpty([]), 'notEmpty([]) === false');
});

QUnit.test('notEmpty() return true', function (assert) {
    assert.ok(notEmpty("null"), 'notEmpty("null") === true');
    assert.ok(notEmpty("undefined"), 'notEmpty("undefined") === true');
    assert.ok(notEmpty(0), 'notEmpty(0) === true');
    assert.ok(notEmpty(123), 'notEmpty(123) === true');
    assert.ok(notEmpty("    string   "), 'notEmpty("MANY-SPACES-HEREstringMANY-SPACES-HERE") === true');
    assert.ok(notEmpty({"1": "111", "2": "222"}), 'notEmpty({"1": "111", "2": "222"}) === true');
    assert.ok(notEmpty(["111", "222"]), 'notEmpty(["111", "222"]) === true');
    assert.ok(notEmpty(function() {}), 'notEmpty(function() {}) === true');
    assert.ok(notEmpty(true), 'notEmpty(true) === true');
    assert.ok(notEmpty(false), 'notEmpty(false) === true');
});