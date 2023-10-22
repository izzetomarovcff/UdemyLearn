var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("OtoBus x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
var taxi_2 = new Taxi({ x: 10, y: 30 }, "red");
taxi_2.travelTo({ x: 1, y: 2 });
console.log(taxi_2.currentLocation);
var taxi_3 = new Taxi();
taxi_3.travelTo({ x: 1, y: 2 });
console.log(taxi_3.currentLocation);
