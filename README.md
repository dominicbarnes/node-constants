[![build status](https://secure.travis-ci.org/dominicbarnes/node-constants.png)](http://travis-ci.org/dominicbarnes/node-constants)
# node-constants

A small library for defining module-level constants.

Check for further examples in the `examples` folder.
Also, the source code is really small and well documented.

## Basic Usage

    var define = require("constants")(exports);
    // define is a function that binds "constants" to an object (commonly exports)

    // a single constant
    define("PI", 3.14);

    // or multiple
    define({
        DAYS_IN_WEEK: 7,
        SECONDS_IN_MINUTE: 60
    });

## Installation

    npm install constants
