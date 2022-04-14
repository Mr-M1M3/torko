/**
 * Project: torko
 * Author: Mr-M1M3
 * Date: 14-04-2022
 */

class Flags {
    constructor(args) {
        this.flags = args.filter(v => v[0] == '-' && v[1] != '-').map(v => v.replace('-', ''));
    }
    for (flag) {
        // error handlers
        if (typeof flag != 'string' || flag.length < 0) {
            throw new Error('invalid parameter received', {
                cause: `Expected a String, got ${typeof flag}! Or, did you pass an empty String?`
            });
        }

        if (this.flags.includes(flag)) {
            // returns an object with corresponding values to maintain method chaining pattern
            return {
                call: function (fn) {
                    if (typeof fn != 'function') {
                        throw new Error('invalid parameter received', {
                            cause: `Expected a Function, got ${typeof fn}!`
                        });
                    }else{
                        fn();
                    }
                }
            }
        }else{
            return {
                call: function(fn){
                    return 'flag was not passed';
                }
            }
        }
    }
}

module.exports = Flags;