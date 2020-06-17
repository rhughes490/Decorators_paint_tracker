const Paint_can = function (litres) {
    this.litres = litres
}


Paint_can.prototype.removeAllPaint = function () {
    this.litres = 0
  }

module.exports = Paint_can