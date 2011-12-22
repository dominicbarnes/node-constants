var test = require("assert"),
    constants = require("../");

module.exports = {
    define: function (done) {
        var o = {},
            ret = constants.define(o, "PI", 3.14);

        // make sure it is not writable
        test.equal(o.PI, 3.14);
        o.PI = 5;
        test.equal(o.PI, 3.14);

        // test a collection
        constants.define(o, {
            MEANING_OF_LIFE: 42,
            SECONDS_IN_MINUTE: 60
        });

        // make sure it's not writable
        test.equal(o.MEANING_OF_LIFE, 42);
        o.MEANING_OF_LIFE = 100;
        test.equal(o.MEANING_OF_LIFE, 42);

        test.strictEqual(o, ret);
        done();
    },
    definer: function (done) {
        var define = constants.definer(),
            a, b;

        a = define("QUARTS_IN_GALLON", 4);
        b = define("LETTERS_IN_ALPHABET", 24);

        // make sure the same object is returned
        test.strictEqual(a, b);

        // test constants
        test.equal(a.QUARTS_IN_GALLON, 4);
        test.equal(b.LETTERS_IN_ALPHABET, 24);

        done();
    },
    quick: function (done) {
        var define = constants(),
            o = define("ZERO", 0);

        test.ok(o);
        test.strictEqual(o.ZERO, 0);

        done();
    }
};
