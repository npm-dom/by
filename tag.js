module.exports = byTag

function byTag(tag, context) {
    return (context || document).getElementsByTagName(tag)
}
