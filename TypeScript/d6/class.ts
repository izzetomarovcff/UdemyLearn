interface Point{
    x: number,
    y: number
}

interface Vehicle{
    cuurentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    // ..
    cuurentLocation: Point;
    travelTo(point: Point): void{
        console.log(`Taksi x: ${point.x} y: ${point.y} konumuna gidiyor`)
    }   
}

class Bus implements Vehicle{
    // ..
    cuurentLocation: Point;
    travelTo(point: Point): void{
        console.log(`OtoBus x: ${point.x} y: ${point.y} konumuna gidiyor`)
    } 
}