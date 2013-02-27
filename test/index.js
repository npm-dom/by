var surface = "\
    <div id='anchor'>\
        <a name='elem1'></a>\
        <a name='elem1'></a>\
        <div id='id1'></div>\
        <div class='elem3'></div>\
        <div class='elem3'></div>\
        <span> elem4 </span>\
        <div class='foo' data-attr='elem5'></div>\
        <div class='foo' data-attr='elem5'></div>\
        <div id='nested'>\
            <a name='elem1'></a>\
            <a name='elem1'></a>\
            <div id='id2'></div>\
            <div class='elem3'></div>\
            <div class='elem3'></div>\
            <span> elem4 </span>\
            <div class='foo' data-attr='elem5'></div>\
            <div class='foo' data-attr='elem5'></div>\
        </div>\
    </div>\
"

var document = require("global/document")
var test = require("tape")
var by = require("../index")
var byClass = by["class"]

test("by has functions", function (assert) {
    assert.ok(by.id)
    assert.ok(by.name)
    assert.ok(by.query)
    assert.ok(by.queryAll)
    assert.ok(by.tag)
    assert.ok(by["class"])

    var container = document.createElement("div")
    container.innerHTML = surface

    document.body.appendChild(container)

    assert.end()
})

test("by name", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var elems = by.name("elem1")

    assert.ok(Array.isArray(elems))
    assert.equal(elems.length, 4)
    assert.equal(elems[0], anchor.children[0])
    assert.equal(elems[1], anchor.children[1])
    assert.equal(elems[2], nested.children[0])
    assert.equal(elems[3], nested.children[1])

    assert.end()
})

test("by id", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var id1 = by.id("id1")
    var id2 = by.id("id2")

    assert.equal(id1, anchor.children[2])
    assert.equal(id2, nested.children[2])

    assert.end()
})

test("by class", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var allElems = byClass("elem3")
    var nestedElems = byClass(nested, "elem3")

    assert.ok(Array.isArray(allElems))
    assert.ok(Array.isArray(nestedElems))
    assert.equal(allElems.length, 4)
    assert.equal(nestedElems.length, 2)
    assert.equal(allElems[0], anchor.children[3])
    assert.equal(allElems[1], anchor.children[4])
    assert.equal(allElems[2], nested.children[3])
    assert.equal(allElems[3], nested.children[4])
    assert.equal(nestedElems[0], nested.children[3])
    assert.equal(nestedElems[1], nested.children[4])

    assert.end()
})

test("by tag", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var allElems = by.tag("span")
    var nestedElems = by.tag(nested, "span")

    assert.ok(Array.isArray(allElems))
    assert.ok(Array.isArray(nestedElems))
    assert.equal(allElems.length, 2)
    assert.equal(nestedElems.length, 1)
    assert.equal(allElems[0], anchor.children[5])
    assert.equal(allElems[1], nested.children[5])
    assert.equal(nestedElems[0], nested.children[5])

    assert.end()
})

test("by query", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var topElem = by.query(".foo[data-attr='elem5']")
    var nestedElem = by.query(nested, ".foo[data-attr='elem5']")

    assert.equal(topElem, anchor.children[6])
    assert.equal(nestedElem, nested.children[6])

    assert.end()
})

test("by query all", function (assert) {
    var anchor = by.id("anchor")
    var nested = by.id("nested")

    var allElems = by.queryAll(".foo[data-attr='elem5']")
    var nestedElems = by.queryAll(nested, ".foo[data-attr='elem5']")

    assert.ok(Array.isArray(allElems))
    assert.ok(Array.isArray(nestedElems))
    assert.equal(allElems.length, 4)
    assert.equal(nestedElems.length, 2)
    assert.equal(allElems[0], anchor.children[6])
    assert.equal(allElems[1], anchor.children[7])
    assert.equal(allElems[2], nested.children[6])
    assert.equal(allElems[3], nested.children[7])
    assert.equal(nestedElems[0], nested.children[6])
    assert.equal(nestedElems[1], nested.children[7])

    assert.end()
})
