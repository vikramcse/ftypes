# ftypes

> Get the list of file extensions in specified directory

## Install

```
$ npm install --save ftypes
```

## Usage

```js
var ftypes = require('ftypes');

ftypes('dir_path', function(err, dict) {

});
```
## API
The returned dict contains two objects
### dict = {fileTypes : type array, fileNames : type array}
