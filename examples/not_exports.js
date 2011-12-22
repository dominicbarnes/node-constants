/**
 * Although definer can accept an object parameter, if none is entered
 * a new empty object will be created via Object.create(null) and used
 * instead. You can retrieve that object from any calls to the returned
 * definer.
 */

var constants = require("../"),
    define = constants.definer(); // defaults to a new empty object

// since define (as well as any created definer) return the object
// that was operated on, you can store your constants module without
// ever explicitly creating it
var my_constants = define("MEANING_OF_LIFE", 42);

console.log(my_constants);
