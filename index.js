const Torko = require('./lib/parser');
const process = require('process');
function parser(argv = process.argv.slice(2)){
    return new Torko(argv);
}

module.exports = parser;