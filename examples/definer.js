/**
 * constants.definer() creates a new function that is bound
 * to the input object. Although I'm using exports directly here,
 * that is not what you are limited to each call to define will
 * return the object that was operated on
 */

var constants = require("../"),
    // bind to exports (ie. module.exports)
    define = constants.definer(exports);

// the newly created function only needs 1-2 params

// either a single key/value pair as 2 params
define("DAYS_IN_WEEK", 7);
define("SECONDS_IN_MINUTE", 60);
define("HOURS_IN_DAY", 24);

// or

// a hash of key/value pairs
define({
    DAYS_IN_WEEK: 7,
    SECONDS_IN_MINUTE: 60,
    HOURS_IN_DAY: 24
});

console.log(exports);
