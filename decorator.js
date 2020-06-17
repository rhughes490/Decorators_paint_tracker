const Decorator = function (stock) {
    this.stock = []
}

    Decorator.prototype.addPaint = function(paint_can){
        this.stock.push(paint_can);
    }

    Decorator.prototype.calculateLitres = function(){
        let litres_of_paint = 0
        for (let paint_can of this.stock) {
            litres_of_paint += paint_can.litres
        }
        return litres_of_paint
    }

    Decorator.prototype.enoughPaint = function(){
        if (room.area < Decorator.calculatedLitres()) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }

module.exports = Decorator