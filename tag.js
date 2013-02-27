var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byTag

function byTag(context, tag) {
    if (typeof context === "string") {
        tag = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByTagName(tag))
}
