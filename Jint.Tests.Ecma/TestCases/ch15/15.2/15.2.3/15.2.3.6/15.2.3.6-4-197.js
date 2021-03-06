/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-197.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' is own accessor property that overrides an inherited accessor property (15.4.5.1 step 4.c)
 */


function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () { },
                configurable: true
            });

            var arrObj = [];
            Object.defineProperty(arrObj, "0", {
                get: function () { },
                configurable: false
            });

            Object.defineProperty(arrObj, "0", {
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
