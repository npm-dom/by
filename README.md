# by

Select elements by class or id or tag

## Example

Because `document.getElementsByClassName` is simply too verbose.

```js
var byClass = require("by/class")
    , queryAll = require("by/queryAll")

var elems = byClass("some-class")

var other = queryAll(".some div.selector", elems[0])
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
