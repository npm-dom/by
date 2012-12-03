module.exports = byQueryAll

function byQueryAll(query, context) {
    return (context || document).querySelectorAll(query)
}
