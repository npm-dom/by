# by

[![dependency status][3]][4]

[![browser support][5]][6]

Select elements by class or id or tag

## Example

Because `document.getElementsByClassName` is simply too verbose.

Also these functions return arrays! You can also pass an optional
first parameter to give it a different context then document.

```js
var byClass = require("by/class")
    , queryAll = require("by/queryAll")

var elems = byClass("some-class")

var other = queryAll(elems[0], ".some div.selector")
```

Also has

 - `var byName = require("by/name")` which is short for
    `document.getElementsByName`
 - `var byId = require("by/id")` which is short for
    `document.getElementById`
 - `var query = require("by/query")` which is short for
    `document.querySelector`
 - `var queryAll = require("by/queryAll")` which is short for
    `document.querySelectorAll`
 - `var byTag = require("by/tag")` which is short for
    `document.getElementsByTagName`

## Installation

`npm install by`

## Contributors

 - Raynos

## MIT Licenced

  [3]: http://david-dm.org/Raynos/by.png
  [4]: http://david-dm.org/Raynos/by
  [5]: http://ci.testling.com/Raynos/by.png
  [6]: http://ci.testling.com/Raynos/by
