module.exports = byQuery

function byQuery(query, context) {
    return (context || document).querySelector(query)
}
