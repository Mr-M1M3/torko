/**
 * Project: torko
 * Author: Mr-M1M3
 * Date: 14-04-2022
 */

class Args {
    constructor(args) {

        // parses and removes '-' from flags
        let _flags_ = args.filter(v => v[0] == '-' && v[1] != '-').map(v => v.replace('-', ''));
        // parses argument keys aka args with '--' and doesn't remove '--'
        let _argument_keys_ = args.filter(v => v.slice(0, 2) == '--');
        // empty obj to add argument values which is right after the argument keys
        let __arguments__ = {};
        // assembles key:value pairs of argument keys and argument values
        for (let key of _argument_keys_) {
            __arguments__[key.replace('--', '')] = !args[args.indexOf(key) + 1] || args[args.indexOf(key) + 1][0] == '-' ? '' : args[args.indexOf(key) + 1];
        }


        /**  custom methods of flags **/
        Object.defineProperty(_flags_.__proto__, 'on', {
            value: function (flag, fn, ...params) { // calls fn with params if flag exist on _flags_
                if (_flags_.includes(flag)) {
                    fn(...params);
                }
            }
        });

        /**  custom methods of args **/
        Object.defineProperty(__arguments__.__proto__, 'on', {
            value: function (arg, fn, ...params) { // calls fn with value and params if arg exist on __arguments__
                if (__arguments__[arg]) {
                    fn(__arguments__[arg], ...params);
                }
            }
        });

        // finally constructs flags and arguments
        this.arguments = __arguments__;
        this.flags = _flags_;
    }
}

module.exports = Args;