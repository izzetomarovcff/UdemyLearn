interface Point{
    x: number,
    y: number
}

interface Vehicle{
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    constructor(private _location?:Point, private _color?: string){  }
    // ..

    travelTo(point: Point): void{
        console.log(`Taksi x: ${this._location.x} y: ${this._location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor`)
    }   

    get location(){
        return this._location;
    }
    set location(value:Point){
        if(value.x<0 || value.y<0){
            throw new Error('Wrong Location')
        }else{
            this._location = value
        }
    }
}

class Bus implements Vehicle{
    // ..
    currentLocation: Point;

    travelTo(point: Point, ): void{
        console.log(`OtoBus x: ${point.x} y: ${point.y} konumuna gidiyor`)
    } 
}

let taxi_1: Taxi = new Taxi({x:2, y:5});
taxi_1.travelTo({x:1, y:2})

console.log(taxi_1.location)
taxi_1.location = {x:40, y:50}
console.log(taxi_1.location)



