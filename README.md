# node-constants

A small library for defining module-level constants.

Check for further examples in the `examples` folder.
Also, the source code is really small and well documented.

**NOTE:** newer versions of node use the name
["constants"](https://github.com/joyent/node/blob/master/lib/constants.js)
internally, which clobbers any attempt to use this library. As a result,
I've had to rename to the more verbose,
["node-constants"](https://www.npmjs.org/package/node-constants).

## Basic Usage

    var define = require("node-constants")(exports);
    // define is a function that binds "constants" to an object (commonly exports)

    // a single constant
    define("PI", 3.14);

    // or multiple
    define({
        DAYS_IN_WEEK: 7,
        SECONDS_IN_MINUTE: 60
    });

## Installation

    npm install --save node-constants
