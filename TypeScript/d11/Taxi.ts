import { Vehicle } from "./vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle{
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