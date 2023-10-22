"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    // ..
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi x: ".concat(this._location.x, " y: ").concat(this._location.y, " dan x: ").concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('Wrong Location');
            }
            else {
                this._location = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
exports.Taxi = Taxi;
