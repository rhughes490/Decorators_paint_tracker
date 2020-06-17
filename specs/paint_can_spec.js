const assert = require('assert')
const Paint_can = require('../paint_can.js')

describe('Paint_can', function() {
    let paint_can

    beforeEach(function() {
        paint_can = new Paint_can(20)
    })

        it('should have a number of litres', function (){
            const actual = paint_can.litres
            assert.strictEqual(actual, 20)
        })

        it('should be able to check if empty', function (){
            this.litres = 0
            const actual = this.litres
            assert.strictEqual(actual, 0)
        })

        it('should be able to remove all paint', function (){
            paint_can.removeAllPaint()
            const actual = paint_can.litres
            assert.strictEqual(actual, 0)
        })

})