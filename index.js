/**
 * Project: torko
 * Author: Mr-M1M3
 * Date: 14-04-2022
 */

// requirements
const Flags = require('./lib/flags');
const Args = require('./lib/args');

const process = require('process');

function torko() {
    return {
        flags: new Flags(process.argv.slice(2)),
        arguments: new Args(process.argv.slice(2))
    }
}

module.exports = torko;