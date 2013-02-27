var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byQueryAll

function byQueryAll(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.querySelectorAll(query))
}
