var slice = Array.prototype.slice
var document = require("global/document")

module.exports = byName

function byName(name) {
    return slice.call(document.getElementsByName(name))
}
