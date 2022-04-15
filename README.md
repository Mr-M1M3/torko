
# Torko
An easier to use tool to manage command-line arguments and flags in nodejs
## Installation

Install torko with npm

```bash
  npm install torko
```
 ## API Reference

### Initilize

To Initilize, simply require and call `torko`. Passing `process.argv.slice(2)` as a parameter is optional.
```javascript
const torko = require('torko')(); // requires and calls torko
console.log(torko);
```
Now,the above script with `node index.js start --port 8080 -w`.

What are we doing?
- The first part `node index.js` says node to run the script.
- `start` is the command we pass to torko. Commands must not start with '-' and they must be passed before flags and arguments.
- `--port 8080`, here `port` is the argument and `8080` is value.
- `-w` is a flag. Flags don't contain value.

Now, if you've understood, let's focus on the output:
```bash
Torko { commands: [ 'start' ], args: { port: '8080' }, flags: [ 'w' ] }
```
- **`commands`**: Array of commands
- **`args`**: Key:Value pair of arguments. Keys are without prefix.
- **`flags`**: Array of flags without prefix.

### Methods
- **`.handle().command(<command>).by(<function>)`**: Calls `<function>` if `<command>` was passed as command
- **`.handle().arg(<arg>).by(<function>)`**: Calls `<function>` with the value of <arg> as a parameter if ` <arg>`  was passed as an argument.
- **`.handle().flag(<flag>).by(<function>)`**: Calls `<function>` if `<flag>`  was passed as an flag.
## Usage/Examples

Logs `server starting` if `start` was passed as a command
```javascript
const torko = require('torko')();

torko.handle().command('start').by(() => {
  console.log('server starting');
})
```

Gets port number
```javascript
const torko = require('torko')();

torko.handle().arg('port').by(port_number => {
  console.log(port);
});
```

Checks whether server shiuld be ran in production mode
```javascript
const torko = require('torko')();

torko.handle().flag('production').by(()=> {
  console.log('starting server in production');
});

```


## Support
- [Report Bug](https://github.com/Mr-M1M3/torko)
Your feedbacks and suggestions are appreciated. Mail me at abir.sheikh.4044@gmail.com

## Authors

- [@mr-m1m3](https://www.github.com/mr-m1m3)

