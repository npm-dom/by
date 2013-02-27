var document = require("global/document")

module.exports = byQuery

function byQuery(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return context.querySelector(query)
}
