var rect1 = {
    id: '4',
    size: {
        width: 3,
        height: 3
    }
};
var rect2 = {
    id: '123445',
    size: {
        width: 10,
        height: 5
    }
};
var rect4 = {};
var rect5 = {
    id: '1234',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
console.log(css);
