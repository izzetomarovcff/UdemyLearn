interface Point{
    x: number,
    y: number
}

interface Passanger{
    name: string;
    phone: string;
}

interface Vehicle{
    cuurentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point):number;
    addPassangers(passanger: Passanger): void
    removePassangers(passanger: Passanger): void
}