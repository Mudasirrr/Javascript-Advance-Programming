// CommonJS
var module1 = require('module1') // fight;
var module2 = require('module2') // importedFun2;

function fight() {

}

module.exports = {
    fight
}

// AMD: designed specifically for browsers, loads scripts asynchronously (since code cant wait unless module has finished)
// require.js -> similar to AMD (used more frequently in past)
define(['module1', 'module2'],
    function(module1Import, module2Import) {

        var fight = module1Import.fight;
        var module1 = module1Import // .fight;
        var module2 = module2Import // .importedFunc2;

        function dance() {

        }

        return {
            dance
        };
    });