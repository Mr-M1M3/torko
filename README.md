
# Torko
An easier to use tool to manage command-line arguments and flags in nodejs


## Installation

Install torko with npm

```bash
  npm install torko
```
    
## API Reference

### Initilize

```javascript
// index.js
  const args = require('torko')(); // requires and calls torko.
  console.log(args); // you can then get all the arguments or flags.
```
#### `Running the above code with arguments '--port 8080' will print the following`

```javascript
{ flags: [ 'dev' ], arguments: { port: '8080' } }
```

Now you can access the args just like an regular javascript object.

If you've noticed, the output object has two properties, `flags` and `arguments`. Curious about
the difference between them? Well, in `torko`, args prefixed with `--` goes under `arguments` and args 
prefixed with `-` goes under `flags`.

| Arg | Prefix    | Type                       |
| :-------- | :------- | :-------------------------------- |
| `--port`  | `--` | **argument** |
| `-dev`    | `-` | **flag** |

### Methods

## Executes callback, if <flag> is passed as a flag
```javascript
.flags.on(<flag>, <callback>); // you don't prefix '<flag>' with '-'
```
| Parameter | Type     | Required |
| :---------|:---------|:---------|
|flag       | String   | Required |
|callback   | Function | Required |

## Executes callback, if <arg> is passed as a argument
```javascript
.arguments.on(<arg>, <callback>); // you don't prefix '<arg>' with '--'
```
| Parameter | Type     | Required |
| :---------|:---------|:---------|
|arg       | String   | Required |
|callback   | Function | Required |

Both th functions support unlimited number of parameters. However, parameters after `<callback>`
will passed as an parameter of `<callback>`. But, the third parameter of `.arguments()` callback receives is the value of `<arg>` passed from command-line.


## Authors

- [@mr-m1m3](https://www.github.com/mr-m1m3)

