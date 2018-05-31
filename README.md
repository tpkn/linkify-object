# linkifyObject   
Converts object props into a link


Short and quick module that converts object properties `{ a: b, c: d }` into a link `&a=b&c=d` and offers filter functionality. Was made for Express `request.queue` object. Works both in Node and web browsers (some of them).



## Installation
```bash
npm install linkify-object
```



## API

### linkifyObject(object[, filter])


### object
Type: _Object_   


### filter
Type: _String_ | _Array_ | _Function_  
Default: `true`  
Helps to filter out props. Could be a `string`, a `string[]` or a `function`.   



## Usage

```javascript
const linkify = require('linkify-object');

let obj = { a: 1, b: 2, c: 3, d: 4 };

linkify(obj, 'a');
// => 'b=2&c=3&d=4'

linkify(obj, ['b', 'c']);
// => 'a=1&d=4'

linkify(obj, item => /^(a|b|d)/.test(item));
// => 'c=3'
```


## Changelog 
#### v1.1.0 (2018-05-31):
- now it can stringify nested objects
- more advanced filter

