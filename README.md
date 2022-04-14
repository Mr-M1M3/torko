
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
//index.js

const args = require('torko')(); // requires and calls "torko"
console.log(args);
```

Now, calling the above code from terminal,

```bash
node index.js --port 8080 -dev
```

This will output something like the following: 

```bash
{

  flags: Flags { flags: [ 'dev' ] },

  arguments: Args { arguments: { port: '8080' } }

}
```
Let's refractor what we got,

- **`flags`**: Constructed using `Flags` class. This contains an array of arguments that are prefixed with `-`. Usually, flags are `boolean` meaning flags doesn't contain values. Now, you know why `flags` is an array! Following example shows how you pass flags.
```bash
-flag
```

- **`arguments`**: Constructed using `Args` constriuctor. Conatins key:value pairs of the arguments prefixed with`--`. You pass command-line arguments value like so:
```bash
--argument value
```
### Methods

Both `flags` and `arguments` torko provides you some methods to decrease your pain in the ass. torko follows method chaining pattern for better usability.

**`.flags.for(<flag>).call(<fn>)`**:`
```
Calls `fn` if <flag> is passed as an flag.
```

-  **`arguments.for(<arg>).call(<fn>)`**:
```
Calls `fn` if <arg> is passed as an argument
with the value of the <arg> parameter as a parameter.
```
## Authors

- [@mr-m1m3](https://www.github.com/mr-m1m3)

