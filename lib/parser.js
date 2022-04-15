class Torko{
    constructor(argv){
        let args = {};
        let arg_keys = argv.filter(v => v.slice(0, 2) == '--');
        
        arg_keys.forEach(v => {
            args[v.replace('--', '')] = !argv[argv.indexOf(v) + 1] ? '' : argv[argv.indexOf(v) + 1].indexOf('-') == 0 ? '' : argv[argv.indexOf(v) + 1];
            
        });
        
        this.commands = argv.slice(0, argv.indexOf(argv.find(v => v.indexOf('-') > -1)));
        this.args = args;
        this.flags = argv.filter(v => v[0] == '-' && v[1] != '-').map(v => v.replace('-', ''));
    }
    handle() {
        let commands = this.commands;
        let args = this.args;
        let flags = this.flags;
        return {
            command: function(command){
                if(typeof command != 'string' && command.length < 0){
                    throw new TypeError(`Expected <command> to be String, got ${typeof flag}! Did you pass an empty string?`);
                }else if(!commands.includes(command)){
                    return {
                        by: function (fn) {
                            return false;
                        }
                    };
                }else{
                    return {
                        by: function(fn){
                            if(typeof fn != 'function'){
                                throw new TypeError(`Expected <fn> to be Function, got ${typeof fn}!`);
                            }else{
                                fn();
                            }
                        }
                    };
                }
            },
            arg: function(arg){
                if(typeof arg != 'string' && arg.length < 0){
                    throw new TypeError(`Expected <arg> to be String, got ${typeof flag}! Did you pass an empty string?`);
                }else if(args[arg] == null || args[arg == undefined]){
                    return {
                        by: function (fn) {
                            return false;
                        }
                    };
                }else{
                    return {
                        by: function(fn){
                            if(typeof fn != 'function'){
                                throw new TypeError(`Expected <fn> to be Function, got ${typeof fn}!`);
                            }else{
                                fn(args[arg]);
                            }
                        }
                    };
                }
            },
            flag: function(flag){
                if(typeof flag != 'string' && flag.length < 0){
                    throw new TypeError(`Expected <flag> to be String, got ${typeof flag}! Did you pass an empty string?`);
                }else if(!flags.includes(flag)){
                    return {
                        by: function (fn) {
                            return false;
                        }
                    };
                }else{
                    return {
                        by: function(fn){
                            if(typeof fn != 'function'){
                                throw new TypeError(`Expected <fn> to be Function, got ${typeof fn}`);
                            }else{
                                fn();
                            }
                        }
                    };
                }
            }
        };
    }
}

module.exports = Torko;