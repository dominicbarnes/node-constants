/**
 * The module itself is actually a function object that takes a single
 * param and passes it along to constants.definer(). This enables you
 * to quickly get a definer() in as little code as possible
 */

// the returned function will be bound to exports (module.exports)
var define = require("../")(exports);

define("PI", 3.14);
define("ZERO", 0);

// or

define({
    PI:   3.14,
    ZERO: 0
});

console.log(exports);
