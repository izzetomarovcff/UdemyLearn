interface Point{
    x: number,
    y: number
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    color:string;
    constructor(location?:Point, color?: string){
        this.currentLocation = location
        this.color = color
    }
    // ..
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`Taksi x: ${point.x} y: ${point.y} konumuna gidiyor`)
    }   
}

class Bus implements Vehicle{
    // ..
    currentLocation: Point;
    travelTo(point: Point, ): void{
        console.log(`OtoBus x: ${point.x} y: ${point.y} konumuna gidiyor`)
    } 
}

let taxi_1: Taxi = new Taxi({x:2, y:5}, 'red');
taxi_1.travelTo({x:1, y:2})
console.log(taxi_1.currentLocation)

let taxi_2: Taxi = new Taxi({x:10, y:30},"red")
taxi_2.travelTo({x:1, y:2})
console.log(taxi_2.currentLocation)

let taxi_3: Taxi = new Taxi()
taxi_3.travelTo({x:1, y:2})
console.log(taxi_3.currentLocation)


