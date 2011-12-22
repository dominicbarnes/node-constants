/**
 * This is the most verbose of the methods to use this module,
 * and also the most flexible in case you have multiple objects
 * you want to define constants on (particularly if there is a
 * hierarchy of constants)
 */

var constants = require("../");

// constants.define() takes 2-3 params
// the first is the object to bind a new "constant" to

// then you can either specify a single key/value pair as 2 params
constants.define(exports, "DAYS_IN_WEEK", 7);
constants.define(exports, "SECONDS_IN_MINUTE", 60);
constants.define(exports, "HOURS_IN_DAY", 24);

// or

// you can specify an entire group with a shallow hash of key/value pairs
constants.define(exports, {
    DAYS_IN_WEEK: 7,
    SECONDS_IN_MINUTE: 60,
    HOURS_IN_DAY: 24
});

console.log(exports);
