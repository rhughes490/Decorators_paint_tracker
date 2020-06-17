const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint_can = require('../paint_can.js')
const Room = require('../room.js')

describe('Decorator', function() {
    let decorator

    beforeEach(function() {
        decorator = new Decorator([])
        paint_can = new Paint_can(20)
        room = new Room(10, false)
    })

            it('should start with empty paint stock', function () {
                const actual = decorator.stock
                assert.deepStrictEqual(actual, [])
            })

            it('should be able to add a can of paint to paint stock', function () {
                decorator.addPaint(paint_can)
                const actual = decorator.stock.length;
                assert.strictEqual(actual, 1)
            })

            it('should be able to calculate total litres paint it has in stock', function () {
                decorator.addPaint(paint_can)
                const actual = decorator.calculateLitres()
                assert.strictEqual(actual, 20)
            })

            it('should be able to calculate whether they have enough paint to paint a room', function() {
                const actual = decorator.enoughPaint()
                assert.strictEqual(actual, "Yes")
            })

})