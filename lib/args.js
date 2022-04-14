/**
 * Project: torko
 * Author: Mr-M1M3
 * Date: 14-04-2022
 */

class Args {
    constructor(args) {
        let argument_keys = args.filter(v => v.slice(0, 2) == '--');
        let _arguments = {};
        for (let key of argument_keys) {
            _arguments[key.replace('--', '')] = !args[args.indexOf(key) + 1] || args[args.indexOf(key) + 1][0] == '-' ? '' : args[args.indexOf(key) + 1];
        }
        this.arguments = _arguments;
    }
    for(arg){
        if (typeof arg != 'string' || arg.length < 0) {
            throw new Error('invalid parameter received', {
                cause: `Expected a String, got ${typeof flag}! Or, did you pass an empty String?`
            });
        }
        if(this.arguments[arg]){
            // returns an object with corresponding values to maintain method chaining pattern
            return {
                call: function(fn){
                    if(typeof fn != 'function'){
                        throw new Error('invalid parameter received', {
                            cause: `Expected a Function, got ${typeof fn}!`
                        });
                    }else{
                        fn(this.arguments[arg]);
                    }
                }
            }
        }else{
            return {
                call: function(fn){
                    return 'argument wasn\'t passed';
                }
            }
        }
    }
}

module.exports = Args;