# linkifyObject   
Converts object props into a link


Short and quick module that converts object properties `{ a: b, c: d }` into a link `&a=b&c=d`.   
Works both in Node and web browsers.


## Installation
```bash
npm install linkify-object
```



## API

### linkifyObject(object[, filter])


### object
Type: _Object_ 


### filter
Type: _String_ | _Array_  
Default: `true`  
Helps to filter out props. Could be a `string` or an `array`. Uses 'indexOf' method.  



## Usage

```javascript
const linkify = require('linkify-object');

let obj = {a: 'display', b: 23, c: 'VAST', d: 123456, e: 0, f: 3879, g: '[timestamp]'};
let filter = ['a', 'b', 'e', 'g'];

let link = linkify(obj, filter);
// => 'c=VAST&d=123456&f=3879'
```

