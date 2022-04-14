/**
 * Project: torko
 * Author: Mr-M1M3
 * Date: 14-04-2022
 */

const process = require('process');
const Arguments = require('./lib/parser.js');

function torko() {
    let {flags, arguments} = new Arguments(process.argv.slice(2));
    return {flags, arguments};
}

module.exports = torko;