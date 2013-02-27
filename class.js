var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byClass

function byClass(context, selector) {
    if (typeof context === "string") {
        selector = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByClassName(selector))
}
