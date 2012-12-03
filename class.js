module.exports = byClass

function byClass(selector, context) {
    return (context || document).getElementsByClassName(selector)
}
