var str = 'HEllo';
console.log(str);
var isFetching = true;
var int = 42;
isFetching = true;
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray1 = [1, 1, 2, 3, 5, 8, 13];
var words = ['hello', 'Typescript'];
//Tuple
var contact = ['Vladilen', 1234567];
//Any
var variable = 42;
variable = 'New String';
//
function sayMyName(name) {
    console.log(name);
}
sayMyName('Huizinberg');
function myError(message) {
    throw new Error(message);
}
var login = 'admin';
var rect2 = {
    id: '123445',
    size: {
        width: 10,
        height: 5
    }
};
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
