const Room = function (area, painted) {
    this.area = area
    this.painted = painted
}

Room.prototype.area = function(){
    return this.area;
}


module.exports = Room